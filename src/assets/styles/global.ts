import { css } from "@linaria/core";

export const globals = css`
  :global() {
    *,
    *:before,
    *:after {
      margin: 0;
      padding: 0;
      box-sizing: border-box;

      font-family: "Montserrat";
    }

    @font-face {
      font-family: "Montserrat";
      font-weight: 400;
      font-style: normal;
      src: url("../fonts/Montserrat-Regular.ttf") format("truetype");
    }

    @font-face {
      font-family: "Montserrat";
      font-weight: 500;
      font-style: normal;
      src: url("../fonts/Montserrat-Medium.ttf") format("truetype");
    }
  }
`;
