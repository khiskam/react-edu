import { SelectProps, TabsProps } from "antd";

export enum TabFilter {
  All = "all",
  Completed = "completed",
  Incompleted = "incompleted",
}

export enum Sort {
  No = "no",
  Asc = "asc",
  Desc = "desc",
}

export const TABS_DATA: TabsProps["items"] = [
  {
    key: TabFilter.All,
    label: "Все",
  },
  {
    key: TabFilter.Completed,
    label: "Завершенные",
  },
  {
    key: TabFilter.Incompleted,
    label: "Незавершенные",
  },
];

export const DATE_SELECT_DATA: SelectProps["options"] = [
  { value: Sort.No, label: "Не сортировать" },
  { value: Sort.Asc, label: "По возрастанию" },
  { value: Sort.Desc, label: "По убыванию" },
];

export const TITLE_SELECT_DATA: SelectProps["options"] = [
  { value: Sort.No, label: "Не сортировать" },
  { value: Sort.Asc, label: "По алфавиту" },
  { value: Sort.Desc, label: "В обратном порядке" },
];
