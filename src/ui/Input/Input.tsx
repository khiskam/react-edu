import { InputHTMLAttributes } from "react";
import { inputStyles } from "./styles";

export const Input = (props: InputHTMLAttributes<HTMLInputElement>) => {
  return <input {...props} className={inputStyles} />;
};
