import { ButtonHTMLAttributes, ComponentType } from "react";
import { IconBaseProps } from "react-icons";
import styles from "./Button.module.css";

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  icon?: ComponentType<IconBaseProps>;
  title: string;
  inverse?: boolean;
}

const Button = ({
  icon: Icon,
  title,
  inverse = false,
  ...rest
}: ButtonProps) => {
  return (
    <div className={styles.button_container}>
      <button {...rest}>
        {!inverse && title}
        {Icon && (
          <div className={styles.svg_container}>
            <Icon />
          </div>
        )}
        {inverse && title}
      </button>
    </div>
  );
};

export default Button;
