import { Outlet } from "react-router-dom";

export const Layout = () => {
  return (
    <>
      {/* <Header /> */}
      <div>
        <Outlet />
      </div>
      {/* <Footer /> */}
    </>
  );
};
