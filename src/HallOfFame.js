import React, { useState } from "react";
import styled from "styled-components";

const HallOfFameBox = styled.div`
  width: 100%;
  height: 850px;
  background-color: #7c7c7c;
  box-sizing: border-box;
  padding: 100px;
`;

const Container = styled.div`
  width: 60%;
  margin: auto;
`;

const HallOfFameText1 = styled.div`
  font-size: 48px;
  font-weight: bold;
  text-align: center;
`;

const HallOfFameText2 = styled.div`
  font-size: 24px;
  text-align: center;
  margin-top: 20px;
  margin-bottom: 70px;
`;

const RankingImage = styled.div`
  width: 580px;
  height: 380px;
  margin: auto;
  background-color: white;
`;

const TestGo = styled.div`
  width: 280px;
  height: 70px;
  display: flex;
  justify-content: center;
  align-items: center;
  margin: 50px auto 0 auto;
  border: 1px solid white;
  color: white;
  font-size: 30px;
`;
const Box1 = styled.div`
  margin-top: 150px;
`;
const RankingImage2 = styled.div`
  width: 100%;
  height: 380px;
  background-color: #d9d9d9;
`;

const RankingTop10 = styled.div`
  width: 100%;
  background-color: #7c7c7c;
  text-align: center;
  font-size: 30px;
  font-weight: bold;
  line-height: 70px;
  color: white;
  border: 1px solid black;
`;
const Top10Table = styled.table`
  width: 100%;
  color: black;
  border-collapse: separate;
  border-spacing: 0px;
`;

const TableCell = styled.td`
  padding-left: 35px;
  padding-right: 35px;
`;
const RankingTable = styled.div`
  text-align: center;
  width: 100%;
  background-color: #7c7c7c;
  line-height: 70px;
  color: white;
  font-weight: bold;
  font-size: 30px;
  border: 1px solid black;
  cursor: pointer;
`;
const Table1 = styled.div`
  height: 750px;
  background-color: white;
  font-weight: lighter;
`;
const Table2 = styled.div`
  height: 750px;
  font-weight: lighter;
  background-color: white;
  display: ${({ isVisible }) => (isVisible ? "block" : "none")};
`;
const Box2 = styled.div`
  margin-top: 130px;
`;
const MyRankText = styled.div`
  font-size: 43px;
  font-weight: bold;
  text-align: center;
`;
const MyRankImg = styled.div`
  width: 270px;
  height: 270px;
  margin: 50px auto;
  border: 1px solid black;
`;

const MyRankText2 = styled.div`
  font-size: 33px;
  font-weight: bold;
  text-align: center;
`;
const Box3 = styled.div`
  margin-top: 130px;
  margin-bottom: 200px;
`;
const MyRankGrid = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
`;
const MyRankGrape = styled.div`
  width: 550px;
  height: 380px;
  background-color: #d9d9d9;
`;
const RankGrid1 = styled.div``;
const RankGrid2 = styled.div``;
const MyRankScore = styled.div`
  font-size: 44px;
  font-weight: bold;
  margin-bottom: 50px;
`;
const MyScoreGrid = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
`;
const MyProfileImg = styled.div`
  height: 270px;
  width: 270px;
  background-color: #d9d9d9;
`;
const MyProfileText = styled.div`
  font-size: 32px;
  line-height: 66px;
`;
const Footer = styled.div`
  width: 100%;
  height: 70px;
  padding: 30px 0;
  text-align: center;
  background-color: #8e8e8e;
  color: white;
  line-height: 30px;
  font-size: 24px;
`;

export function HallOfFame() {
  const [isRanking900Click, setIsRanking900Click] = useState(false);
  const [isRanking800Click, setIsRanking800Click] = useState(false);
  const [isRanking700Click, setIsRanking700Click] = useState(false);
  const [isRanking600Click, setIsRanking600Click] = useState(false);
  const [isRanking500Click, setIsRanking500Click] = useState(false);
  const [isRanking400Click, setIsRanking400Click] = useState(false);
  const [isRanking300Click, setIsRanking300Click] = useState(false);

  const Ranking900Click = () => {
    setIsRanking900Click(!isRanking900Click); // 상태를 토글
  };
  const Ranking800Click = () => {
    setIsRanking800Click(!isRanking800Click);
  };
  const Ranking700Click = () => {
    setIsRanking700Click(!isRanking700Click);
  };
  const Ranking600Click = () => {
    setIsRanking600Click(!isRanking600Click);
  };
  const Ranking500Click = () => {
    setIsRanking500Click(!isRanking500Click);
  };
  const Ranking400Click = () => {
    setIsRanking400Click(!isRanking400Click);
  };
  const Ranking300Click = () => {
    setIsRanking300Click(!isRanking300Click);
  };
  return (
    <>
      <HallOfFameBox>
        <HallOfFameText1>명예의 전당에 이름을 올리세요</HallOfFameText1>
        <HallOfFameText2>
          시험을 통해 나의 실력을 확인 할 수 있는 시간! 명예의 전당에 이름을
          올려보세요!
        </HallOfFameText2>
        <RankingImage>
          <p>명예의 전당 이미지 1,2,3 등만 표시</p>
        </RankingImage>
        <TestGo>모의고사 응모하기</TestGo>
      </HallOfFameBox>
      <Container>
        <Box1>
          <RankingImage2>명예의 전당 1,2,3 등만 표시</RankingImage2>
          <RankingTop10>
            이번달의 TOP 10
            <Table1>
              <Top10Table>
                <table>
                  <tbody>
                    <tr>
                      <TableCell>1</TableCell>
                      <TableCell>이름</TableCell>
                      <TableCell>최초 점수</TableCell>
                      <TableCell>현재 점수</TableCell>
                      <TableCell>보상포인트</TableCell>
                    </tr>
                    <tr>
                      <TableCell>2</TableCell>
                    </tr>
                    <tr>
                      <TableCell>3</TableCell>
                    </tr>
                    <tr>
                      <TableCell>4</TableCell>
                    </tr>
                    <tr>
                      <TableCell>5</TableCell>
                    </tr>
                    <tr>
                      <TableCell>6</TableCell>
                    </tr>
                    <tr>
                      <TableCell>7</TableCell>
                    </tr>
                    <tr>
                      <TableCell>8</TableCell>
                    </tr>
                    <tr>
                      <TableCell>9</TableCell>
                    </tr>
                    <tr>
                      <TableCell>10</TableCell>
                    </tr>
                  </tbody>
                </table>
              </Top10Table>
            </Table1>
          </RankingTop10>
          <RankingTable onClick={Ranking900Click}>
            900점
            <Table2 isVisible={isRanking900Click}>
              <Top10Table>
                <table>
                  <tbody>
                    <tr>
                      <TableCell>1</TableCell>
                      <TableCell>이름</TableCell>
                      <TableCell>최초 점수</TableCell>
                      <TableCell>현재 점수</TableCell>
                      <TableCell>보상포인트</TableCell>
                    </tr>
                    <tr>
                      <TableCell>2</TableCell>
                    </tr>
                    <tr>
                      <TableCell>3</TableCell>
                    </tr>
                    <tr>
                      <TableCell>4</TableCell>
                    </tr>
                    <tr>
                      <TableCell>5</TableCell>
                    </tr>
                    <tr>
                      <TableCell>6</TableCell>
                    </tr>
                    <tr>
                      <TableCell>7</TableCell>
                    </tr>
                    <tr>
                      <TableCell>8</TableCell>
                    </tr>
                    <tr>
                      <TableCell>9</TableCell>
                    </tr>
                    <tr>
                      <TableCell>10</TableCell>
                    </tr>
                  </tbody>
                </table>
              </Top10Table>
            </Table2>
          </RankingTable>
          <RankingTable onClick={Ranking800Click}>
            800점
            <Table2 isVisible={isRanking800Click}>
              <Top10Table>
                <table>
                  <tbody>
                    <tr>
                      <TableCell>1</TableCell>
                      <TableCell>이름</TableCell>
                      <TableCell>최초 점수</TableCell>
                      <TableCell>현재 점수</TableCell>
                      <TableCell>보상포인트</TableCell>
                    </tr>
                    <tr>
                      <TableCell>2</TableCell>
                    </tr>
                    <tr>
                      <TableCell>3</TableCell>
                    </tr>
                    <tr>
                      <TableCell>4</TableCell>
                    </tr>
                    <tr>
                      <TableCell>5</TableCell>
                    </tr>
                    <tr>
                      <TableCell>6</TableCell>
                    </tr>
                    <tr>
                      <TableCell>7</TableCell>
                    </tr>
                    <tr>
                      <TableCell>8</TableCell>
                    </tr>
                    <tr>
                      <TableCell>9</TableCell>
                    </tr>
                    <tr>
                      <TableCell>10</TableCell>
                    </tr>
                  </tbody>
                </table>
              </Top10Table>
            </Table2>
          </RankingTable>
          <RankingTable onClick={Ranking700Click}>
            700점
            <Table2 isVisible={isRanking700Click}>
              <Top10Table>
                <table>
                  <tbody>
                    <tr>
                      <TableCell>1</TableCell>
                      <TableCell>이름</TableCell>
                      <TableCell>최초 점수</TableCell>
                      <TableCell>현재 점수</TableCell>
                      <TableCell>보상포인트</TableCell>
                    </tr>
                    <tr>
                      <TableCell>2</TableCell>
                    </tr>
                    <tr>
                      <TableCell>3</TableCell>
                    </tr>
                    <tr>
                      <TableCell>4</TableCell>
                    </tr>
                    <tr>
                      <TableCell>5</TableCell>
                    </tr>
                    <tr>
                      <TableCell>6</TableCell>
                    </tr>
                    <tr>
                      <TableCell>7</TableCell>
                    </tr>
                    <tr>
                      <TableCell>8</TableCell>
                    </tr>
                    <tr>
                      <TableCell>9</TableCell>
                    </tr>
                    <tr>
                      <TableCell>10</TableCell>
                    </tr>
                  </tbody>
                </table>
              </Top10Table>
            </Table2>
          </RankingTable>
          <RankingTable onClick={Ranking600Click}>
            600점
            <Table2 isVisible={isRanking600Click}>
              <Top10Table>
                <table>
                  <tbody>
                    <tr>
                      <TableCell>1</TableCell>
                      <TableCell>이름</TableCell>
                      <TableCell>최초 점수</TableCell>
                      <TableCell>현재 점수</TableCell>
                      <TableCell>보상포인트</TableCell>
                    </tr>
                    <tr>
                      <TableCell>2</TableCell>
                    </tr>
                    <tr>
                      <TableCell>3</TableCell>
                    </tr>
                    <tr>
                      <TableCell>4</TableCell>
                    </tr>
                    <tr>
                      <TableCell>5</TableCell>
                    </tr>
                    <tr>
                      <TableCell>6</TableCell>
                    </tr>
                    <tr>
                      <TableCell>7</TableCell>
                    </tr>
                    <tr>
                      <TableCell>8</TableCell>
                    </tr>
                    <tr>
                      <TableCell>9</TableCell>
                    </tr>
                    <tr>
                      <TableCell>10</TableCell>
                    </tr>
                  </tbody>
                </table>
              </Top10Table>
            </Table2>
          </RankingTable>
          <RankingTable onClick={Ranking500Click}>
            500점
            <Table2 isVisible={isRanking500Click}>
              <Top10Table>
                <table>
                  <tbody>
                    <tr>
                      <TableCell>1</TableCell>
                      <TableCell>이름</TableCell>
                      <TableCell>최초 점수</TableCell>
                      <TableCell>현재 점수</TableCell>
                      <TableCell>보상포인트</TableCell>
                    </tr>
                    <tr>
                      <TableCell>2</TableCell>
                    </tr>
                    <tr>
                      <TableCell>3</TableCell>
                    </tr>
                    <tr>
                      <TableCell>4</TableCell>
                    </tr>
                    <tr>
                      <TableCell>5</TableCell>
                    </tr>
                    <tr>
                      <TableCell>6</TableCell>
                    </tr>
                    <tr>
                      <TableCell>7</TableCell>
                    </tr>
                    <tr>
                      <TableCell>8</TableCell>
                    </tr>
                    <tr>
                      <TableCell>9</TableCell>
                    </tr>
                    <tr>
                      <TableCell>10</TableCell>
                    </tr>
                  </tbody>
                </table>
              </Top10Table>
            </Table2>
          </RankingTable>
          <RankingTable onClick={Ranking400Click}>
            400점
            <Table2 isVisible={isRanking400Click}>
              <Top10Table>
                <table>
                  <tbody>
                    <tr>
                      <TableCell>1</TableCell>
                      <TableCell>이름</TableCell>
                      <TableCell>최초 점수</TableCell>
                      <TableCell>현재 점수</TableCell>
                      <TableCell>보상포인트</TableCell>
                    </tr>
                    <tr>
                      <TableCell>2</TableCell>
                    </tr>
                    <tr>
                      <TableCell>3</TableCell>
                    </tr>
                    <tr>
                      <TableCell>4</TableCell>
                    </tr>
                    <tr>
                      <TableCell>5</TableCell>
                    </tr>
                    <tr>
                      <TableCell>6</TableCell>
                    </tr>
                    <tr>
                      <TableCell>7</TableCell>
                    </tr>
                    <tr>
                      <TableCell>8</TableCell>
                    </tr>
                    <tr>
                      <TableCell>9</TableCell>
                    </tr>
                    <tr>
                      <TableCell>10</TableCell>
                    </tr>
                  </tbody>
                </table>
              </Top10Table>
            </Table2>
          </RankingTable>
          <RankingTable onClick={Ranking300Click}>
            300점
            <Table2 isVisible={isRanking300Click}>
              <Top10Table>
                <table>
                  <tbody>
                    <tr>
                      <TableCell>1</TableCell>
                      <TableCell>이름</TableCell>
                      <TableCell>최초 점수</TableCell>
                      <TableCell>현재 점수</TableCell>
                      <TableCell>보상포인트</TableCell>
                    </tr>
                    <tr>
                      <TableCell>2</TableCell>
                    </tr>
                    <tr>
                      <TableCell>3</TableCell>
                    </tr>
                    <tr>
                      <TableCell>4</TableCell>
                    </tr>
                    <tr>
                      <TableCell>5</TableCell>
                    </tr>
                    <tr>
                      <TableCell>6</TableCell>
                    </tr>
                    <tr>
                      <TableCell>7</TableCell>
                    </tr>
                    <tr>
                      <TableCell>8</TableCell>
                    </tr>
                    <tr>
                      <TableCell>9</TableCell>
                    </tr>
                    <tr>
                      <TableCell>10</TableCell>
                    </tr>
                  </tbody>
                </table>
              </Top10Table>
            </Table2>
          </RankingTable>
        </Box1>
        <Box2>
          <MyRankText>나의 랭크는?</MyRankText>
          <MyRankImg></MyRankImg>
          <MyRankText2>000입니다</MyRankText2>
        </Box2>
        <Box3>
          <MyRankGrid>
            <RankGrid1>
              <MyRankScore>내 점수 보기</MyRankScore>
              <MyScoreGrid>
                <MyProfileImg></MyProfileImg>
                <MyProfileText>
                  이름 : <br />
                  점수 : <br />
                  등급 : <br />
                  등수 :
                </MyProfileText>
              </MyScoreGrid>
            </RankGrid1>
            <RankGrid2>
              <MyRankGrape></MyRankGrape>
            </RankGrid2>
          </MyRankGrid>
        </Box3>
      </Container>
      <Footer>
        Footer <br />
        Designed by MajorFlow
      </Footer>
    </>
  );
}
