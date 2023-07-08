interface DetailProps {
  title: string;
  value: string;
}

export const Detail = ({ title, value }: DetailProps) => {
  return (
    <p className="my-1">
      <span className="font-bold">{title}:</span> {value}
    </p>
  );
};
