import styled from "@emotion/styled";
import { SPACE } from "src/shared/theme";

export const FormContainer = styled.div`
  display: grid;
  padding: ${({ theme }) => theme.paddingXL}px;
  width: 40%;

  border: 1px solid ${({ theme }) => theme.colorBorder};

  border-radius: ${({ theme }) => theme.borderRadius}px;
  gap: ${SPACE.gap12}px;

  @media screen and (max-width: ${({ theme }) => theme.screenXL}px) {
    width: 60%;
  }

  @media screen and (max-width: ${({ theme }) => theme.screenMD}px) {
    width: 100%;
  }
`;
