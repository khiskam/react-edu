import { Container, Link, Title } from "src/ui";
import { CategoriesProps } from "./types";
import {
  cardStyles,
  categoriesBoxStyles,
  categoriesInnerStyles,
} from "./styles";
import { ROUTES } from "src/constants";

export const Categories = ({ data }: CategoriesProps) => {
  return (
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

      <Link to={ROUTES.catalog}>В каталог</Link>
    </Container>
  );
};
