import {
  createContext,
  ReactNode,
  useCallback,
  useContext,
  useState,
} from "react";
import { NavigateFunction } from "react-router-dom";
import api from "../../Services/api";
import { toast } from "react-toastify";

interface ServicesProviderProps {
  children: ReactNode;
}

interface ServicesProviderData {}

const ServicesContext = createContext<ServicesProviderData>(
  {} as ServicesProviderData
);

export const ServicesṔrovider = ({ children }: ServicesProviderProps) => {
  const deleteData = useCallback(async (id: number) => {
    await api
      .delete(`/datas/${id}`)
      .then((res) => {})
      .catch((err) => {
        toast.error("Erro ao deletar, tente novamente depois");
      });
  }, []);
  const updateData = useCallback(async (id: number, data) => {
    const token = localStorage.getItem("@Split:Token") || "";
    await api
      .patch(`/datas/${id}`, data, {
        headers: { Authorization: `Bearer ${token}` },
      })
      .then((res) => {})
      .catch((err) =>
        toast.error("Erro ao atualizar, tente novamente mais tarde")
      );
  }, []);
  const postData = useCallback(async (data) => {
    const token = localStorage.getItem("@Split:Token") || "";
    await api
      .post(`/datas`, data, {
        headers: { Authorization: `Bearer ${token}` },
      })
      .then((res) => {})
      .catch((err) =>
        toast.error("Erro ao postar, tente novamente mais tarde")
      );
  }, []);

  const deleteComment = useCallback(async (id: number) => {
    await api
      .delete(`/comments/${id}`)
      .then((res) => {})
      .catch((err) => {
        toast.error("Erro ao deletar, tente novamente depois");
      });
  }, []);
  const updateComment = useCallback(async (id: number, data) => {
    const token = localStorage.getItem("@Split:Token") || "";
    await api
      .patch(`/comments/${id}`, data, {
        headers: { Authorization: `Bearer ${token}` },
      })
      .then((res) => {})
      .catch((err) => toast.error("Erro ao atualizar, tente novamente depois"));
  }, []);
  const postComment = useCallback(async (data) => {
    const token = localStorage.getItem("@Split:Token") || "";
    await api
      .post(`/comments`, data, {
        headers: { Authorization: `Bearer ${token}` },
      })
      .then((res) => {})
      .catch((err) => toast.error("Erro ao postar, tente novamente depois"));
  }, []);

  const deleteTag = useCallback(async (id: number) => {
    await api
      .delete(`/tags/${id}`)
      .then((res) => {})
      .catch((err) => {
        toast.error("Erro ao deletar, tente novamente depois");
      });
  }, []);

  const postTag = useCallback(async (data) => {
    const token = localStorage.getItem("@Split:Token") || "";
    await api
      .post(`/tags`, data, {
        headers: { Authorization: `Bearer ${token}` },
      })
      .then((res) => {})
      .catch((err) => toast.error("Erro ao postar, tente novamente depois"));
  }, []);

  const deletePatient = useCallback(async (id: number) => {
    await api
      .delete(`/patients/${id}`)
      .then((res) => {})
      .catch((err) => {
        toast.error("Erro ao deletar, tente novamente depois");
      });
  }, []);
  const updatePatient = useCallback(async (id: number, data) => {
    const token = localStorage.getItem("@Split:Token") || "";
    await api
      .patch(`/patients/${id}`, data, {
        headers: { Authorization: `Bearer ${token}` },
      })
      .then((res) => {})
      .catch((err) => toast.error("Erro ao atualizar, tente novamente depois"));
  }, []);
  const postPatient = useCallback(async (data) => {
    const token = localStorage.getItem("@Split:Token") || "";
    await api
      .post(`/patients`, data, {
        headers: { Authorization: `Bearer ${token}` },
      })
      .then((res) => {})
      .catch((err) => toast.error("Erro ao postar, tente novamente depois"));
  }, []);

  return (
    <ServicesContext.Provider value={{}}>{children}</ServicesContext.Provider>
  );
};
