import { Container, Title } from "src/ui";
import { CategoriesProps } from "./types";

import {
  accordionContainerStyles,
  cardStyles,
  categoriesContainer,
  categoriesInnerStyles,
} from "./styles";
import { Slider } from "src/components";
import { ACCORDION_DATA } from "./constants";
import { Accordion } from "src/components/Accordion";

export const Categories = ({ data }: CategoriesProps) => {
  return (
    <section>
      <Container className={categoriesInnerStyles}>
        <Title>Категории</Title>
        <div className={categoriesContainer}>
          <Slider>
            {data.map((category) => (
              <div key={category.title} className={cardStyles}>
                <img src={category.src} alt={category.title} />
                <p>{category.title}</p>
              </div>
            ))}
          </Slider>

          <div className={accordionContainerStyles}>
            {ACCORDION_DATA.map((item) => (
              <Accordion content={item} key={item.title} />
            ))}
          </div>
        </div>
      </Container>
    </section>
  );
};
