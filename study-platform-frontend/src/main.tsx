import React from "react";
import ReactDOM from "react-dom/client";
import GlobalStyle from "./GlobalStyle.tsx";
import { Provider } from "react-redux";
import store from "./store/store.ts";
import AppContainer from "./AppContainer.tsx";

ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
  <React.StrictMode>
    <GlobalStyle />
    <Provider store={store}>
      <AppContainer />
    </Provider>
  </React.StrictMode>
);
