import { HTMLAttributes } from "react";
import { titleStyles } from "./styles";

export const Title = ({
  children,
  ...props
}: HTMLAttributes<HTMLHeadingElement>) => {
  return (
    <h2 {...props} className={titleStyles}>
      {children}
    </h2>
  );
};
