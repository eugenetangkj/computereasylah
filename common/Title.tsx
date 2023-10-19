interface TitleProps {
  text: string;
  className?: string;
}

const Title: React.FC<TitleProps> = ({ text, className }) => {
  return <p className={`text-4xl font-semibold text-dark-blue ${className}`}>{text}</p>;
};

export default Title;
