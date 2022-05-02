import { FiPlusCircle } from "react-icons/fi";
import { useNavigate } from "react-router-dom";
import styles from "./HeaderWS.module.css";

const HeaderWorkSpace = () => {
  const navigate = useNavigate();
  return (
    <div className={styles.header_container}>
      <div className={styles.description_container}>
        <h2>Meu WorkSpace</h2>
        <h1>Minhas Listas</h1>
      </div>
      <div className={styles.button_container}>
        <button onClick={() => navigate("/workspaces/create/first")}>
          <div className={styles.svg_container}>
            <FiPlusCircle />
          </div>
          Criar nova lista
        </button>
      </div>
    </div>
  );
};

export default HeaderWorkSpace;
