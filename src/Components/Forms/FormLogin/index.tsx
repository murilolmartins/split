import { useForm } from "react-hook-form";
import * as yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";
import { Link } from "react-router-dom";
import styles from "./LoginForm.module.css";
import stylesBtn from "../Button/ButtonForm.module.css";
import { useAuth } from "../../../Providers/Auth";
import { useNavigate } from "react-router-dom";
import { FormsInput } from "../Input";
import ButtonForm from "../Button";

interface UserData {
  email: string;
  password: string;
}

const FormLogin = () => {
  const { signIn, setIsLoadLogin, loadLogin } = useAuth();
  const navigate = useNavigate();
  const formSchema = yup.object().shape({
    email: yup.string().required("Required Field").email("Invalid Emmail"),
    password: yup
      .string()
      .required("Required Field")
      .min(6, "Minimun of 6 digit"),
  });

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<UserData>({ resolver: yupResolver(formSchema) });

  function submitLogin(data: UserData) {
    setIsLoadLogin(true);
    signIn(data, navigate);
  }

  return (
    <section className={styles.animeLeft}>
      <h1 className={styles.title}>Login</h1>
      <form className={styles.form} onSubmit={handleSubmit(submitLogin)}>
        <FormsInput
          placeholder="Email"
          {...register("email")}
          errorMessage={errors.email?.message}
          label="Email"
        />
        <FormsInput
          placeholder="Password"
          {...register("password")}
          errorMessage={errors.password?.message}
          label="Password"
        />
        {loadLogin ? (
          <ButtonForm disabled>Carregando...</ButtonForm>
        ) : (
          <ButtonForm>Entrar</ButtonForm>
        )}
      </form>
      <Link className={styles.perdeu} to="/login/perdeu">
        Perdeu a Senha?
      </Link>
      <div className={styles.cadastro}>
        <h2 className={styles.subtitle}>Cadastre-se</h2>
        <p>Ainda não possui conta? Cadastre-se no site.</p>
        <Link className={stylesBtn.button} to="/login/criar">
          Cadastro
        </Link>
      </div>
    </section>
  );
};

export default FormLogin;
