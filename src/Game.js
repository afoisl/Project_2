import { useState, useEffect } from "react";
import { Unity, useUnityContext } from "react-unity-webgl";
import styled from "styled-components";

const Title = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  padding: 120px 0 140px;
`;
const H1 = styled.h1``;
const StartButton = styled.button``;

const Container = styled.div`
  width: 400px;
  height: 700px;
  margin: auto;
  margin-bottom: 100px;
  margin-top: -50px;
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
        <H1>Word Rush Game</H1>
        <StartButton onClick={() => setPlayingGame(true)}>
          Start Game
        </StartButton>
      </Title>

      <Container>
        {playingGame ? (
          <Unity
            unityProvider={unityProvider}
            style={{
              width: "100%",
              height: "100%",
            }}
          />
        ) : null}
      </Container>
      {isGameOver && (
        <p>{`Game Over ${userName}! You've scored ${score} points.`}</p>
      )}
    </>
  );
}
