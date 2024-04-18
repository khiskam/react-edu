import { useQuery } from "@tanstack/react-query";

import { axiosAuthClient } from "../client";
import { AuthResponceData } from "./types";

const checkMe = async () => {
  const response = await axiosAuthClient.get<AuthResponceData>("/me");

  const { data } = response;

  return data;
};

export const useUserCheckQuery = () =>
  useQuery({
    queryKey: ["me"],
    queryFn: checkMe,
  });
