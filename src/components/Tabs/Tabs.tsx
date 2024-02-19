import { Button, Container } from "src/ui";
import { TabsProps } from "./types";

export const Tabs = ({ data, activeIndex, onClick }: TabsProps) => {
  const onClickHandler = (index: number) => {
    if (onClick) onClick(index);
  };

  return (
    <>
      <Container>
        {data.map((tab, i) => (
          <Button
            outlined={i !== activeIndex}
            onClick={() => onClickHandler(i)}
            key={tab}
          >
            {tab}
          </Button>
        ))}
      </Container>
    </>
  );
};
