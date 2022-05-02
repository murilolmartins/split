import {
  forwardRef,
  ForwardRefRenderFunction,
  InputHTMLAttributes,
} from "react";
import styles from "./InputForm.module.css";

interface FormsInputProps extends InputHTMLAttributes<HTMLInputElement> {
  errorMessage: string | undefined;
  label: string;
}

const FormsInputBase: ForwardRefRenderFunction<
  HTMLInputElement,
  FormsInputProps
> = ({ errorMessage, label, ...rest }, ref) => {
  return (
    <div className={styles.wrapper}>
      <label className={styles.label}>{label}</label>
      <input {...rest} ref={ref} className={styles.input} />
      {errorMessage && <p className={styles.error}>{errorMessage}</p>}
    </div>
  );
};

export const FormsInput = forwardRef(FormsInputBase);
