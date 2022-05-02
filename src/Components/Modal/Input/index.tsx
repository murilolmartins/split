import { InputHTMLAttributes } from "react";
import styles from "./InputModal.module.css";
import { IoAlertCircleSharp } from "react-icons/io5";

interface InputProps extends InputHTMLAttributes<HTMLInputElement> {
  label?: string;
}

const InputModal = ({ label, ...rest }: InputProps) => {
  return (
    <div className={styles.input_container}>
      {label === "Inserir Alerta" ? (
        <label className={styles.lable_alert}>
          <div>
            <IoAlertCircleSharp />
          </div>
          {label}
        </label>
      ) : (
        <label className={styles.normal_label}>{label}</label>
      )}
      {label === "Inserir Alerta" ? (
        <input {...rest} className={styles.modal_input_alert} />
      ) : (
        <input {...rest} className={styles.modal_input} />
      )}
    </div>
  );
};

export default InputModal;
