import Enfermaria from "../../../Assets/Images/enfermaria.jpeg";
import { useWorkSpace } from "../../../Providers/Workspace";
import styles from "./ListWS.module.css";

const ListWorkSpace = () => {
  const { workSpaceList } = useWorkSpace();

  return (
    <div className={styles.list_container}>
      <ul>
        {workSpaceList.map((item, index) => (
          <li key={index}>
            <img src={Enfermaria} alt="WorkSpaceImage" />
            <div>
              <h2>{item}</h2>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default ListWorkSpace;
