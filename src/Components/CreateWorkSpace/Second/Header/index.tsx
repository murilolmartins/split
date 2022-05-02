import { FiChevronsRight, FiArrowLeftCircle } from "react-icons/fi";
import { useNavigate } from "react-router-dom";
import { useWorkSpace } from "../../../../Providers/Workspace";
import Button from "../../../Button";
import styles from "./HeaderCreateWSS.module.css";

const HeaderCreateWSS = () => {
  const navigate = useNavigate();
  const { newWorkSpaceList, registerNewWorkSpace } = useWorkSpace();

  const next = () => {
    localStorage.setItem(
      "@Split: NewWorspaceList",
      JSON.stringify(newWorkSpaceList)
    );
    navigate("/workspaces/create/third");
  };

  return (
    <div className={styles.header_container}>
      <div className={styles.header_smallContainer}>
        <div className={styles.description_container}>
          <h1>PERSONALIZE SUA LISTA</h1>
          <div className={styles.step_container}>
            <div className={styles.step_number}>
              <span>Etapa 2</span>
            </div>
            <h2>Escolha as colunas da sua lista</h2>
          </div>
        </div>
        <div className={styles.buttons_container}>
          <Button
            title="Anterior"
            icon={FiArrowLeftCircle}
            onClick={() => navigate("/workspaces/create/first")}
            inverse={true}
            id={styles.button_white}
          />
          <Button
            title="Pular etapa"
            icon={FiChevronsRight}
            onClick={next}
            id={styles.button_white}
          />
          <Button
            title="Concluir"
            onClick={() => registerNewWorkSpace(navigate)}
          />
        </div>
      </div>
      <div className={styles.step_bar}>
        <div className={styles.bar}></div>
      </div>
    </div>
  );
};

export default HeaderCreateWSS;
