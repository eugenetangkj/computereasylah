interface TitleProps {
  text: any;
  className?: string;
}

const Title: React.FC<TitleProps> = ({ text, className }) => {
  return (
    <div className={`text-3xl font-bold ${className} sm:text-4xl md:text-5xl`}>
      {text}
    </div>
  );
};

export default Title;
