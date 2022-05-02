import { ReactNode } from "react";
import styles from "./ContainerCreateUserModal.module.css";
import { AiOutlineClose } from "react-icons/ai";

interface ContainerCreateUserModalProps {
  children: ReactNode;
  setOpenModal: React.Dispatch<React.SetStateAction<boolean>>;
}

const ContainerCreateUserModal = ({
  children,
  setOpenModal,
}: ContainerCreateUserModalProps) => {
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

export default ContainerCreateUserModal;
