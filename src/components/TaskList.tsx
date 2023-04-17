import classes from "../styles/TaskList.module.scss";
import ListComponent from "./ListComponent";
import { Data } from "../model";

interface Props {
  taskData: Data[];
  dataState: React.Dispatch<React.SetStateAction<Data[]>>;
}

const TaskList: React.FC<Props> = (props: Props) => {
  console.log(props.taskData);
  return (
    <div className={classes["list-area"]}>
      {props.taskData.map((element: Data) => (
        <ListComponent
          key={element.id}
          id={element.id}
          taskDescription={element.task}
          dataArray={props.taskData}
          dataState={props.dataState}
        />
      ))}
    </div>
  );
};

export default TaskList;
