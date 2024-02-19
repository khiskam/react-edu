import { useState } from "react";
import { Tabs } from "src/components";
import { Divider } from "src/ui";

export const CatalogPage = () => {
  const [activeIndex, setActiveIndex] = useState(0);
  return (
    <>
      <Divider />
      <Tabs
        data={["Семена", "Растения", "Горшки", "Инструменты"]}
        activeIndex={activeIndex}
        onClick={(index) => setActiveIndex(index)}
      />
    </>
  );
};
