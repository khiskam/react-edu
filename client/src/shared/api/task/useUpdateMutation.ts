import { useMutation } from "@tanstack/react-query";
import { Task } from "src/shared/types";

import { axiosAuthClient } from "../client";
import { UpdateData } from "./types";

const update = async (data: UpdateData) => {
  return await axiosAuthClient.put<Task>(`/tasks/${data.id}`, data);
};

export const useUpdateMutation = () =>
  useMutation({
    mutationFn: update,
  });
