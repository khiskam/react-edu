import { useRef, useState } from "react";
import { CSSTransition } from "react-transition-group";

import { AccordionBox, ArrowIcon, BodyText } from "./styles";
import { COLORS } from "src/assets/styles";
type AccordionContent = {
  title: string;
  body: string;
};

type AccordionProps = {
  content: AccordionContent;
};

export const Accordion = ({ content }: AccordionProps) => {
  const [isOpened, setIsOpened] = useState(false);
  const nodeRef = useRef<HTMLDivElement>(null);

  const toggleAccordion = () => setIsOpened((prev) => !prev);

  return (
    <AccordionBox onClick={toggleAccordion}>
      <p>{content.title}</p>
      <ArrowIcon transform={`rotate(${isOpened ? -180 : 0})`} />
      <CSSTransition
        in={isOpened}
        nodeRef={nodeRef}
        classNames={"accordion"}
        timeout={400}
        unmountOnExit
      >
        <BodyText color={COLORS.gray} ref={nodeRef}>
          <p style={{ overflow: "hidden" }}>{content.body}</p>
        </BodyText>
      </CSSTransition>
    </AccordionBox>
  );
};
