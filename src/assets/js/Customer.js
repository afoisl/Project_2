import { useEffect, useState } from "react";
import styled from "styled-components";
import Pagination from "./Pagination";
import { useLocation, useNavigate } from "react-router-dom";
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
        1:1 문의
      </button>
    </Tabs>
  );
};

export function Customer() {
  const location = useLocation();
  const initialTab = location.state?.selectedTab || "notice"; // 전달된 상태 없으면 기본값으로 "notice"
  const [selectedTab, setSelectedTab] = useState(initialTab);
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 10;

  const [notices, setNotices] = useState([]);
  const [qnas, setQnas] = useState([]);

  const navigate = useNavigate();

  const fetchNotices = async () => {
    const jwtToken = sessionStorage.getItem("JWT-Token");
    if (!jwtToken) {
      throw new Error("JWT Token not found in sessionStorage");
    }
    try {
      const jwtToken = sessionStorage.getItem("JWT-Token");
      if (jwtToken != null) {
        const response = await axios.get("/api/notice", {
          withCredentials: true,
          headers: {
            Authorization: `Bearer ${jwtToken}`,
          },
        }); // 백엔드 API 호출
        setNotices(response.data.reverse());
      } // 가져온 데이터를 상태로 설정
    } catch (error) {
      console.log("Error fetching notices: ", error);
    }
  };

  const fetchQnas = async () => {
    const jwtToken = sessionStorage.getItem("JWT-Token");
    if (!jwtToken) {
      throw new Error("JWT Token not found in sessionStorage");
    }
    try {
      const jwtToken = sessionStorage.getItem("JWT-Token");
      if (jwtToken != null) {
        const response = await axios.get("/api/qna", {
          withCredentials: true,
          headers: {
            Authorization: `Bearer ${jwtToken}`,
          },
        }); // 백엔드 API 호출
        setQnas(response.data.reverse());
      } // 가져온 데이터를 상태로 설정
    } catch (error) {
      console.log("Error fetching notices: ", error);
    }
  };

  useEffect(() => {
    fetchNotices();
    fetchQnas();
  }, []);

  const handleNoticeClick = (notice) => {
    navigate(`/notice/${notice.noticeId}`, { state: { notice } });
  };

  const handleQnaClick = (qna) => {
    console.log("Navigating to QnaDetail with qna:", qna); // qna 확인
    navigate(`/qna/${qna.qnaId}`, { state: { qna } });
  };

  const currentData = selectedTab === "notice" ? notices : qnas;

  // 페이지네이션
  const startIdx = (currentPage - 1) * itemsPerPage;
  const endIdx = startIdx + itemsPerPage;
  const paginatedData = currentData.slice(startIdx, endIdx);

  return (
    <>
      {/* <Img></Img> */}
      <TitleBox>공지사항 / 1:1 문의</TitleBox>
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
