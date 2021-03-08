import React from "react";
import { createStore } from "redux";
import { Provider } from "react-redux";

import Form from "components/Form";

import formApp from "./redux/reducers";

import "./index.css";

let store = createStore(formApp);

function App() {
  return (
    <Provider store={store}>
      <div className="app">
        <Form />
      </div>
    </Provider>
  );
}

export default App;
