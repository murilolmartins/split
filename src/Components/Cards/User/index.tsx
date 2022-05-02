import styles from "./UserCard.module.css";
import Avatar from "../../../Assets/Images/avatarheader.jpg";
import ContainerCard from "../Container";
import SimpleTag from "../../Tag/Simple";

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

interface TagData {
  tag_id: number;
  tag: string;
  alert_tag: boolean;
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
interface PatientInfoCardProps {
  patient: PatientInfo;
}

const PatientInfoCard = ({ patient }: PatientInfoCardProps) => {
  return (
    <ContainerCard>
      <div className={styles.userName_container}>
        <h2>{patient.name}</h2>
      </div>
      <div className={styles.userInfo_container}>
        <p>Sexo: {patient.gender}</p>
        <p>Contato: {patient.responsible_contact}</p>
        <p>
          Alergias:{" "}
          {patient.allergies &&
            patient.allergies.map((allergy) => allergy.name).join(", ")}
          .
        </p>
        <p>Codigo: {patient.patient_code}</p>
      </div>
      <div className={styles.doctorInfo_container}>
        <div>
          <img src={Avatar} alt="doctor_image" />
        </div>
        <h3>{patient.name}</h3>
      </div>
      <div className={styles.tags_container}>
        <p>Tags:</p>
        <div className={styles.tags}>
          {patient.tags &&
            patient.tags.map((tag) => <SimpleTag name={tag.tag} />)}
        </div>
      </div>
    </ContainerCard>
  );
};

export default PatientInfoCard;
