//import { MouseEventHandler } from "react";

import "../../styles/Input.css";

type Props = {
  type?: "text" | "file" | undefined;
  placeholder?: string;
  //color?: "firebrick" | "seagreen" | undefined;
  //onClick?: MouseEventHandler;
};

const Input = ({ type, placeholder }: Props) => {
  return <input type={type} placeholder={placeholder} className="input" />;
};

export default Input;
