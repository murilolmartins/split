import { useState } from "react";
import { FiX } from "react-icons/fi";
import styles from "./FormCreateWST.module.css";
const FormCreateWST = () => {
  const [emails, setEmails] = useState<string[]>([]);
  const [input, setInput] = useState<string>("");

  return (
    <div className={styles.container}>
      <div className={styles.form_container}>
        <div className={styles.form_smallContainer}>
          <div className={styles.add_container}>
            <h2>Convide pessoas para sua equipe</h2>
            <div className={styles.submit_container}>
              <div className={styles.input_container}>
                <label>Insira o email do convidado</label>
                <input
                  className={styles.email}
                  type="email"
                  onChange={(e) => setInput(e.target.value)}
                />
              </div>
              <button
                className={styles.submit}
                onClick={() => setEmails([...emails, input])}
              >
                Enviar Convite
              </button>
            </div>
          </div>
          <div className={styles.list_container}>
            {emails.map((email) => (
              <div className={styles.email_container}>
                <p>{email}</p>
                <FiX
                  onClick={() =>
                    setEmails((oldState) => oldState.filter((e) => email !== e))
                  }
                />
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default FormCreateWST;
