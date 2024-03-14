import { Layout, Menu as AntdMenu } from "antd";
import styled from "styled-components";

const { Header: AntdHeader } = Layout;

export const Header = styled(AntdHeader)`
  border-bottom: 1px solid ${({ theme }) => theme.token?.colorBorder};
`;

export const Menu = styled(AntdMenu)`
  flex: 1;
  justify-content: end;
  min-width: 0;

  border-bottom: none;
`;
