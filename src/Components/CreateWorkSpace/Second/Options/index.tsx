import { useState } from "react";
import { useWorkSpace } from "../../../../Providers/Workspace";
import DiagnosesCard from "../../../Cards/Diagnoses";
import TasksCard from "../../../Cards/Tasks";
import PatientInfoCard from "../../../Cards/User";
import CardOptions from "./CardOptions";
import styles from "./OptionsCreateWSS.module.css";

interface AddressData {
  address_id: number;
  street: string;
  cep: string;
  number_house: string;
  complement: string;
}

interface AllergyData {
  allergy_id: number;
  name: string;
}

interface PatientInfo {
  _id: number;
  name: string;
  gender: string;
  patient_code: string;
  profession: string | null;
  marital_status: string | null;
  responsible_guardian: string | null;
  responsible_contact: string | null;
  birth_date: string | null;
  workspace_id: number | null;
  address: AddressData | null;
  allergies: AllergyData[];
  tags: TagData[];
}

interface TagData {
  tag_id: number;
  tag: string;
  alert_tag: boolean;
}
interface CommentData {
  comment_id: number;
  comment: string;
  date_time: string;
  user_name: string;
  category_name: string;
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

interface PatientsData {
  info: PatientInfo;
  datas: CardData[];
  comments: CommentData[];
}

const OptionsCreateWSS = () => {
  const { newWorkSpaceList, setNewWorkSpaceList, categories } = useWorkSpace();
  const [defaultPatient] = useState<PatientsData>({
    info: {
      _id: 1,
      name: "Vitor",
      gender: "Masasdaulino",
      patient_code: "asdada",
      profession: "Bilioasdadnario",
      marital_status: "casado com a morena",
      responsible_guardian: "Ele Mesmo",
      responsible_contact: "o dele mesmo",
      birth_date: "Mon, 01 Jan 2001 00:00:00 GMT",
      workspace_id: 1,
      address: {
        complement: "AP 204",
        address_id: 4,
        street: "asdasd",
        number_house: "233",
        cep: "23456789",
      },
      tags: [
        {
          tag_id: 1,
          alert_tag: false,
          tag: "coisa",
        },
        {
          tag_id: 2,
          alert_tag: false,
          tag: "asd",
        },
        {
          tag_id: 3,
          alert_tag: true,
          tag: "asds",
        },
        {
          tag_id: 4,
          alert_tag: true,
          tag: "asd",
        },
      ],
      allergies: [
        {
          name: "uva",
          allergy_id: 1,
        },
        {
          name: "usar cinto",
          allergy_id: 2,
        },
        {
          name: "metal",
          allergy_id: 3,
        },
      ],
    },
    datas: [
      {
        data_id: 1,
        description: "asdasd",
        date: "Sun, 01 May 2022 14:59:37 GMT",
        status: true,
        category_id: 1,
        category_name: "Tarefas",
        tags: [
          {
            tag_id: 5,
            alert_tag: false,
            tag: "coisa",
          },
          {
            tag_id: 6,
            alert_tag: false,
            tag: "asd",
          },
          {
            tag_id: 7,
            alert_tag: true,
            tag: "asds",
          },
          {
            tag_id: 8,
            alert_tag: true,
            tag: "asd",
          },
        ],
      },
      {
        data_id: 2,
        description: "asdasd",
        date: "Sun, 01 May 2022 14:59:37 GMT",
        status: true,
        category_id: 1,
        category_name: "Tarefas",
        tags: [
          {
            tag_id: 5,
            alert_tag: false,
            tag: "coisa",
          },
          {
            tag_id: 6,
            alert_tag: false,
            tag: "asd",
          },
          {
            tag_id: 7,
            alert_tag: true,
            tag: "asds",
          },
          {
            tag_id: 8,
            alert_tag: true,
            tag: "asd",
          },
        ],
      },
    ],
    comments: [
      {
        comment_id: 1,
        comment: "asdadsdds",
        user_name: "Murilo Martins",
        date_time: "Sun, 01 May 2022 18:29:34 GMT",
        category_name: "Pacientes",
      },
      {
        comment_id: 2,
        comment: "asdadsdds",
        user_name: "Murilo Martins",
        date_time: "Sun, 01 May 2022 18:29:34 GMT",
        category_name: "Tarefas",
      },
    ],
  });

  return (
    <div className={styles.container}>
      <div className={styles.small_container}>
        <div className={styles.options_container}>
          <div className={styles.options_title}>
            <h2>Escolha as colunas</h2>
          </div>
          <div className={styles.options_cards}>
            {categories.map((category) => (
              <CardOptions
                title={category.category}
                setBoxList={setNewWorkSpaceList}
              />
            ))}
          </div>
        </div>
        <div className={styles.display_container}>
          <div className={styles.advertise}>
            <p>Pré-visualização</p>
          </div>
          <div className={styles.boxList_container}>
            <div className={styles.container_box}>
              <div className={styles.title_container}>
                <h2>Pacientes</h2>
              </div>
              <PatientInfoCard patient={defaultPatient.info} />
            </div>
            <div className={styles.container_box}>
              <div className={styles.title_container}>
                <h2>Tarefas</h2>
              </div>
              <TasksCard
                comments={defaultPatient.comments}
                tasks={
                  defaultPatient.datas &&
                  (defaultPatient.datas.map((data) => {
                    if (data.category_name === "Tarefas") {
                      return data;
                    }
                    return null;
                  }) as CardData[])
                }
              />
            </div>
            {newWorkSpaceList.map((box) => {
              if (box !== "Pacientes" && box !== "Tarefas") {
                return (
                  <div className={styles.container_box}>
                    <div className={styles.title_container}>
                      <h2>{box}</h2>
                    </div>
                    <DiagnosesCard
                      box={box}
                      comments={
                        defaultPatient.datas &&
                        (defaultPatient.comments.map((comment) => {
                          if (comment.category_name === box) {
                            return comment;
                          }
                          return null;
                        }) as CommentData[])
                      }
                      diagnoses={
                        defaultPatient.datas &&
                        (defaultPatient.datas.map((data) => {
                          if (data.category_name === box) {
                            return data;
                          }
                          return null;
                        }) as CardData[])
                      }
                    />
                  </div>
                );
              }
            })}
          </div>
        </div>
      </div>
    </div>
  );
};

export default OptionsCreateWSS;
