interface TitleProps {
  text: any;
  className?: string;
}

const Title: React.FC<TitleProps> = ({ text, className }) => {
  return (
    <div className={`font-nunito font-bold text-3xl sm:text-4xl lg:text-4xl ${className}`}>
      {text}
    </div>
  );
};

export default Title;
