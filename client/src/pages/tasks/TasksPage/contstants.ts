import { SelectProps, TabsProps } from "antd";

export const TABS_DATA: TabsProps["items"] = [
  {
    key: "all",
    label: "Все",
  },
  {
    key: "completed",
    label: "Завершенные",
  },
  {
    key: "incompleted",
    label: "Незавершенные",
  },
];

export const DATE_SELECT_DATA: SelectProps["options"] = [
  { value: "none", label: "Не фильтровать" },
  { value: "increasing", label: "По возрастанию" },
  { value: "decreasing", label: "По убыванию" },
];

export const TITLE_SELECT_DATA: SelectProps["options"] = [
  { value: "none", label: "Не фильтровать" },
  { value: "alphabet", label: "По алфавиту" },
  { value: "reverse", label: "В обратном порядке" },
];
