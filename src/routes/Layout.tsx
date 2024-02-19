import { Outlet } from "react-router-dom";
import { Header } from "src/widgets";

export const Layout = () => {
  return (
    <>
      <Header />
      <div>
        <Outlet />
      </div>
      {/* <Footer /> */}
    </>
  );
};
