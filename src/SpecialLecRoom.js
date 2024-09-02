import axios from "axios";
import { useEffect, useState } from "react";
import styled from "styled-components";
import { useNavigate } from "react-router-dom";

const Img = styled.div`
  width: 100%;
  height: 600px;
  background-color: #7c7c7c;
`;

const Container = styled.div`
  display: flex;
  justify-content: center;
`;

const Title = styled.div`
  font-size: 48px;
`;

const Blank = styled.div`
  height: 200px;
`;

const Box = styled.div`
  width: 60%;
`;

const LectureBox = styled.div``;

const StreamBoxGrid = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  gap: 20px;
`;

const StreamBox = styled.div`
  width: 370px;
  height: 210px;
  background-color: #d9d9d9;
  margin-top: 20px;
  cursor: pointer;
`;

const StreamName = styled.div`
  font-size: 32px;
  font-weight: bold;
  margin-top: 10px;
`;

const StreamLiveBox = styled.div`
  display: flex;
  margin-top: 50px;
  align-items: center;
`;

const LiveBox = styled.div`
  width: 80px;
  height: 30px;
  background-color: ${(props) => (props.isLive ? "red" : "gray")};
  color: white;
  font-size: 20px;
  text-align: center;
  line-height: 30px;
  margin-right: 10px;
`;

const LiveUser = styled.div`
  font-size: 20px;
`;

const CreateStreamBtn = styled.div`
  width: 150px;
  height: 25px;
  background-color: darkgray;
  text-align: center;
  padding: 10px;
  border-radius: 10px;
  margin-top: 50px;
  cursor: pointer;
  &:hover {
    background-color: gray;
  }
`;

export function SpecialLecRoom() {
  const [lectureRooms, setLecRooms] = useState([]);
  const [userAuthority, setUserAuthority] = useState(null);
  const navigate = useNavigate();

  useEffect(() => {
    axios
      .get("/api/stream/lectures")
      .then((response) => {
        setLecRooms(response.data);
      })
      .catch((error) => {
        console.log("에러 : ", error);
      });

    const sessionAuthority = sessionStorage.getItem("Authority");
    if (sessionAuthority) {
      setUserAuthority(sessionAuthority);
    }
  }, []);

  const isLectureActive = (startTime, endTime) => {
    const now = new Date();
    const start = new Date(startTime);
    const end = new Date(endTime);
    return now >= start && now <= end;
  };

  return (
    <>
      <Img></Img>
      <Container>
        <Box>
          <Blank></Blank>
          <Title>실시간 특강 스터디룸</Title>
          <StreamBoxGrid>
            {lectureRooms.map((lectureRoom) => {
              const isActive = isLectureActive(
                lectureRoom.startTime,
                lectureRoom.endTime
              );
              return (
                <LectureBox key={lectureRoom.streamId}>
                  <StreamLiveBox>
                    <LiveBox isLive={isActive}>
                      {isActive ? "Live" : "종료"}
                    </LiveBox>
                    <LiveUser>
                      👥{" "}
                      {isActive
                        ? `${lectureRoom.viewerCount}명 시청중`
                        : "종료된 강의"}
                    </LiveUser>
                  </StreamLiveBox>
                  <StreamBox
                    onClick={() => {
                      // if (isActive) {
                      navigate(`${lectureRoom.streamId}`);
                      // } else {
                      //   alert("이미 종료된 강의입니다.");
                      // }
                    }}
                  ></StreamBox>
                  <StreamName>{lectureRoom.streamTitle}</StreamName>
                </LectureBox>
              );
            })}
          </StreamBoxGrid>
          {userAuthority === "ROLE_ADMIN" && (
            <CreateStreamBtn onClick={() => navigate("/create-stream")}>
              스트리밍 예약
            </CreateStreamBtn>
          )}
          <Blank></Blank>
        </Box>
      </Container>
    </>
  );
}
