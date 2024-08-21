import { useEffect, useState } from "react";
import styled from "styled-components";
import Pagination from "./Pagination";
import { useNavigate } from "react-router-dom";
import { NoticeList } from "./NoticeList";
import { QnaList } from "./QnaList";
import axios from "axios";

const Img = styled.div`
  width: 100%;
  height: 700px;
  background-color: gray;
`;

const TitleBox = styled.div`
  margin: 0 auto;
  width: 70%;
  text-align: center;
  padding: 120px 0 140px;
  font-size: 3rem;
`;
const ContBox = styled.div``;

const ContListWrap = styled.div``;

const Tabs = styled.div`
  margin: 0 auto;
  display: flex;
  justify-content: space-evenly;
  width: 60%;
  padding-bottom: 50px;
  margin-bottom: 25px;
  border-bottom: 2px solid #575757;

  button {
    width: 50%;
    margin: 0 10px;
    padding: 10px 50px;
    cursor: pointer;
    border: none;
    background: none;
    font-size: 1.05rem;
    font-weight: 600;

    &.active {
      border-bottom: 2px soild black;
      border-radius: 30px;
      background-color: #d0d0d0;
      font-weight: bolder;
      transform: all 500ms;
    }
  }
`;

// 상탄 탭
const CusTabs = ({ selectedTab, setSelectedTab, setCurrentPage }) => {
  return (
    <Tabs>
      <button
        onClick={() => {
          setSelectedTab("notice");
          setCurrentPage(1);
        }}
        className={selectedTab === "notice" ? "active" : ""}
      >
        공지사항
      </button>
      <button
        onClick={() => {
          setSelectedTab("qna");
          setCurrentPage(1);
        }}
        className={selectedTab === "qna" ? "active" : ""}
      >
        Q&A
      </button>
    </Tabs>
  );
};

export function Customer() {
  const [selectedTab, setSelectedTab] = useState("notice");
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 10;

  const [notices, setNotices] = useState([]);
  const [qnas, setQnas] = useState([]);

  const navigate = useNavigate();

  const fetchNotices = async () => {
    try {
      const response = await axios.get("http://localhost:8080/api/notice"); // 백엔드 API 호출
      setNotices(response.data); // 가져온 데이터를 상태로 설정
    } catch (error) {
      console.log("Error fetching notices: ", error);
    }
  };

  useEffect(() => {
    fetchNotices();

    setQnas([
      {
        qnaId: 1,
        question: "Q&A 1",
        writeDate: "2024-08-01",
        content:
          "Q&A 1의 답변입니다. 이 Q&A는 사용자가 질문과 답변의 예시를 보는 것입니다.",
      },
      {
        qnaId: 2,
        question: "Q&A 2",
        writeDate: "2024-08-02",
        content:
          "Q&A 2의 답변입니다. 이 Q&A는 사용자가 질문과 답변의 예시를 보는 것입니다.",
      },
      {
        qnaId: 3,
        question: "Q&A 3",
        writeDate: "2024-08-03",
        content:
          "Q&A 3의 답변입니다. 이 Q&A는 사용자가 질문과 답변의 예시를 보는 것입니다.",
      },
      {
        qnaId: 4,
        question: "Q&A 4",
        writeDate: "2024-08-04",
        content:
          "Q&A 4의 답변입니다. 이 Q&A는 사용자가 질문과 답변의 예시를 보는 것입니다.",
      },
      {
        qnaId: 5,
        question: "Q&A 5",
        writeDate: "2024-08-05",
        content:
          "Q&A 5의 답변입니다. 이 Q&A는 사용자가 질문과 답변의 예시를 보는 것입니다.",
      },
      {
        qnaId: 6,
        question: "Q&A 6",
        writeDate: "2024-08-06",
        content:
          "Q&A 6의 답변입니다. 이 Q&A는 사용자가 질문과 답변의 예시를 보는 것입니다.",
      },
      {
        qnaId: 7,
        question: "Q&A 7",
        writeDate: "2024-08-07",
        content:
          "Q&A 7의 답변입니다. 이 Q&A는 사용자가 질문과 답변의 예시를 보는 것입니다.",
      },
      {
        qnaId: 8,
        question: "Q&A 8",
        writeDate: "2024-08-08",
        content:
          "Q&A 8의 답변입니다. 이 Q&A는 사용자가 질문과 답변의 예시를 보는 것입니다.",
      },
      {
        qnaId: 9,
        question: "Q&A 9",
        writeDate: "2024-08-09",
        content:
          "Q&A 9의 답변입니다. 이 Q&A는 사용자가 질문과 답변의 예시를 보는 것입니다.",
      },
      {
        qnaId: 10,
        question: "Q&A 10",
        writeDate: "2024-08-10",
        content:
          "Q&A 10의 답변입니다. 이 Q&A는 사용자가 질문과 답변의 예시를 보는 것입니다.",
      },
      {
        qnaId: 11,
        question: "Q&A 11",
        writeDate: "2024-08-11",
        content:
          "Q&A 11의 답변입니다. 이 Q&A는 사용자가 질문과 답변의 예시를 보는 것입니다.",
      },
    ]);
  }, []);

  const handleNoticeClick = (notice) => {
    navigate(`/notice/${notice.noticeId}`, { state: { notice } });
  };

  const handleQnaClick = (qna) => {
    navigate(`/qna/${qna.qnaId}`, { state: { qna } });
  };

  const currentData = selectedTab === "notice" ? notices : qnas;

  // 페이지네이션
  const startIdx = (currentPage - 1) * itemsPerPage;
  const endIdx = startIdx + itemsPerPage;
  const paginatedData = currentData.slice(startIdx, endIdx);

  return (
    <>
      <Img></Img>
      <TitleBox>공지사항 / Q&A</TitleBox>
      <CusTabs
        selectedTab={selectedTab}
        setSelectedTab={setSelectedTab}
        setCurrentPage={setCurrentPage}
      />
      <ContBox>
        <ContListWrap>
          {selectedTab === "notice" ? (
            <NoticeList
              notices={paginatedData}
              onNoticeClick={handleNoticeClick}
            />
          ) : (
            <QnaList qnas={paginatedData} onQnaClick={handleQnaClick} />
          )}
        </ContListWrap>
      </ContBox>
      <Pagination
        total={currentData.length}
        limit={itemsPerPage}
        page={currentPage}
        setPage={setCurrentPage}
      />
    </>
  );
}
