import styles from "./TagAlert.module.css";
import { IoAlertCircleSharp } from "react-icons/io5";
import { FiX } from "react-icons/fi";

interface TagAlertProps {
  name: string;
  setAlerts?: React.Dispatch<React.SetStateAction<string[]>>;
}

const TagAlert = ({ name, setAlerts }: TagAlertProps) => {
  const deleteAlert = () => {
    if (setAlerts) {
      setAlerts((oldstate) => {
        return oldstate.filter((alert) => alert !== name);
      });
    }
  };
  return (
    <div className={styles.alert_container}>
      <div>
        <IoAlertCircleSharp />
      </div>
      <div>
        <p>{name}</p>
      </div>
      <FiX onClick={() => deleteAlert()} />
    </div>
  );
};

export default TagAlert;
