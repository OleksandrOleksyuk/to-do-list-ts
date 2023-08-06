import { ButtonProps } from "../style.types";

const Button: React.FC<ButtonProps> = ({ children, onClick, styles }) => {
  return (
    <button onClick={onClick} className={`px-2 py-1 px- rounded-lg ${styles}`}>
      {children}
    </button>
  );
};

export default Button;
