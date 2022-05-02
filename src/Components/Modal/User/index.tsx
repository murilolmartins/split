import { useState } from "react";
import { useForm } from "react-hook-form";
import * as yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";
import ContainerCreateUserModal from "./Container ";
import { InputCreateUserModal } from "./Input";
import ListInput from "./List";
import styles from "./UserCreateModal.module.css";
import { useWorkSpace } from "../../../Providers/Workspace";

interface Data {
  name: string;
  sexo: string;
  birthday: string;
  cod: string;
  contact: string;
}

interface CreateUserModalProps {
  setOpenModal: React.Dispatch<React.SetStateAction<boolean>>;
}

const CreateUserModal = ({ setOpenModal }: CreateUserModalProps) => {
  const { setPatients, patients } = useWorkSpace();
  const [inputTags, setInputTags] = useState<string>("");
  const [inputAlergies, setInputAlergies] = useState<string>("");
  const [tags, setTags] = useState<string[]>([]);
  const [alergies, setAlergies] = useState<string[]>([]);
  const formSchema = yup.object().shape({
    name: yup.string().required("Campo Obrigatorio"),
    sexo: yup.string().required("Campo Obrigatorio"),
    birthday: yup.string().required("Campo Obrigatorio"),
    cod: yup
      .string()
      .matches(/^[0-9]*$/, "Insira somente numeros")
      .required("Campo Obrigatorio"),
    contact: yup
      .string()
      .matches(/^\([1-9]{2}\)[0-9]{5}-[0-9]{4}$/, "Numero com formato errado")
      .required("Campo Obrigatorio"),
  });
  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm<Data>({ resolver: yupResolver(formSchema) });

  const submitForm = (data: Data) => {
    // const patient = {
    //   info: { ...data, tags, alergies, doctorName: "Gustavo" },
    //   tarefas: {
    //     list: [],
    //     comments: [],
    //   },
    //   comorbidades: {
    //     list: [],
    //     comments: [],
    //   },
    //   historia: {
    //     list: [],
    //     comments: [],
    //   },
    // };
    // setPatients([...patients, patient]);
    // reset();
    // setOpenModal(false);
  };

  return (
    <ContainerCreateUserModal setOpenModal={setOpenModal}>
      <form
        className={styles.form_container}
        onSubmit={handleSubmit(submitForm)}
      >
        <div>
          <h2>CRIAR NOVO PACIENTE</h2>
        </div>
        <div className={styles.inputs_container}>
          <InputCreateUserModal
            label="Nome:"
            errorMessage={errors.name?.message}
            {...register("name")}
          />
          <div className={styles.select_container}>
            <label>Sexo:</label>
            <select id="" {...register("sexo")}>
              <option selected disabled>
                --Selecione--
              </option>
              <option value="Masculino">Masculino</option>
              <option value="Feminino">Feminino</option>
            </select>
          </div>
          <InputCreateUserModal
            type="date"
            label="Data de nascimento:"
            errorMessage={errors.birthday?.message}
            {...register("birthday")}
          />
          <InputCreateUserModal
            label="Codigo do paciente:"
            errorMessage={errors.cod?.message}
            {...register("cod")}
          />
          <ListInput
            input={inputAlergies}
            setInput={setInputAlergies}
            list={alergies}
            setList={setAlergies}
            label="Inserir Alergias"
          />
          <ListInput
            input={inputTags}
            setInput={setInputTags}
            list={tags}
            setList={setTags}
            label="Inserir Tags"
          />
          <InputCreateUserModal
            errorMessage={errors.contact?.message}
            label="Contato da familia:"
            placeholder="(**)00000-0000"
            {...register("contact")}
          />
        </div>
        <div>
          <button type="submit" className={styles.submit}>
            Cadastrar
          </button>
        </div>
      </form>
    </ContainerCreateUserModal>
  );
};

export default CreateUserModal;
