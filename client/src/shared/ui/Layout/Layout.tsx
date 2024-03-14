import { Outlet } from "react-router-dom";
import { Header } from "src/components";
import { Footer } from "src/components";
import { Container, OutletContainer } from "./styled";

export const Layout = () => {
  return (
    <Container>
      <Header />
      <OutletContainer>
        <Outlet />
      </OutletContainer>
      <Footer />
    </Container>
  );
};
