import { Outlet } from "react-router-dom";
import { Footer, Header } from "src/components";
import { Container, OutletContainer } from "./styles";

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
