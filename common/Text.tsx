interface TextProps {
  content: string;
  className?: string;
}

const Text: React.FC<TextProps> = ({ content, className }) => {
  return <p className={`text-xl text-dark-gray  ${className}`}>{content}</p>;
};

export default Text;
