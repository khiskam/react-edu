import { useMutation } from "@tanstack/react-query";

import { axiosAuthClient } from "../client";

const remove = async (id: string) => {
  return await axiosAuthClient.delete<void>(`/tasks/${id}`);
};

export const useDeleteMutation = () =>
  useMutation({
    mutationFn: remove,
  });
