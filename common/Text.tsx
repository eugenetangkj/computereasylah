interface TextProps {
  content?: string;
  className?: string;
  children?: React.ReactNode;
}

const Text: React.FC<TextProps> = ({ content, className}) => {
  return (
    <div
      className={`font-nunito leading-normal md:text-xl md:leading-relaxed ${className}`}
    >
    {content}
      
    </div>
  );
};

export default Text;
