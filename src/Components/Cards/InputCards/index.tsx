import { InputHTMLAttributes } from "react";
import styles from "./InputCards.module.css";

interface InputProps extends InputHTMLAttributes<HTMLInputElement> {}

const InputCards = ({ ...rest }: InputProps) => {
  return (
    <div className={styles.input_container}>
      <input {...rest} className={styles.card_input} />
    </div>
  );
};

export default InputCards;
