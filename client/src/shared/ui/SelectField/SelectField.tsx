import { Select } from "antd";
import { useId } from "react";

import { selectFieldStyles } from "./styled";
import { SelectFieldProps } from "./types";

export const SelectField = ({ label, options }: SelectFieldProps) => {
  const id = "select_" + useId();

  return (
    <div className={selectFieldStyles}>
      <label htmlFor={id}>{label}</label>
      <Select defaultValue="none" options={options} id={id} />
    </div>
  );
};
