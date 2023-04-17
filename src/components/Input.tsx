import React from "react";
import { useState } from "react";
import classes from "../styles/Input.module.scss";
import {Data} from "../model";

interface Props {
  onInput: Function;
}

const Input: React.FC<Props> = (props: Props) => {
  const [task, setTask] = useState<string>("");

  const taskHandler = (event: React.FormEvent<HTMLInputElement>) => {
    setTask(event.currentTarget.value);
  };

  const inputHandler = (event: React.FormEvent) => {
    event.preventDefault();

    const taskData: Data = {
      id: Date.now(),
      task: task,
      completed: false,
    };

    if (task === "") {
      return;
    } else {
      props.onInput(taskData);
    }
    setTask("");
  };

  return (
    <form onSubmit={inputHandler}>
      <input
        value={task}
        onChange={taskHandler}
        className={classes.input}
        type="input"
        placeholder="Enter task"
        autoFocus
      />
      <button className={classes.button}>GO</button>
    </form>
  );
};

export default Input;
