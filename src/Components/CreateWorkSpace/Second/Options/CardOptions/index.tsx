import { useState } from "react";
import { FiPlusCircle, FiMinusCircle } from "react-icons/fi";
import styles from "./CardOptions.module.css";

interface CardOptionsProps {
  title: string;
  setBoxList: React.Dispatch<React.SetStateAction<string[]>>;
}

const CardOptions = ({ title, setBoxList }: CardOptionsProps) => {
  const [add, setAdd] = useState<boolean>(true);
  const addBox = () => {
    setBoxList((oldState) => [...oldState, title]);
    setAdd(false);
  };

  const removeBox = () => {
    setBoxList((oldState) => {
      const newState = oldState.filter((box) => box !== title);
      return newState;
    });
    setAdd(true);
  };
  return (
    <div className={styles.option_container}>
      <div className={styles.button_container}>
        <button onClick={add ? addBox : removeBox}>
          <div className={styles.svg_container}>
            {add ? (
              title !== "Pacientes" && title !== "Tarefas" && <FiPlusCircle />
            ) : (
              <FiMinusCircle />
            )}
          </div>
        </button>
      </div>
      <div className={styles.title_container}>
        <p>{title}</p>
      </div>
    </div>
  );
};

export default CardOptions;
