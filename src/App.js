import React from "react";
import {
  appName,
  userName,
  githubUserName,
} from "./constants/GenericConstants";
import { headerStyle } from "./asserts/StyleAsserts";

const App = () => {
  return (
    <div>
      <header style={headerStyle}>
        <h1>{appName}</h1>
      </header>

      <hr />
      <h1>
        Welcome <a target="_blank" href={`https://github.com/${githubUserName}/`}> {userName} </a>
      </h1>
    </div>
  );
};

export default App;
