import SimpleTag from "../../../../Tag/Simple";
import styles from "./SelectTag.module.css";

interface SelectTagProps {
  title: string;
  list: string[];
}

const SelectTag = ({ title, list }: SelectTagProps) => {
  return (
    <div className={styles.select_container}>
      <div className={styles.title}>
        <label>{title}</label>
      </div>
      <div className={styles.createAndSelect_container}>
        <div className={styles.tags_container}>
          {list.map((item) => {
            return <SimpleTag name={item} />;
          })}
        </div>
        {/* <div className={styles.button_container}>
          <div>
            <button>+ adicionar tag</button>
          </div>
        </div> */}
      </div>
    </div>
  );
};

export default SelectTag;
