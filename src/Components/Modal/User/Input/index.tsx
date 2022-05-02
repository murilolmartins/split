import {
  forwardRef,
  ForwardRefRenderFunction,
  InputHTMLAttributes,
} from "react";
import styles from "./InputCreateUserModal.module.css";

interface InputProps extends InputHTMLAttributes<HTMLInputElement> {
  errorMessage: string | undefined;
  label: string;
}

const InputBase: ForwardRefRenderFunction<HTMLInputElement, InputProps> = (
  { errorMessage, label, ...rest },
  ref
) => {
  return (
    <div className={styles.input_container}>
      <label>{label}</label>
      <input {...rest} ref={ref} />
      {errorMessage && <span className={styles.error}>{errorMessage}</span>}
    </div>
  );
};

export const InputCreateUserModal = forwardRef(InputBase);
