import { NavLink, useNavigate } from "react-router-dom";
import Logo from "src/assets/icons/logo.svg?react";
import { Container, LinkButton } from "src/ui";
import { ROUTES } from "src/constants";
import { LINKS } from "./constants";
import { headerInneerStyles, headerStyles, navStyles } from "./styled";

export const Header = () => {
  const navigate = useNavigate();

  return (
    <header className={headerStyles}>
      <Container className={headerInneerStyles}>
        <NavLink to={ROUTES.main}>
          <Logo height={24} />
        </NavLink>
        <nav className={navStyles}>
          {LINKS.map((link) => (
            <LinkButton onClick={() => navigate(link.route)} key={link.route}>
              {link.children}
            </LinkButton>
          ))}
        </nav>
      </Container>
    </header>
  );
};
