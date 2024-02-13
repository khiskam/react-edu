import { css } from "@linaria/core";

export const globals = css`
  :global() {
    *,
    *:before,
    *:after {
      margin: 0;
      padding: 0;
      box-sizing: border-box;

      font-family: "Montserrat Alternates";
    }

    @font-face {
      font-family: "Montserrat Alternates";
      font-weight: 400;
      font-style: normal;
      src: url("../fonts/MontserratAlternates-Regular.ttf") format("truetype");
    }
  }
`;
