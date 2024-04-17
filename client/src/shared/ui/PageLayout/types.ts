export type Justify = "start" | "center" | "end";
export type Align = "start" | "center" | "end";

export type PageLayoutProps = {
  justify?: Justify;
  align?: Align;
  gap?: number;
};
