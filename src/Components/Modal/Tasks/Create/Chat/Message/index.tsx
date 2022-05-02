import styles from "./ChatMessage.module.css";
import Avatar from "../../../../../../Assets/Images/avatarheader.jpg";

interface CommentData {
  comment_id: number;
  comment: string;
  date_time: string;
  user_name: string;
  category_name: string;
}

interface ChatMessageProps {
  message: CommentData;
}

const ChatMessage = ({ message }: ChatMessageProps) => {
  return (
    <div className={styles.comment_container}>
      <div>
        <img src={Avatar} alt="" />
      </div>
      <div className={styles.description_container}>
        <div>
          <p>{message.comment}</p>
        </div>
        <div>
          <div>
            <span>{message.date_time}</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ChatMessage;
