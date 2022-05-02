import { useForm } from "react-hook-form";
import * as yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";
import { useNavigate } from "react-router-dom";
import { useAuth } from "../../../Providers/Auth";
import styles from "./FormRegister.module.css";
import { FormsInput } from "../Input";
import ButtonForm from "../Button";
import { Link } from "react-router-dom";
import stylesBtn from "../Button/ButtonForm.module.css";

interface UserData {
  email: string;
  password: string;
  name: string;
  profession: string;
  profession_code: string;
  phone: string;
  address: string;
}

const FormRegister = () => {
  const { registerUser, setIsLoadLogin, loadLogin } = useAuth();
  const navigate = useNavigate();

  const formSchema = yup.object().shape({
    name: yup.string().required("Campo Obrigatorio"),
    email: yup.string().required("Campo Obrigatorio").email("Email invalido"),
    password: yup
      .string()
      .required("Campo Obrigatorio")
      .min(6, "Minimo de 6 digitos"),
    profession: yup.string().required("Campo Obrigatorio"),
    profession_code: yup.string().required("Campo Obrigatorio"),
    phone: yup.string().required("Campo Obrigatorio"),
    address: yup.string().required("Campo Obrigatorio"),
  });

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<UserData>({ resolver: yupResolver(formSchema) });

  function submitRegister(data: UserData) {
    setIsLoadLogin(true);
    registerUser(data, navigate);
  }
  return (
    <section className={styles.animeLeft}>
      <h1 className={styles.title}>Cadastre-se</h1>
      <form onSubmit={handleSubmit(submitRegister)}>
        <FormsInput
          placeholder=""
          {...register("name")}
          errorMessage={errors.name?.message}
          type="text"
          label="Nome"
        />
        <FormsInput
          placeholder=""
          {...register("email")}
          errorMessage={errors.email?.message}
          type="email"
          label="Email"
        />
        <FormsInput
          placeholder=""
          {...register("password")}
          errorMessage={errors.password?.message}
          type="password"
          label="Senha"
        />
        <FormsInput
          placeholder="Profissão"
          {...register("profession")}
          errorMessage={errors.profession?.message}
          type="text"
          label=""
        />
        <FormsInput
          placeholder="Registro Profissional"
          {...register("profession_code")}
          errorMessage={errors.profession_code?.message}
          type="text"
          label="CRM/CRF/COREME"
        />
        <FormsInput
          placeholder="Telefone"
          {...register("phone")}
          errorMessage={errors.phone?.message}
          type="text"
          label=""
        />
        <FormsInput
          placeholder="Endereço"
          {...register("address")}
          errorMessage={errors.address?.message}
          type="text"
          label=""
        />
        {loadLogin ? (
          <ButtonForm disablad>Cadastrando...</ButtonForm>
        ) : (
          <ButtonForm>Cadastrar</ButtonForm>
        )}
      </form>
      <div className={styles.cadastro}>
        <h2 className={styles.subtitle}>Login</h2>
        <p>Já possui conta? Faça seu login.</p>
        <Link className={stylesBtn.button} to="/login">
          Login
        </Link>
      </div>
    </section>
  );
};

export default FormRegister;
