import { useEffect } from "react";
import { useUserCheckQuery } from "src/shared/api";
import { setUser } from "src/shared/store";

import { AuthProviderProps } from "./types";

export const AuthProvider = ({ children }: AuthProviderProps) => {
  const { data, status } = useUserCheckQuery();

  useEffect(() => {
    if (status === "success") {
      setUser({ id: data.user.id, email: data.user.email, token: data.token });
    }
  }, [status, data]);

  return <>{children}</>;
};
