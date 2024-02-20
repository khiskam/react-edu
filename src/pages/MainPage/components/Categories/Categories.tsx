import { Container, Title } from "src/ui";
import { CategoriesProps } from "./types";
import {
  cardStyles,
  categoriesBoxStyles,
  categoriesInnerStyles,
} from "./styles";

export const Categories = ({ data }: CategoriesProps) => {
  return (
    <section>
      <Container className={categoriesInnerStyles}>
        <Title>Категории</Title>

        <div className={categoriesBoxStyles}>
          {data.map((category) => (
            <div key={category.title} className={cardStyles}>
              <img src={category.src} alt={category.title} />
              <p>{category.title}</p>
            </div>
          ))}
        </div>
      </Container>
    </section>
  );
};
