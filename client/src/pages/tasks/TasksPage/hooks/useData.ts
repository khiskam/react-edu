import { useLayoutEffect, useState } from "react";
import { Task } from "src/shared/types";

import { data as values } from "../../data";

export const useData = () => {
  const [data, setData] = useState<Task[]>([]);

  useLayoutEffect(() => {
    setData(values);
  }, []);

  return { data };
};
