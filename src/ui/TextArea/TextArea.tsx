import { TextareaHTMLAttributes } from "react";
import { textareaStyles } from "./styles";

export const TextArea = ({
  ...props
}: TextareaHTMLAttributes<HTMLTextAreaElement>) => {
  return <textarea className={textareaStyles} {...props} />;
};
