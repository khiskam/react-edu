import { useQuery } from "@tanstack/react-query";
import { Task } from "src/shared/types";

import { axiosAuthClient } from "../client";

const getAll = async (queryParams: string) => {
  const response = await axiosAuthClient.get<{ tasks: Task[] }>(
    `/tasks?${queryParams}`
  );

  const { data } = response;

  return data;
};

export const useGetAllQuery = (queryParams: string) =>
  useQuery({
    queryKey: ["tasks"],
    queryFn: () => getAll(queryParams),
  });
