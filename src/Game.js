import { useState, useEffect } from "react";
import { Unity, useUnityContext } from "react-unity-webgl";
import styled from "styled-components";
import 게임타이틀 from "./assets/img/게임타이틀.png";

const Title = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  padding: 120px 0 140px;
`;
const H1 = styled.div`
  font-size: 3rem;
  font-family: GmarketBold;
`;
const GameImg = styled.img`
  width: 800px;
  height: 500px;
  border-radius: 25px;
  margin-top: 70px;
`;
const StartButton = styled.button`
  width: 300px;
  height: 60px;
  border-radius: 40px;
  font-size: 1.5rem;
  font-family: poppinsRegular;
  margin: 50px 0 280px;
`;

const Container = styled.div`
  width: 1000px;
  height: 600px;
  margin: auto;
  margin-bottom: 100px;
  margin-top: -70px;
  border: 1px solid gray;
`;

export function Game() {
  const [playingGame, setPlayingGame] = useState(false);
  const [isGameOver, setIsGameOver] = useState(false);
  const [userName, setUserName] = useState();
  const [score, setScore] = useState();

  const { unityProvider, sendMessage, addEventListener, removeEventListener } =
    useUnityContext({
      loaderUrl: "build/Build.loader.js",
      dataUrl: "build/Build.data",
      frameworkUrl: "build/Build.framework.js",
      codeUrl: "build/Build.wasm",
    });

  function handleGameOver(userName, score) {
    setIsGameOver(true);
    setUserName(userName);
    setScore(score);
  }

  useEffect(() => {
    addEventListener("GameOver", handleGameOver);
    return () => {
      removeEventListener("GameOver", handleGameOver);
    };
  }, []);

  return (
    <>
      <Title>
        <H1>Into Island</H1>
        {!playingGame && <GameImg src={게임타이틀}></GameImg>}
        {!playingGame && (
          <StartButton onClick={() => setPlayingGame(true)}>
            Game Start
          </StartButton>
        )}
      </Title>

      {playingGame && (
        <Container>
          <Unity
            unityProvider={unityProvider}
            style={{
              width: "100%",
              height: "100%",
            }}
          />
        </Container>
      )}

      {isGameOver && (
        <p>{`Game Over ${userName}! You've scored ${score} points.`}</p>
      )}
    </>
  );
}
