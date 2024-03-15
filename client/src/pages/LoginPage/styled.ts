import { css } from "@emotion/css";
import styled from "@emotion/styled";

export const Layout = styled.section`
  align-content: center;
  display: grid;
  justify-items: center;
  padding: 96px 0;
`;

export const FormContainer = styled.div`
  display: grid;
  padding: ${({ theme }) => theme.paddingXL}px;
  width: 40%;

  border: 1px solid ${({ theme }) => theme.colorBorder};

  border-radius: ${({ theme }) => theme.borderRadius}px;
  gap: ${({ theme }) => theme.marginSM}px;

  @media screen and (max-width: ${({ theme }) => theme.screenXL}px) {
    width: 60%;
  }

  @media screen and (max-width: ${({ theme }) => theme.screenMD}px) {
    width: 100%;
  }
`;

export const inputStyles = css`
  width: 100%;
`;
