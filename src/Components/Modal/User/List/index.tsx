import SimpleTag from "../../../Tag/Simple";
import InputModal from "../../Input";
import styles from "./ListInput.module.css";

interface ListInputProps {
  input: string;
  setInput: React.Dispatch<React.SetStateAction<string>>;
  list: string[];
  setList: React.Dispatch<React.SetStateAction<string[]>>;
  label: string;
}

const ListInput = ({
  input,
  setInput,
  list,
  setList,
  label,
}: ListInputProps) => {
  return (
    <div className={styles.alert_container}>
      <div className={styles.create_alert_container}>
        <div className={styles.input_alert}>
          <InputModal
            label={label}
            onChange={(e) => setInput(e.target.value)}
            value={input}
          />
        </div>
        <div className={styles.alert_button}>
          <button
            type="button"
            onClick={() => {
              setList([...list, input]);
              setInput("");
            }}
            className={styles.button_status}
          >
            Adicionar
          </button>
        </div>
      </div>
      <div className={styles.alerts}>
        {list.map((item) => (
          <SimpleTag name={item} setStatus={setList} />
        ))}
      </div>
    </div>
  );
};

export default ListInput;
