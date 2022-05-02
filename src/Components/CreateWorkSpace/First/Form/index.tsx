import Enfermaria from "../../../../Assets/Images/enfermaria.jpeg";
import styles from "./FormCreateWSF.module.css";
import { useWorkSpace } from "../../../../Providers/Workspace";
const FormCreateWSF = () => {
  const { setNewWorkLocal, setNewWorkName } = useWorkSpace();

  return (
    <div className={styles.container}>
      <div className={styles.form_container}>
        <div className={styles.form_smallContainer}>
          <div className={styles.input_container}>
            <input
              className={styles.name}
              placeholder="Nome da equipe"
              onChange={(e) => setNewWorkName(e.target.value)}
            />
            <div className={styles.location_container}>
              <label>Local da equipe</label>
              <input
                className={styles.location}
                placeholder="Buscar endereço"
                onChange={(e) => setNewWorkLocal(e.target.value)}
              />
            </div>
          </div>
          <div className={styles.image_container}>
            <h2>Selecione uma imagem de capa</h2>
            <div className={styles.image_smallContainer}>
              <img src={Enfermaria} alt="cover img" />
              <img src={Enfermaria} alt="cover img" />
              <img src={Enfermaria} alt="cover img" />
              <img src={Enfermaria} alt="cover img" />
            </div>
            <button>Fazer upload de nova imagem</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FormCreateWSF;
