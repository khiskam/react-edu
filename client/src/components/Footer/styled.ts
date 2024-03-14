import { Layout } from "antd";
import { HEADER_HEIGHT } from "src/shared/theme";
import styled from "styled-components";

const { Footer: AntdFooter } = Layout;

export const Footer = styled(AntdFooter)`
  align-items: center;
  display: flex;
  height: ${HEADER_HEIGHT}px;

  border-top: 1px solid ${({ theme }) => theme.token?.colorBorder};
`;
