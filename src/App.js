import React from "react";
import './App.css';
import FirstTask from "./components/FirstTask";
import SecondTask from "./components/SecondTask";
import ThirdTask from "./components/ThirdTask";
import Task1 from "./components_20_07/Task1";
import Task2 from "./components_20_07/Task2";

function App() {
  return (
      <>
          {/*<div>*/}
          {/*    <FirstTask/>*/}
          {/*    <SecondTask/>*/}
          {/*    <ThirdTask/>*/}
          {/*</div>*/}
          <div>
              <Task1/>
              <Task2/>
          </div>
      </>
  );
}

export default App;
