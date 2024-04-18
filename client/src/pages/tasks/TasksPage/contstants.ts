import { SelectProps, TabsProps } from "antd";

export const NONE = "";

export enum TabFilter {
  Incompleted = "0",
  Completed = "1",
}

export const SORT = {
  asc: "asc",
  desc: "desc",
} as const;

export const TABS_DATA: TabsProps["items"] = [
  { key: NONE, label: "Все" },
  { key: TabFilter.Completed, label: "Завершенные" },
  { key: TabFilter.Incompleted, label: "Незавершенные" },
];

export const DATE_SELECT_DATA: SelectProps["options"] = [
  { value: NONE, label: "Не сортировать" },
  { value: SORT.asc, label: "По возрастанию" },
  { value: SORT.desc, label: "По убыванию" },
];

export const TITLE_SELECT_DATA: SelectProps["options"] = [
  { value: NONE, label: "Не сортировать" },
  { value: SORT.asc, label: "По алфавиту" },
  { value: SORT.desc, label: "В обратном порядке" },
];
