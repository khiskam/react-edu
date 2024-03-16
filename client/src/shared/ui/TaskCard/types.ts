export type TaskCardProps = {
  data: { id: number; title: string; descr: string };
  onClick?: React.MouseEventHandler<HTMLDivElement>;
};
