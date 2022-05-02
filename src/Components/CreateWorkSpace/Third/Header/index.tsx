import { FiChevronsRight, FiArrowLeftCircle } from "react-icons/fi";
import { useNavigate } from "react-router-dom";
import Button from "../../../Button";
import styles from "./HeaderCreateWST.module.css";

const HeaderCreateWST = () => {
  const navigate = useNavigate();
  return (
    <div className={styles.header_container}>
      <div className={styles.header_smallContainer}>
        <div className={styles.description_container}>
          <h1>CRIE SUA EQUIPE</h1>
          <div className={styles.step_container}>
            <div className={styles.step_number}>
              <span>Etapa 3</span>
            </div>
            <h2>Convide pessoas para sua equipe</h2>
          </div>
        </div>
        <div className={styles.buttons_container}>
          <Button
            title="Anterior"
            icon={FiArrowLeftCircle}
            onClick={() => navigate("/workspaces/create/second")}
            inverse={true}
            id={styles.button_white}
          />
          <Button
            title="Pular etapa"
            icon={FiChevronsRight}
            // onClick={() => navigate("/workspace/create/third")}
            id={styles.button_white}
          />
          <Button title="Concluir" />
        </div>
      </div>
      <div className={styles.step_bar}>
        <div className={styles.bar}></div>
      </div>
    </div>
  );
};

export default HeaderCreateWST;
