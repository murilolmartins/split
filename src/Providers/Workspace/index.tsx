import {
  createContext,
  ReactNode,
  useCallback,
  useContext,
  useState,
} from "react";
import { NavigateFunction } from "react-router-dom";
import api from "../../Services/api";

const WorkSpaceContext = createContext<WorkSpaceProviderData>(
  {} as WorkSpaceProviderData
);

interface WorkSpaceProviderProps {
  children: ReactNode;
}

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

interface PatientsData {
  info: PatientInfo;
  datas: CardData[];
  comments: CommentData[];
}

interface UserData {
  user_id: number;
  name: string;
  profession_code: string;
  cpf: string;
  phone: string;
  email: string;
  profession: string;
}

interface CategorieData {
  categorie_id: number;
  category: string;
}

interface WorkSpaceData {
  name: string;
  owner_id: number;
  workspace_id: number;
  workers: UserData[];
  local: string;
  categories: CategorieData[];
  patients: PatientsData[];
}

interface WorkSpaceProviderData {
  patients: PatientsData[];
  workSpaceList: string[];
  setPatients: React.Dispatch<React.SetStateAction<PatientsData[]>>;
  setWorkSpaceList: React.Dispatch<React.SetStateAction<string[]>>;
  searchPatient: PatientsData[];
  setSearchPatient: React.Dispatch<React.SetStateAction<PatientsData[]>>;
  filterPatient: (inputText: string) => void;
  setNewWorkSpaceList: React.Dispatch<React.SetStateAction<string[]>>;
  newWorkSpaceList: string[];
  setNewWorkName: React.Dispatch<React.SetStateAction<string>>;
  setNewWorkLocal: React.Dispatch<React.SetStateAction<string>>;
  newWorkName: string;
  newWorkLocal: string;
  registerNewWorkSpace: (navigate: NavigateFunction) => Promise<void>;
  categories: CategorieData[];
}

export const WorkSpaceProvider = ({ children }: WorkSpaceProviderProps) => {
  const [patients, setPatients] = useState<PatientsData[]>([]);
  const [searchPatient, setSearchPatient] = useState<PatientsData[]>([]);
  const [categories, setCategories] = useState<CategorieData[]>([]);
  const [workSpaceCategories, setWorkSpaceCategories] = useState<
    CategorieData[]
  >([]);
  const [workSpaceList, setWorkSpaceList] = useState<string[]>([
    "Enfermaria I",
    "Enfermaria II",
    "Enfermaria III",
  ]);

  const [newWorkSpaceList, setNewWorkSpaceList] = useState<string[]>(
    () =>
      JSON.parse(
        localStorage.getItem("@Split: NewWorkSpaceList") as string
      ) || ["Pacientes", "Tarefas"]
  );
  const [newWorkName, setNewWorkName] = useState<string>(
    () => localStorage.getItem("@Split:NewWorkName") || ""
  );
  const [newWorkLocal, setNewWorkLocal] = useState<string>(
    () => localStorage.getItem("@Split:NewWorkLocal") || ""
  );

  const loadWorkSpace = useCallback(async (workSpace_id) => {
    const token = localStorage.getItem("@Split:Token") || "";
    await api
      .get(`/workspaces/${workSpace_id}`, {
        headers: { Authorization: `Bearer ${token}` },
      })
      .then((res) => {
        setPatients(res.data.patients);
        setWorkSpaceCategories(res.data.categories);
      })
      .catch((err) => console.log(err));
  }, []);

  const getCategories = useCallback(async () => {
    await api
      .get("/categories")
      .then((res) => {
        setCategories(res.data);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

  const registerNewWorkSpace = useCallback(
    async (navigate: NavigateFunction) => {
      const token = localStorage.getItem("@Split:Token") || "";
      setWorkSpaceList([
        ...workSpaceList,
        localStorage.getItem("@Split: NewWorkName") as string,
      ]);
      const newWorkSpace = {
        name: localStorage.getItem("@Split: NewWorkName"),
        local: localStorage.getItem("@Split: NewWorkLocal"),
        categories: newWorkSpaceList,
      };
      navigate("/workspaces");

      // await api
      //   .post(`/workspaces`, {
      //     headers: { Authorization: `Bearer ${token}` },
      //   })
      //   .then((res) => setWorkSpaceList([...workSpaceList]))
      //   .catch((err) => console.log(err));
    },
    []
  );

  const filterPatient = (inputText: string) => {
    const insensitiveCase = new RegExp(inputText, "i");
    const filteredPacients = patients.filter((patient) =>
      insensitiveCase.test(patient.info.name)
    );

    setSearchPatient(filteredPacients);
  };
  return (
    <WorkSpaceContext.Provider
      value={{
        patients,
        workSpaceList,
        setWorkSpaceList,
        searchPatient,
        setSearchPatient,
        filterPatient,
        setPatients,
        setNewWorkSpaceList,
        newWorkSpaceList,
        setNewWorkName,
        setNewWorkLocal,
        newWorkLocal,
        newWorkName,
        registerNewWorkSpace,
        categories,
      }}
    >
      {children}
    </WorkSpaceContext.Provider>
  );
};

export const useWorkSpace = () => useContext(WorkSpaceContext);
