import React from "react";
import ReactDOM from "react-dom";

import { JobApplication } from "./JobApplication";

function App() {
  return (
    <div className="App">
      <JobApplication />
    </div>
  );
}

const rootElement = document.getElementById("root");
ReactDOM.render(<App />, rootElement);
