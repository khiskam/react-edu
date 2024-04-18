import { useMutation } from "@tanstack/react-query";
import { Task } from "src/shared/types";

import { axiosAuthClient } from "../client";
import { CreateData } from "./types";

const create = async (data: CreateData) => {
  return await axiosAuthClient.post<Task>("/tasks", data);
};

export const useCreateMutation = () =>
  useMutation({
    mutationFn: create,
  });
