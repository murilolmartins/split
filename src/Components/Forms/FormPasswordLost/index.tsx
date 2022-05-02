// import { useNavigate } from "react-router-dom";
import { useAuth } from "../../../Providers/Auth";
import { useForm } from "react-hook-form";
import * as yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";
import styles from "./FormPasswordLost.module.css";
import ButtonForm from "../Button";
import { FormsInput } from "../Input";

interface UserData {
  email: string;
}

const FormPasswordLost = () => {
  const { setIsLoadLogin, loadLogin } = useAuth();
  //   const navigate = useNavigate();

  const formSchema = yup.object().shape({
    email: yup.string().required("Required Field").email("Invalid Email"),
  });

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<UserData>({ resolver: yupResolver(formSchema) });

  function submitLost(data: UserData) {
    setIsLoadLogin(true);
  }
  return (
    <section className={styles.animeLeft}>
      <h1 className={styles.title}>Perdeu a senha?</h1>
      <form onSubmit={handleSubmit(submitLost)}>
        <FormsInput
          placeholder="Email"
          {...register("email")}
          errorMessage={errors.email?.message}
          type="email"
          label="Email"
        />
        {loadLogin ? (
          <ButtonForm disabled>Enviando...</ButtonForm>
        ) : (
          <ButtonForm>Enviar Email</ButtonForm>
        )}
      </form>
    </section>
  );
};

export default FormPasswordLost;
