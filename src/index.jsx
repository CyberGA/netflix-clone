import React from "react";
import { render } from "react-dom";
import "normalize.css";
import App from "./App";
import { GlobalStyles } from "./globalStyles";
import { firebase } from "./lib/firebase.prod";
import { FirebaseContext } from "./context/firebase";

render(
  <>
    <FirebaseContext.Provider value={{ firebase }}>
      <GlobalStyles />
      <App />
    </FirebaseContext.Provider>
  </>,
  document.getElementById("root")
);

// I deconstructed render and replaced the React.render with only render

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
