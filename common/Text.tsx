interface TextProps {
  content?: string;
  className?: string;
  children?: React.ReactNode;
}

const Text: React.FC<TextProps> = ({ content, className}) => {
  return (
    <div
      className={`font-nunito text-pale-gray-500 leading-normal text-lg md:text-xl md:leading-relaxed ${className}`}
    >
    {content}
      
    </div>
  );
};

export default Text;
