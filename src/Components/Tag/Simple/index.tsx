import { FiX } from "react-icons/fi";
import styles from "./SimpleTag.module.css";

interface SimpleTagProps {
  name: string;
  setStatus?: React.Dispatch<React.SetStateAction<string[]>>;
}

const SimpleTag = ({ name, setStatus }: SimpleTagProps) => {
  const deleteStatus = () => {
    if (setStatus) {
      setStatus((oldstate) => {
        return oldstate.filter((status) => status !== name);
      });
    }
  };
  return (
    <div className={styles.tag_container}>
      <p>{name}</p>
      <FiX onClick={() => deleteStatus()} />
    </div>
  );
};

export default SimpleTag;
