import styles from "./TasksCard.module.css";
import { ChangeEvent, useState, KeyboardEvent } from "react";
import InputCards from "../InputCards";
import ContainerCard from "../Container";
import TaskCard from "./Card";
import TasksModal from "../../Modal/Tasks";

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

interface TasksCardProps {
  tasks: CardData[];
  comments: CommentData[];
}

const TasksCard = ({ tasks, comments }: TasksCardProps) => {
  const [input, setInput] = useState<string>("");
  const [openModal, setOpenModal] = useState<boolean>(false);

  // const handleKeyPress = (event: KeyboardEvent<HTMLInputElement>) => {
  //   if (event.key === "Enter") {
  //     let data = new Date();
  //     let dia = String(data.getDate()).padStart(2, "0");
  //     let mes = String(data.getMonth() + 1).padStart(2, "0");
  //     let ano = data.getFullYear();
  //     const dataAtual = dia + "/" + mes + "/" + ano;
  //     setList([
  //       ...list,
  //       {
  //         date: dataAtual,
  //         description: input,
  //         alerts: [],
  //         tags: [],
  //         completed: false,
  //       },
  //     ]);
  //     setInput("");
  //   }
  // };

  return (
    <>
      <ContainerCard>
        <InputCards
          type="text"
          value={input}
          className={styles.task_input}
          placeholder="Nova tarefa"
          onChange={(e: ChangeEvent<HTMLInputElement>) =>
            setInput(e.target.value)
          }
          // onKeyPress={handleKeyPress}
        />
        <div className={styles.tasks_container}>
          {tasks.map((task) => (
            <TaskCard task={task} setOpenModal={setOpenModal} />
          ))}
        </div>
      </ContainerCard>
      {openModal && (
        <TasksModal
          setOpenModal={setOpenModal}
          tasks={tasks}
          comments={comments}
          category="Tarefas"
        />
      )}
    </>
  );
};

export default TasksCard;
