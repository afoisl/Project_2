import { useEffect, useState } from "react";
import styled from "styled-components";

const Img = styled.div`
  width: 100%;
  height: 700px;
  background-color: gray;
`;

const TitleBox = styled.div`
  text-align: center;
  padding: 120px 0 150px;
  font-size: 3rem;
`;
const ContBox = styled.div``;

const ContList = styled.div`
  padding: 20px;
`;

const ContListWrap = styled.div``;

const Tabs = styled.div`
  display: flex;
  justify-content: space-evenly;
  margin-bottom: 20px;

  button {
    margin: 0 10px;
    padding: 10px 50px;
    cursor: pointer;
    border: none;
    background: none;
    font-size: 1.2rem;
    font-weight: 600;

    &.active {
      border-bottom: 2px soild black;
      background-color: #d0d0d0;
      font-weight: bold;
      transform: all 500ms;
    }
  }
`;

const CusTabs = ({ selectedTab, setSelectedTab }) => {
  return (
    <Tabs>
      <button
        onClick={() => setSelectedTab("notice")}
        className={selectedTab === "notice" ? "active" : ""}
      >
        공지사항
      </button>
      <button
        onClick={() => setSelectedTab("qa")}
        className={selectedTab === "qa" ? "active" : ""}
      >
        Q&A
      </button>
    </Tabs>
  );
};

export function Customer() {
  const [selectedTab, setSelectedTab] = useState("notice");
  const [notices, setNotices] = useState([]);
  const [qnas, setQnas] = useState([]);

  // useEffect(() => {
  //   const fetchNotices = async () => {
  //     try {
  //       const response = await axios.get("api/notices");
  //       setNotices(response.data);
  //     } catch (error) {
  //       console.log("error : ", error);
  //     }
  //   };

  //   const fetchQnas = async () => {
  //     try {
  //       const response = await axios.get("/api/qnas");
  //       setQnas(response.data);
  //     } catch (error) {
  //       console.error("Error fetching Q&As:", error);
  //     }
  //   };

  //   fetchNotices();
  //   fetchQnas();
  // }, []);

  return (
    <>
      <Img></Img>
      <TitleBox>공지사항 / Q&A</TitleBox>
      <CusTabs selectedTab={selectedTab} setSelectedTab={setSelectedTab} />
      <ContBox>
        <ContListWrap>
          {selectedTab === "notice"
            ? notices.map((notice) => (
                <ContList key={notice.noticeId}>
                  <h3>{notice.title}</h3>
                  <p>{notice.content}</p>
                  <p>작성일: {notice.writeDate}</p>
                </ContList>
              ))
            : qnas.map((qna) => (
                <ContList key={qna.id}>
                  <h3>{qna.question}</h3>
                  <p>{qna.answer}</p>
                </ContList>
              ))}
        </ContListWrap>
      </ContBox>
    </>
  );
}
