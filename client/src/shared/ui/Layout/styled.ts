import { Layout } from "antd";
import styled from "styled-components";

export const Container = styled(Layout)`
  display: flex;
  min-height: 100vh;

  flex-direction: column;
`;

export const OutletContainer = styled.div`
  flex-grow: 1;
`;
