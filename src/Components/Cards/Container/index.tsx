import { ReactNode } from "react";
import styles from "./ContainerCard.module.css";

interface ContainerCardProps {
  children: ReactNode;
}

const ContainerCard = ({ children }: ContainerCardProps) => {
  return (
    <div className={styles.box}>
      <div className={styles.container}>{children}</div>
    </div>
  );
};

export default ContainerCard;
