import React from "react";
import classes from "./App.module.scss";
import Input from "./components/Input";
import TaskList from "./components/TaskList";
import { Data } from "./model";
import { useState } from "react";

const App: React.FC = () => {
  const [taskList, setTaskList] = useState<Data[]>([]);

  const dataHandler = (data: Data) => {
    setTaskList([...taskList, data]);
  };

  return (
    <div className={classes.app}>
      <span className={classes.heading}>Task List</span>
      <Input onInput={dataHandler} />
      <TaskList taskData={taskList} dataState={setTaskList} />
    </div>
  );
};

export default App;
