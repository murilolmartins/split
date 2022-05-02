import styles from "./HeaderHome.module.css";
import { FiArrowLeftCircle, FiPlusCircle, FiSearch } from "react-icons/fi";
import { useNavigate } from "react-router-dom";
import { useWorkSpace } from "../../../Providers/Workspace";
import { useState } from "react";
import CreateUserModal from "../../Modal/User";

const HeaderHome = () => {
  const navigate = useNavigate();
  const [openModal, setOpenModal] = useState<boolean>(false);
  const { filterPatient } = useWorkSpace();

  return (
    <>
      <header className={styles.header_container}>
        <div className={styles.description_container}>
          <div className={styles.link_container}>
            <div>
              <FiArrowLeftCircle onClick={() => navigate("/workspaces")} />
            </div>
            <div>
              <p>Voltar as listas</p>
            </div>
          </div>
          <h1>Enfermaria I</h1>
        </div>
        <div className={styles.search_container}>
          <div>
            <FiSearch />
          </div>
          <div>
            <input
              type="text"
              placeholder="Buscar"
              onChange={(e) => filterPatient(e.target.value)}
            />
          </div>
        </div>
        <div className={styles.button_container}>
          <button onClick={() => setOpenModal(true)}>
            <div className={styles.svg_container}>
              <FiPlusCircle />
            </div>
            Adicionar usuario
          </button>
        </div>
      </header>
      
      {openModal && <CreateUserModal setOpenModal={setOpenModal} />}
    </>
  );
};

export default HeaderHome;
