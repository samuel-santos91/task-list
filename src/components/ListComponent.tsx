import classes from "../styles/ListComponent.module.scss";
import { Data } from "../model";

import { AiFillEdit } from "react-icons/ai";
import { AiFillDelete } from "react-icons/ai";
import { AiFillCheckCircle } from "react-icons/ai";
import { useState } from "react";

interface Props {
  key: number;
  id: number;
  taskDescription: string;
  dataArray: Data[];
  dataState: React.Dispatch<React.SetStateAction<Data[]>>;
}

const ListComponent: React.FC<Props> = (props: Props) => {
  const [status, setStatus] = useState<boolean>(false);
  const [description, setDescription] = useState<string>(props.taskDescription);
  const [descriptionON, setDescriptionON] = useState<boolean>(false);

  const statusHandler = (data: Data[]) => {
    data.map((task) => {
      if (task.id === props.id) {
        if (task.completed === false) {
          task.completed = true;
          setStatus(true);
        } else {
          task.completed = false;
          setStatus(false);
        }
      }
      return null;
    });
  };

  const deleteHandler = (data: Data[]) => {
    props.dataState(data.filter((task) => task.id !== props.id));
  };

  const editHandler = (event: React.FormEvent<HTMLInputElement>) => {
    setDescription(event.currentTarget.value);
  };

  const editSubmitHandler = (event: React.FormEvent) => {
    event.preventDefault();
    setDescriptionON(false);
  };

  return (
    <div className={classes.component}>
      {descriptionON ? (
        <form onSubmit={editSubmitHandler}>
          <input className={classes.input} onChange={editHandler} autoFocus></input>
        </form>
      ) : (
        <div className={status ? classes.crossed : classes.task}>
          {description}
        </div>
      )}
      <ul className={classes.options}>
        <li className={classes.edit} onClick={() => setDescriptionON(true)}>
          <AiFillEdit size={20} />
        </li>
        <li
          className={classes.delete}
          onClick={() => deleteHandler(props.dataArray)}
        >
          <AiFillDelete size={20} />
        </li>
        <li className={classes.done}>
          <AiFillCheckCircle
            size={20}
            onClick={() => statusHandler(props.dataArray)}
          />
        </li>
      </ul>
    </div>
  );
};

export default ListComponent;
