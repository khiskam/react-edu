import { Banner, Categories } from "src/components";
import { Divider } from "src/ui";
import { CATEGORIES_DATA } from "./constants";

export const MainPage = () => {
  return (
    <>
      <Divider />
      <Banner />
      <Divider />
      <Categories data={CATEGORIES_DATA} />
    </>
  );
};
