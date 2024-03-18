import { Select } from "antd";
import { useId } from "react";

import { selectFieldStyles } from "./styled";
import { SelectFieldProps } from "./types";

export const SelectField = ({ label, ...props }: SelectFieldProps) => {
  const id = "select_" + useId();

  return (
    <div className={selectFieldStyles}>
      <label htmlFor={id}>{label}</label>
      <Select {...props} id={id} />
    </div>
  );
};
