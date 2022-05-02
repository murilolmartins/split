import styles from "./ModalChat.module.css";
import Avatar from "../../../../../Assets/Images/avatarheader.jpg";
import { ChangeEvent, useState } from "react";
import ChatMessage from "./Message";

interface CommentData {
  comment_id: number;
  comment: string;
  date_time: string;
  user_name: string;
  category_name: string;
}

interface ModalChatProps {
  comments: CommentData[];
}

const ModalChat = ({ comments }: ModalChatProps) => {
  const [input, setInput] = useState<string>("");

  // const addTask = () => {
  //   let data = new Date();
  //   let dia = String(data.getDate()).padStart(2, "0");
  //   let mes = String(data.getMonth() + 1).padStart(2, "0");
  //   let ano = data.getFullYear();
  //   const dataAtual = dia + "/" + mes + "/" + ano;
  //   const date = { date: dataAtual, description: input, alerts: [], tags: [] };
  //   if (setOther) {
  //     setOther((oldstate) => [...oldstate, date]);
  //   } else {
  //     setTasks((oldstate) => [...oldstate, date]);
  //   }
  // };

  const addComment = () => {
    // let data = new Date();
    // let dia = String(data.getDate()).padStart(2, "0");
    // let mes = String(data.getMonth() + 1).padStart(2, "0");
    // let ano = data.getFullYear();
    // const dataAtual = dia + "/" + mes + "/" + ano;
    // setComments([
    //   ...comments,
    //   {
    //     date: dataAtual,
    //     content: input,
    //     time: String(data.getHours()) + ":" + String(data.getMinutes()),
    //   },
    // ]);
    // setInput("");
  };
  return (
    <section className={styles.modalChat_container}>
      <div className={styles.title}>
        <h2>Atividades</h2>
      </div>
      <div className={styles.input_container}>
        <div>
          <img src={Avatar} alt="" />
        </div>
        <div className={styles.input}>
          <input
            type="text"
            placeholder="Escreva um comentario aqui"
            onChange={(e: ChangeEvent<HTMLInputElement>) =>
              setInput(e.target.value)
            }
            value={input}
          />
        </div>
      </div>
      <div className={styles.buttons}>
        <div>
          <button className={styles.button} onClick={() => addComment()}>
            Comentario
          </button>
        </div>
        <div>
          <button className={styles.button}>Tarefa</button>
        </div>
      </div>
      <div className={styles.comments_container}>
        {comments &&
          comments.map((message) => <ChatMessage message={message} />)}
      </div>
    </section>
  );
};

export default ModalChat;
