import styles from "./PriorityTag.module.css";

interface PriorityTagProps {
  name: string;
}

const PriorityTag = ({ name }: PriorityTagProps) => {
  return (
    <div className={styles.tag_container}>
      <p>{name}</p>
    </div>
  );
};

export default PriorityTag;
