import styles from "./TaskModalCard.module.css";
import SimpleTag from "../../../Tag/Simple";
import TagAlert from "../../../Tag/Alert";
import { useState } from "react";

interface TagData {
  tag_id: number;
  tag: string;
  alert_tag: boolean;
}
interface CommentData {
  comment_id: number;
  comment: string;
  date_time: string;
  user_name: string;
  category_name: string;
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
interface TaskModalCardProps {
  task: CardData;
}

const TaskModalCard = ({ task }: TaskModalCardProps) => {
  const [completed, setCompleted] = useState<boolean>(task.status);
  return (
    <>
      {completed ? (
        <div
          className={styles.completed}
          onClick={() => setCompleted(!completed)}
        >
          <section className={styles.description_container}>
            <header>
              <div>
                <h3>Descrição</h3>
              </div>
              <div className={styles.date}>
                <span>{task.date}</span>
              </div>
            </header>
            <div>
              <p>{task.description}</p>
            </div>
          </section>
          <section className={styles.allTags}>
            <div className={styles.tags_container}>
              {task.tags &&
                task.tags.map((tag) => <SimpleTag name={tag.tag} />)}
            </div>{" "}
            <div className={styles.tags_container}>
              {task.tags && task.tags.map((tag) => <TagAlert name={tag.tag} />)}
            </div>
          </section>
        </div>
      ) : (
        <div
          className={styles.task_card}
          onClick={() => setCompleted(!completed)}
        >
          <section className={styles.description_container}>
            <header>
              <div>
                <h3>Descrição</h3>
              </div>
              <div className={styles.date}>
                <span>{task.date}</span>
              </div>
            </header>
            <div>
              <p>{task.description}</p>
            </div>
          </section>
          <section className={styles.allTags}>
            <div className={styles.tags_container}>
              {task.tags &&
                task.tags.map((tag) => {
                  if (!tag.alert_tag) {
                    return <SimpleTag name={tag.tag} />;
                  }
                })}
            </div>{" "}
            <div className={styles.tags_container}>
              {task.tags &&
                task.tags.map((tag) => {
                  if (tag.alert_tag) {
                    return <TagAlert name={tag.tag} />;
                  }
                })}
            </div>
          </section>
        </div>
      )}
    </>
  );
};

export default TaskModalCard;
