import { ReactNode } from "react";
import styles from "./ContainerModal.module.css";
import { AiOutlineClose } from "react-icons/ai";

interface ContainerModalProps {
  children: ReactNode;
  setOpenModal: React.Dispatch<React.SetStateAction<boolean>>;
}

const ContainerModal = ({ children, setOpenModal }: ContainerModalProps) => {
  return (
    <div className={styles.background}>
      <div className={styles.opacity}></div>
      <div className={styles.container}>
        <div className={styles.close}>
          <AiOutlineClose onClick={() => setOpenModal(false)} />
        </div>
        {children}
      </div>
    </div>
  );
};

export default ContainerModal;
