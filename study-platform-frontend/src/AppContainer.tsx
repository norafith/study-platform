import { useEffect, useState } from "react";
import App from "./App";

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

  return <App windowWidth={windowWidth} />;
};

export default AppContainer;
