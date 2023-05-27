import { useEffect, useState } from "react";
import App from "./App";
import { BrowserRouter } from "react-router-dom";

const AppContainer: React.FC = () => {
  const [windowWidth, setWindowWidth] = useState<number | null>(null);

  useEffect(() => {
    const handleWindowResize = () => {
      setWindowWidth(window.innerWidth);
    };

    window.onresize = handleWindowResize;
    window.onload = handleWindowResize;

    return () => {
      window.removeEventListener("resize", handleWindowResize);
      window.removeEventListener("onload", handleWindowResize);
    };
  });

  return (
    <BrowserRouter>
      <App windowWidth={windowWidth} />
    </BrowserRouter>
  );
};

export default AppContainer;
