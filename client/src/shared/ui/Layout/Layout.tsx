import { Layout as AntdLayout } from "antd";
import { Outlet } from "react-router-dom";
import { Header } from "src/components";
import { Footer } from "src/components";
import { layoutStyles, outletContainerStyles } from "./styled";

export const Layout = () => {
  return (
    <AntdLayout className={layoutStyles}>
      <Header />
      <div className={outletContainerStyles}>
        <Outlet />
      </div>
      <Footer />
    </AntdLayout>
  );
};
