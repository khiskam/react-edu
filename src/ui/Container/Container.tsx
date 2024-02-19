import { HTMLAttributes } from "react";
import { containerStyles } from "./styles";
import { cx } from "@linaria/core";

export const Container = ({
  children,
  ...props
}: HTMLAttributes<HTMLDivElement>) => {
  const { className } = props;

  return (
    <div {...props} className={cx(containerStyles, className)}>
      {children}
    </div>
  );
};
