import ContainerModal from "../Container";
import styles from "./TasksModal.module.css";
import TaskModalCard from "./Card";
import TaskCreateModal from "./Create";
import ModalChat from "./Create/Chat";

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

interface TasksModalProps {
  setOpenModal: React.Dispatch<React.SetStateAction<boolean>>;
  tasks: CardData[];
  comments: CommentData[];
  category: string;
}

const TasksModal = ({
  tasks,
  setOpenModal,
  category,
  comments,
}: TasksModalProps) => {
  return (
    <ContainerModal setOpenModal={setOpenModal}>
      <div className={styles.small_container}>
        <section className={styles.create_tasks}>
          <TaskCreateModal tasks={tasks} />
          <ModalChat comments={comments} />
        </section>
        <section className={styles.tasks_cards}>
          <header className={styles.tasks_cards_header}>
            <div>
              <h2>{category}</h2>
            </div>
            <div>
              <h2 className={styles.patient_name}>Nome do Paciente</h2>
            </div>
          </header>
          <div className={styles.tasks_cards_container}>
            {tasks.map((task) => (
              <TaskModalCard task={task} />
            ))}
          </div>
        </section>
      </div>
    </ContainerModal>
  );
};

export default TasksModal;
