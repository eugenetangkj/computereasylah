interface TitleProps {
  text: any;
  className?: string;
}

const Title: React.FC<TitleProps> = ({ text, className }) => {
  return (
    <div className={`font-gaegu font-bold text-4xl sm:text-5xl md:text-6xl ${className}`}>
      {text}
    </div>
  );
};

export default Title;
