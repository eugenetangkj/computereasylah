interface TextProps {
  content?: string;
  className?: string;
  children?: React.ReactNode;
}

const Text: React.FC<TextProps> = ({ content, className, children }) => {
  return (
    <div
      className={`font-nunito text-base sm:text-md md:text-xl ${className}`}
    >
      {content}
      {children}
    </div>
  );
};

export default Text;
