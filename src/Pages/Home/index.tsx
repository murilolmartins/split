import { useState } from "react";
import { FiSearch } from "react-icons/fi";
import DiagnosesCard from "../../Components/Cards/Diagnoses";
import TasksCard from "../../Components/Cards/Tasks";
import PatientInfoCard from "../../Components/Cards/User";
import HeaderHome from "../../Components/Home/Header";
import HeaderAuth from "../../Components/WorkSpace/HeaderAuth";
import { useWorkSpace } from "../../Providers/Workspace";
import styles from "./Home.module.css";

interface CommentData {
  comment_id: number;
  comment: string;
  date_time: string;
  user_name: string;
  category_name: string;
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

const Home = () => {
  const { patients, searchPatient, filterPatient, categories } = useWorkSpace();

  return (
    <div className={styles.home_container}>
      <HeaderAuth />
      <HeaderHome />
      <div className={styles.body_container}>
        <div className={styles.search_container}>
          <div>
            <FiSearch />
          </div>
          <div>
            <input
              type="text"
              placeholder="Buscar"
              onChange={(e) => filterPatient(e.target.value)}
            />
          </div>
        </div>
        <div className={styles.patients_container}>
          {searchPatient.length > 0
            ? searchPatient.map((patient, index) => (
                <div className={styles.patient_container}>
                  {index === 0
                    ? categories.map((categorie) => {
                        if (categorie.category === "Pacientes") {
                          return (
                            <div className={styles.container_box}>
                              <div className={styles.title_container}>
                                <h2>Pacientes</h2>
                              </div>
                              <PatientInfoCard patient={patient.info} />
                            </div>
                          );
                        } else if (categorie.category === "Tarefas") {
                          return (
                            <div className={styles.container_box}>
                              <div className={styles.title_container}>
                                <h2>Tarefas</h2>
                              </div>
                              <TasksCard
                                comments={
                                  patient.comments.map((comment) => {
                                    if (comment.category_name === "Tarefas") {
                                      return comment;
                                    }
                                    return null;
                                  }) as CommentData[]
                                }
                                tasks={
                                  patient.datas.map((data) => {
                                    if (data.category_name === "Tarefas") {
                                      return data;
                                    }
                                    return null;
                                  }) as CardData[]
                                }
                              />
                            </div>
                          );
                        } else {
                          return (
                            <div className={styles.container_box}>
                              <div className={styles.title_container}>
                                <h2>{categorie.category}</h2>
                              </div>
                              <DiagnosesCard
                                box={categorie.category}
                                comments={
                                  patient.comments.map((comment) => {
                                    if (
                                      comment.category_name ===
                                      categorie.category
                                    ) {
                                      return comment;
                                    }
                                    return null;
                                  }) as CommentData[]
                                }
                                diagnoses={
                                  patient.datas.map((data) => {
                                    if (
                                      data.category_name === categorie.category
                                    ) {
                                      return data;
                                    }
                                    return null;
                                  }) as CardData[]
                                }
                              />
                            </div>
                          );
                        }
                      })
                    : categories.map((categorie) => {
                        if (categorie.category === "Pacientes") {
                          return (
                            <div className={styles.container_box}>
                              <PatientInfoCard patient={patient.info} />
                            </div>
                          );
                        } else if (categorie.category === "Tarefas") {
                          return (
                            <div className={styles.container_box}>
                              <TasksCard
                                comments={
                                  patient.comments.map((comment) => {
                                    if (comment.category_name === "Tarefas") {
                                      return comment;
                                    }
                                    return null;
                                  }) as CommentData[]
                                }
                                tasks={
                                  patient.datas.map((data) => {
                                    if (data.category_name === "Tarefas") {
                                      return data;
                                    }
                                    return null;
                                  }) as CardData[]
                                }
                              />
                            </div>
                          );
                        } else {
                          return (
                            <div className={styles.container_box}>
                              <DiagnosesCard
                                box={categorie.category}
                                comments={
                                  patient.comments.map((comment) => {
                                    if (
                                      comment.category_name ===
                                      categorie.category
                                    ) {
                                      return comment;
                                    }
                                    return null;
                                  }) as CommentData[]
                                }
                                diagnoses={
                                  patient.datas.map((data) => {
                                    if (
                                      data.category_name === categorie.category
                                    ) {
                                      return data;
                                    }
                                    return null;
                                  }) as CardData[]
                                }
                              />
                            </div>
                          );
                        }
                      })}
                </div>
              ))
            : patients.map((patient, index) => (
                <div className={styles.patient_container}>
                  {index === 0
                    ? categories.map((categorie) => {
                        if (categorie.category === "Pacientes") {
                          return (
                            <div className={styles.container_box}>
                              <div className={styles.title_container}>
                                <h2>Pacientes</h2>
                              </div>
                              <PatientInfoCard patient={patient.info} />
                            </div>
                          );
                        } else if (categorie.category === "Tarefas") {
                          return (
                            <div className={styles.container_box}>
                              <div className={styles.title_container}>
                                <h2>Tarefas</h2>
                              </div>
                              <TasksCard
                                comments={
                                  patient.comments.map((comment) => {
                                    if (comment.category_name === "Tarefas") {
                                      return comment;
                                    }
                                    return null;
                                  }) as CommentData[]
                                }
                                tasks={
                                  patient.datas.map((data) => {
                                    if (data.category_name === "Tarefas") {
                                      return data;
                                    }
                                    return null;
                                  }) as CardData[]
                                }
                              />
                            </div>
                          );
                        } else {
                          return (
                            <div className={styles.container_box}>
                              <div className={styles.title_container}>
                                <h2>{categorie.category}</h2>
                              </div>
                              <DiagnosesCard
                                box={categorie.category}
                                comments={
                                  patient.comments.map((comment) => {
                                    if (
                                      comment.category_name ===
                                      categorie.category
                                    ) {
                                      return comment;
                                    }
                                    return null;
                                  }) as CommentData[]
                                }
                                diagnoses={
                                  patient.datas.map((data) => {
                                    if (
                                      data.category_name === categorie.category
                                    ) {
                                      return data;
                                    }
                                    return null;
                                  }) as CardData[]
                                }
                              />
                            </div>
                          );
                        }
                      })
                    : categories.map((categorie) => {
                        if (categorie.category === "Pacientes") {
                          return (
                            <div className={styles.container_box}>
                              <PatientInfoCard patient={patient.info} />
                            </div>
                          );
                        } else if (categorie.category === "Tarefas") {
                          return (
                            <div className={styles.container_box}>
                              <TasksCard
                                comments={
                                  patient.comments.map((comment) => {
                                    if (comment.category_name === "Tarefas") {
                                      return comment;
                                    }
                                    return null;
                                  }) as CommentData[]
                                }
                                tasks={
                                  patient.datas.map((data) => {
                                    if (data.category_name === "Tarefas") {
                                      return data;
                                    }
                                    return null;
                                  }) as CardData[]
                                }
                              />
                            </div>
                          );
                        } else {
                          return (
                            <div className={styles.container_box}>
                              <DiagnosesCard
                                box={categorie.category}
                                comments={
                                  patient.comments.map((comment) => {
                                    if (
                                      comment.category_name ===
                                      categorie.category
                                    ) {
                                      return comment;
                                    }
                                    return null;
                                  }) as CommentData[]
                                }
                                diagnoses={
                                  patient.datas.map((data) => {
                                    if (
                                      data.category_name === categorie.category
                                    ) {
                                      return data;
                                    }
                                    return null;
                                  }) as CardData[]
                                }
                              />
                            </div>
                          );
                        }
                      })}
                </div>
              ))}
        </div>
      </div>
    </div>
  );
};

export default Home;
