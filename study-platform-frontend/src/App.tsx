import { styled } from "styled-components";
import Spinner from "./components/general/Spinner";
import React from "react";
import Layout from "./components/Layout";
import {
  createBrowserRouter,
  createRoutesFromElements,
  Route,
  RouterProvider,
} from "react-router-dom";

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

const router = createBrowserRouter(
  createRoutesFromElements(<Route path="/" element={<div>Test</div>} />)
);

const App: React.FC<AppProps> = (props) => {
  if (!props.windowWidth) {
    return (
      <LoadingScreen>
        <Spinner $sizeInPx={100} />
        <span style={{ marginTop: 30 }}>Loading...</span>
      </LoadingScreen>
    );
  }

  return (
    <Layout windowWidth={props.windowWidth}>
      <RouterProvider router={router} />
    </Layout>
  );
};

export default App;
