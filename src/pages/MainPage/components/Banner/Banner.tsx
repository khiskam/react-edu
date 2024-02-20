import { Container, NavButton } from "src/ui";
import bannerSrc from "src/assets/images/banner.png";
import { BUTTONS } from "./constants";
import {
  bannerInnerStyles,
  buttonBoxStyles,
  contentBoxStyles,
  imgStyles,
  spanStyles,
  subtitleStyles,
  titleStyles,
} from "./styles";

export const Banner = () => {
  return (
    <section>
      <Container className={bannerInnerStyles}>
        <div className={contentBoxStyles}>
          <h1 className={titleStyles}>
            Магазин садовых товаров{" "}
            <span className={spanStyles}>«САДОВОД»</span>
          </h1>
          <p className={subtitleStyles}>В гармонии с природой</p>

          <div className={buttonBoxStyles}>
            {BUTTONS.map((button) => (
              <NavButton
                to={button.route}
                key={button.children}
                outlined={button.outlined}
              >
                {button.children}
              </NavButton>
            ))}
          </div>
        </div>
        <img src={bannerSrc} alt="banner" className={imgStyles} />
      </Container>
    </section>
  );
};
