import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./components/App";
import * as serviceWorker from "./serviceWorker";
import Firebase, { FirebaseContext } from "./components/Firebase";
import cartReducer from "./components/reducers/cartReducer";
import { Provider } from "react-redux";
import { createStore } from "redux";
import MediaQuery from "react-responsive";
import MobileSignUp from "./components/MobileSignUp";

const store = createStore(cartReducer);

ReactDOM.render(
  <FirebaseContext.Provider value={new Firebase()}>
    <Provider store={store}>
      {/* <MediaQuery minWidth={1218}> */}
      <App />
      {/* </MediaQuery>
      <MediaQuery maxWidth={1218}>
        <h1>
          Please view on desktop in fullscreen mode! we're working on mobile and
          tablet compatibility! <br /> <br />
          (｀･ω･´)
          <br />
          <br /> (ﾉ◕ヮ◕)ﾉ*:･ﾟ✧ <br />
          <br /> ┐(︶▽︶)┌
        </h1>
        <MobileSignUp />
      </MediaQuery>{" "} */}
    </Provider>
  </FirebaseContext.Provider>,
  document.getElementById("root")
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
