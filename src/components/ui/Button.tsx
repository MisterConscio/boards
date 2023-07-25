import { MouseEventHandler } from "react";

import "../../styles/Button.css";

type Props = {
  type?: "submit" | "reset" | "button" | undefined;
  label: string;
  color?: "firebrick" | "seagreen" | undefined;
  onClick?: MouseEventHandler;
  size?: "small" | "big" | undefined;
};

const Button = ({ type = "button", label, color, onClick, size }: Props) => {
  return (
    <button
      className="btn"
      onClick={onClick}
      type={type}
      style={{
        backgroundColor: color,
        fontSize: size === "big" && "1.35rem",
      }}
    >
      {label}
    </button>
  );
};

export default Button;
