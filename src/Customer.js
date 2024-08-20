import { useEffect, useState } from "react";
import styled from "styled-components";
import Pagination from "./Pagination";
import { Link, Route, Routes, useNavigate } from "react-router-dom";
import { NoticeList } from "./NoticeList";
import { QnaList } from "./QnaList";
import { NoticeDetail } from "./NoticeDetail";

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

const ContList = styled.div`
  margin: 0 auto;
  width: 57%;
  display: flex;
  justify-content: space-between;
  padding: 10px;
  border-bottom: 1px solid #c8c8c8;
`;

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

const Partition = styled.div`
  width: 1px;
  height: 40px;
  margin-top: 5px;
  background-color: #c3c3c3;
`;

const Title = styled.div`
  padding-left: 10px;
  font-size: 1.2rem;
  margin: 20px 0;
  font-weight: 600;
`;

const Content = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  padding-right: 10px;
  font-weight: 200;
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
      {/* <Partition></Partition> */}
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
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 10;

  const [notices, setNotices] = useState([]);
  const [qnas, setQnas] = useState([]);

  const navigate = useNavigate();

  useEffect(() => {
    setNotices([
      {
        noticeId: 1,
        title: "[인투어학원] 공지사항",
        writeDate: "2024-08-01",
        content:
          "2024년 9월 4일부터 롯데쇼핑의 구매회원 이용약관이 개정됩니다. 개정된 내용은 고객센터에서 확인하실 수 있습니다.",
      },
      {
        noticeId: 2,
        title: "공지사항 2",
        writeDate: "2024-08-02",
        content:
          "공지사항 2의 내용입니다. 이 공지사항은 사용자가 공지사항의 예시를 보는 것입니다.",
      },
      {
        noticeId: 3,
        title: "공지사항 3",
        writeDate: "2024-08-03",
        content:
          "공지사항 3의 내용입니다. 이 공지사항은 사용자가 공지사항의 예시를 보는 것입니다.",
      },
      {
        noticeId: 4,
        title: "공지사항 4",
        writeDate: "2024-08-04",
        content:
          "공지사항 4의 내용입니다. 이 공지사항은 사용자가 공지사항의 예시를 보는 것입니다.",
      },
      {
        noticeId: 5,
        title: "공지사항 5",
        writeDate: "2024-08-05",
        content:
          "공지사항 5의 내용입니다. 이 공지사항은 사용자가 공지사항의 예시를 보는 것입니다.",
      },
      {
        noticeId: 6,
        title: "공지사항 6",
        writeDate: "2024-08-06",
        content:
          "공지사항 6의 내용입니다. 이 공지사항은 사용자가 공지사항의 예시를 보는 것입니다.",
      },
      {
        noticeId: 7,
        title: "공지사항 7",
        writeDate: "2024-08-07",
        content:
          "공지사항 7의 내용입니다. 이 공지사항은 사용자가 공지사항의 예시를 보는 것입니다.",
      },
      {
        noticeId: 8,
        title: "공지사항 8",
        writeDate: "2024-08-08",
        content:
          "공지사항 8의 내용입니다. 이 공지사항은 사용자가 공지사항의 예시를 보는 것입니다.",
      },
      {
        noticeId: 9,
        title: "공지사항 9",
        writeDate: "2024-08-09",
        content:
          "공지사항 9의 내용입니다. 이 공지사항은 사용자가 공지사항의 예시를 보는 것입니다.",
      },
      {
        noticeId: 10,
        title: "공지사항 10",
        writeDate: "2024-08-10",
        content:
          "공지사항 10의 내용입니다. 이 공지사항은 사용자가 공지사항의 예시를 보는 것입니다.",
      },
      {
        noticeId: 11,
        title: "공지사항 11",
        writeDate: "2024-08-11",
        content:
          "공지사항 11의 내용입니다. 이 공지사항은 사용자가 공지사항의 예시를 보는 것입니다.",
      },
    ]);

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
  }, []);

  const handleNoticeClick = (notice) => {
    navigate(`/notice/${notice.noticeId}`, { state: { notice } });
  };

  const handleQnaClick = (qna) => {
    navigate(`/qna/${qna.qnaId}`, { state: { qna } });
  };

  const currentData = selectedTab === "notice" ? notices : qnas;

  // 현재 페이지에 맞는 데이터 계산
  const startIdx = (currentPage - 1) * itemsPerPage;
  const endIdx = startIdx + itemsPerPage;
  const paginatedData = currentData.slice(startIdx, endIdx);

  return (
    <>
      <Img></Img>
      <TitleBox>공지사항 / Q&A</TitleBox>
      <CusTabs selectedTab={selectedTab} setSelectedTab={setSelectedTab} />
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
