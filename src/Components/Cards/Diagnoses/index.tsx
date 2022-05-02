import { ChangeEvent, KeyboardEvent, useState } from "react";
import styles from "./DiagnosesCard.module.css";
import InputCards from "../InputCards";
import ContainerCard from "../Container";
import TasksModal from "../../Modal/Tasks";
import TagAlert from "../../Tag/Alert";
import SimpleTag from "../../Tag/Simple";

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

interface DiagnosesCardProps {
  diagnoses: CardData[];
  box: string;
  comments: CommentData[];
}

const DiagnosesCard = ({ diagnoses, box, comments }: DiagnosesCardProps) => {
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
          placeholder="Escreva aqui..."
          onChange={(e: ChangeEvent<HTMLInputElement>) =>
            setInput(e.target.value)
          }
          // onKeyPress={handleKeyPress}
        />
        <div className={styles.diagnoses_container}>
          {diagnoses.map((card: CardData) => (
            <div
              className={styles.diagnose_container}
              onClick={() => setOpenModal(true)}
            >
              <div className={styles.date_container}>
                <span>{card.date}</span>
              </div>
              <div className={styles.description_container}>
                <p>{card.description}</p>
              </div>
              <section className={styles.alerts_container}>
                {card.tags &&
                  card.tags.map((tag) => {
                    if (tag.alert_tag) {
                      return <TagAlert name={tag.tag} />;
                    }
                  })}
              </section>
              <section className={styles.tags_container}>
                {card.tags &&
                  card.tags.map((tag) => {
                    if (!tag.alert_tag) {
                      return <SimpleTag name={tag.tag} />;
                    }
                  })}
              </section>
            </div>
          ))}
        </div>
      </ContainerCard>
      {openModal && (
        <TasksModal
          category={box}
          setOpenModal={setOpenModal}
          tasks={diagnoses}
          comments={comments}
        />
      )}
    </>
  );
};

export default DiagnosesCard;
