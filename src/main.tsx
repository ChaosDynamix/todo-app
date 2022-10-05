import App from "@components/App";
import reducer from "@reducers/root-reducer";
import React from "react";
import ReactDOM from "react-dom/client";
import {Provider} from "react-redux";
import {configureStore} from "@reduxjs/toolkit";
import "./main.css";

const store = configureStore({
  reducer: reducer,
});

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
    <Provider store={store}>
      <App />
    </Provider>
  </React.StrictMode>
);
