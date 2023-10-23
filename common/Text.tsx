interface TextProps {
  content?: string;
  className?: string;
  children?: React.ReactNode;
}

const Text: React.FC<TextProps> = ({ content, className, children }) => {
  return (
    <div className={`text-base text-dark-gray sm:text-md md:text-xl ${className}`}>
      {content}
      {children}
    </div>
  );
};

export default Text;
