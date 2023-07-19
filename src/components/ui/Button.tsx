import { MouseEventHandler } from "react";

import "../../styles/Button.css";

type Props = {
  type?: "submit" | "reset" | "button" | undefined;
  label: string;
  color?: "firebrick" | "seagreen" | undefined;
  onClick?: MouseEventHandler;
};

const Button = ({ type = "button", label, color, onClick }: Props) => {
  return (
    <button
      className="btn"
      onClick={onClick}
      type={type}
      style={{ backgroundColor: color }}
    >
      {label}
    </button>
  );
};

export default Button;
