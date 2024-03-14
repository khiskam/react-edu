import { Link } from "react-router-dom";
import styled from "styled-components";

export const Logo = styled(Link)`
  flex: 1;

  font-weight: 500;
  word-break: keep-all;

  color: ${({ theme }) => theme.token?.colorPrimary};
`;
