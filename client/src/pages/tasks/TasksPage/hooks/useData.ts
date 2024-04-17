import { useLayoutEffect, useState } from "react";

import { data as values, Task } from "../../data";

export const useData = () => {
  const [data, setData] = useState<Task[]>([]);

  useLayoutEffect(() => {
    setData(values);
  }, []);

  return { data };
};
