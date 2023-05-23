import { styled } from "styled-components";
import Spinner from "./components/general/Spinner";
import React from "react";
import Layout from "./components/Layout";

const LoadingScreen = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height: 100vh;
  width: 100vw;
  position: absolute;
  top: 0;
  background-color: black;
`;

interface AppProps {
  windowWidth: number | null;
}

const App: React.FC<AppProps> = (props) => {
  if (!props.windowWidth) {
    return (
      <LoadingScreen>
        <Spinner />
        <span style={{ marginTop: 30 }}>Loading...</span>
      </LoadingScreen>
    );
  }

  return <Layout windowWidth={props.windowWidth}>Hello World!</Layout>;
};

export default App;
