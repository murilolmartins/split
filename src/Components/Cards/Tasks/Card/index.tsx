import { useState } from "react";
import styles from "./TaskCard.module.css";

interface TagData {
  tag_id: number;
  tag: string;
  alert_tag: boolean;
}

interface CardData {
  data_id: number;
  status: boolean;
  description: string;
  date: string;
  category_id: number;
  category_name: string;
  tags: TagData[];
}

interface TaskCardProps {
  task: CardData;
  setOpenModal: React.Dispatch<React.SetStateAction<boolean>>;
}

const TaskCard = ({ task, setOpenModal }: TaskCardProps) => {
  return (
    <div className={styles.task_container}>
      <div className={styles.checkbox_container}>
        <input
          type="checkbox"
          className={styles.checkbox}
          defaultChecked={task.status && task.status}
          // onClick={() => setCompleted(!completed)}
        />
        <span className={styles.checkmark}></span>
      </div>
      <div
        className={styles.taskDescription_container}
        onClick={() => setOpenModal(true)}
      >
        {true ? (
          <p className={styles.task_description_completed}>
            {task.description}
          </p>
        ) : (
          <p>{task.description}</p>
        )}
      </div>
    </div>
  );
};

export default TaskCard;
