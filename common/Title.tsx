interface TitleProps {
  text: string;
  className?: string;
}

const Title: React.FC<TitleProps> = ({ text, className }) => {
  return <p className={`text-4xl font-bold ${className}`}>{text}</p>;
};

export default Title;
