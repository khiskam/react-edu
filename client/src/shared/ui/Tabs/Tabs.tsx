import { Tabs as AntdTabs, TabsProps } from "antd";

import { tabsContainerStyles } from "./styled";

export const Tabs = ({ ...props }: TabsProps) => {
  return (
    <div className={tabsContainerStyles}>
      <AntdTabs {...props} />
    </div>
  );
};
