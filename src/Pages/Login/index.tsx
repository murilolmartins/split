import { Routes, Route } from "react-router-dom";
import FormLogin from "../../Components/Forms/FormLogin";
import FormPasswordLost from "../../Components/Forms/FormPasswordLost";
import FormRegister from "../../Components/Forms/FormRegister";
import styles from "./Login.module.css";

const Login = () => {
  return (
    <section className={styles.login}>
      <div className={styles.forms}>
        <Routes>
          <Route path="/" element={<FormLogin />} />
          <Route path="criar" element={<FormRegister />} />
          <Route path="perdeu" element={<FormPasswordLost />} />
          {/* <Route path="resetar" element={<LoginPasswordReset />} />  */}
        </Routes>
      </div>
    </section>
  );
};

export default Login;
