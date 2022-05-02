import { FiArrowRightCircle } from "react-icons/fi";
import { useNavigate } from "react-router-dom";
import { useWorkSpace } from "../../../../Providers/Workspace";
import Button from "../../../Button";
import styles from "./HeaderCreateWSF.module.css";

const HeaderCreateWSF = () => {
  const { newWorkName, newWorkLocal } = useWorkSpace();

  const navigate = useNavigate();

  const next = () => {
    localStorage.setItem("@Split:NewWorkName", newWorkName);
    localStorage.setItem("@Split:NewWorkLocal", newWorkLocal);
    navigate("/workspaces/create/second");
  };
  return (
    <div className={styles.header_container}>
      <div className={styles.header_smallContainer}>
        <div className={styles.description_container}>
          <h1>CRIE SEU WORKSPACE</h1>
          <div className={styles.step_container}>
            <div className={styles.step_number}>
              <span>Etapa 1</span>
            </div>
            <h2>Defina as informações do Serviço</h2>
          </div>
        </div>
        <Button title="Proximo" icon={FiArrowRightCircle} onClick={next} />
      </div>
      <div className={styles.step_bar}>
        <div className={styles.bar}></div>
      </div>
    </div>
  );
};

export default HeaderCreateWSF;
