import { Divider } from "src/ui";
import { CATEGORIES_DATA } from "./constants";
import { Banner, Categories } from "./components";

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
