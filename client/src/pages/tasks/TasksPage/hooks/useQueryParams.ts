import { useDebounceFn } from "ahooks";
import { useLocation, useSearchParams } from "react-router-dom";

import { changeParams } from "./helpers";

export const useQueryParams = () => {
  const [searchParams, setSearchParams] = useSearchParams(useLocation().search);
  const { run } = useDebounceFn(
    (key: string, value: string) => {
      setParam(key, value);
      setSearchParams((prev) => changeParams(prev, ["_search", value]));
    },
    {
      wait: 400,
    }
  );

  const setParam = (key: string, value: string) =>
    setSearchParams((prev) => changeParams(prev, [key, value]));

  const onChange = (e: React.ChangeEvent<HTMLInputElement>) =>
    run("_search", e.target.value.toLowerCase());

  return { setParam, onChange, searchParams };
};
