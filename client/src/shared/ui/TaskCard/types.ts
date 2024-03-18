export type TaskCardProps = {
  data: {
    id: number;
    title: string;
    descr: string;
    isCompleted: boolean;
    createdAt: Date;
  };
  onClick?: React.MouseEventHandler<HTMLDivElement>;
};
