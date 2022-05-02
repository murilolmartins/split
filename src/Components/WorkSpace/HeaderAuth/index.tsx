import { FiMenu, FiBell } from "react-icons/fi";
import User from "../../../Assets/Images/avatarheader.jpg";
import styles from "./HeaderAuth.module.css";
const HeaderAuth = () => {
  return (
    <header className={styles.headerauth_container}>
      <nav className={styles.nav_container_1}>
        <div className={styles.svg_container_1}>
          <FiMenu />
        </div>
        <h1>Gestao de pacientes</h1>
      </nav>

      <nav className={styles.nav_container_2}>
        <div className={styles.svg_container_2}>
          <FiBell />
        </div>
        <img src={User} alt="UserImage" />
        <h2>Gustavo</h2>
      </nav>
    </header>
  );
};

export default HeaderAuth;
