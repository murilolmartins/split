import TagAlert from "../../../Tag/Alert";
import InputModal from "../../Input";
import styles from "./TaskCreateModal.module.css";
import { useForm } from "react-hook-form";
import * as yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";
import { useState } from "react";
import SimpleTag from "../../../Tag/Simple";

interface FormData {
  description: string;
}

interface TagData {
  tag_id: number;
  tag: string;
  alert_tag: boolean;
}
interface CardData {
  data_id: number;
  status: boolean;
  description: string;
  date: string;
  category_id: number;
  category_name: string;
  tags: TagData[];
}

interface TaskCreateModalProps {
  tasks: CardData[];
}

const TaskCreateModal = ({ tasks }: TaskCreateModalProps) => {
  const [status, setStatus] = useState<string[]>([]);
  const [inputAlert, setInputAlert] = useState<string>("");
  const [inputStatus, setInputStatus] = useState<string>("");
  const [alerts, setAlerts] = useState<string[]>([]);
  const formSchema = yup.object().shape({
    description: yup.string().required("Campo Obrigatorio"),
  });
  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm<FormData>({ resolver: yupResolver(formSchema) });

  const createCard = (data: FormData) => {
    // const date = new Date();
    // let dia = String(date.getDate()).padStart(2, "0");
    // let mes = String(date.getMonth() + 1).padStart(2, "0");
    // let ano = date.getFullYear();
    // const dataAtual = dia + "/" + mes + "/" + ano;
    // data.date = dataAtual;
    // data.alerts = alerts;
    // data.tags = status;
    // data.completed = false;
    // setTasks((oldstate) => [...oldstate, data]);
  };

  const patchLastRegister = () => {
    // const last_task = tasks[tasks.length - 1];
    // const textarea = document.getElementsByTagName("textarea")[0];
    // textarea.value = last_task.description;
    // setAlerts(() => last_task.alerts || []);
    // setStatus(() => last_task.tags || []);
  };
  return (
    <form
      className={styles.create_task_container}
      onSubmit={handleSubmit(createCard)}
    >
      <div className={styles.title}>
        <h2>Criar</h2>
      </div>
      <div className={styles.search_input}>
        <div className={styles.header_textarea}>
          <label>Adicionar descrição</label>
          <div>
            <button onClick={() => patchLastRegister()}>
              Editar ultimo registro
            </button>
          </div>
        </div>
        <textarea cols={90} rows={10} {...register("description")}></textarea>
      </div>
      <section>
        <div className={styles.alert_container}>
          <div className={styles.create_alert_container}>
            <div className={styles.input_alert}>
              <InputModal
                label="Inserir Status"
                onChange={(e) => setInputStatus(e.target.value)}
                value={inputStatus}
              />
            </div>
            <div className={styles.alert_button}>
              <button
                type="button"
                onClick={() => {
                  setStatus([...status, inputStatus]);
                  setInputStatus("");
                }}
                className={styles.button_status}
              >
                Adicionar
              </button>
            </div>
          </div>
          <div className={styles.alerts}>
            {status.map((status) => (
              <SimpleTag name={status} setStatus={setStatus} />
            ))}
          </div>
        </div>
      </section>
      <section>
        <div className={styles.alert_container}>
          <div className={styles.create_alert_container}>
            <div className={styles.input_alert}>
              <InputModal
                label="Inserir Alerta"
                onChange={(e) => setInputAlert(e.target.value)}
                value={inputAlert}
              />
            </div>
            <div className={styles.alert_button}>
              <button
                type="button"
                onClick={() => {
                  setAlerts([...alerts, inputAlert]);
                  setInputAlert("");
                }}
                className={styles.button_alert}
              >
                Adicionar
              </button>
            </div>
          </div>
          <div className={styles.alerts}>
            {alerts.map((alert) => (
              <TagAlert name={alert} setAlerts={setAlerts} />
            ))}
          </div>
        </div>
      </section>
      <section className={styles.finish_buttons}>
        <div className={styles.cancel_button}>
          <button
            onClick={() => {
              reset();
              setAlerts([]);
              setStatus([]);
            }}
          >
            Cancelar
          </button>
        </div>
        <div className={styles.save_button}>
          <button type="submit">Salvar</button>
        </div>
      </section>
    </form>
  );
};

export default TaskCreateModal;
