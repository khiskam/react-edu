import { Col } from "antd";
import styled from "styled-components";

export const Container = styled(Col)`
  padding: ${({ theme }) => theme.token?.paddingLG}px;

  border: 1px solid ${({ theme }) => theme.token?.colorBorder};

  border-radius: ${({ theme }) => theme.token?.borderRadius}px;
`;
