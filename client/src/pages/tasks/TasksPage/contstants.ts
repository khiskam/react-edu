import { SelectProps, TabsProps } from "antd";

export const NONE = "";

export enum TabFilter {
  Completed = "true",
  Incompleted = "false",
}

export enum Sort {
  Asc = "asc",
  Desc = "desc",
}

export const TABS_DATA: TabsProps["items"] = [
  { key: NONE, label: "Все" },
  { key: TabFilter.Completed, label: "Завершенные" },
  { key: TabFilter.Incompleted, label: "Незавершенные" },
];

export const DATE_SELECT_DATA: SelectProps["options"] = [
  { value: NONE, label: "Не сортировать" },
  { value: Sort.Asc, label: "По возрастанию" },
  { value: Sort.Desc, label: "По убыванию" },
];

export const TITLE_SELECT_DATA: SelectProps["options"] = [
  { value: NONE, label: "Не сортировать" },
  { value: Sort.Asc, label: "По алфавиту" },
  { value: Sort.Desc, label: "В обратном порядке" },
];
