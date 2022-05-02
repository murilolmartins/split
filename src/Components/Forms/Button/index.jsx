import React from "react";
import styles from "./ButtonForm.module.css";

const ButtonForm = ({ children, ...props }) => {
  return (
    <button {...props} className={styles.button}>
      {children}
    </button>
  );
};

export default ButtonForm;
