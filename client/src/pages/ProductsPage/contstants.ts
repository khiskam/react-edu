import { SelectProps, TabsProps } from "antd";
import { Categories } from "src/shared/constants";

export const NONE = "";

export const SORT = {
  asc: "asc",
  desc: "desc",
} as const;

export const TABS_DATA: TabsProps["items"] = [
  { key: NONE, label: "Все" },
  { key: Categories.Constructor, label: "Конструктор" },
  { key: Categories.ForBoys, label: "Для мальчиков" },
  { key: Categories.ForGirls, label: "Для девочек" },
];

export const NUMBER_SELECT_DATA: SelectProps["options"] = [
  { value: NONE, label: "Не сортировать" },
  { value: SORT.asc, label: "По возрастанию" },
  { value: SORT.desc, label: "По убыванию" },
];

export const STRING_SELECT_DATA: SelectProps["options"] = [
  { value: NONE, label: "Не сортировать" },
  { value: SORT.asc, label: "По алфавиту" },
  { value: SORT.desc, label: "В обратном порядке" },
];
