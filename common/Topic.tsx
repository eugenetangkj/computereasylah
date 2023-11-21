interface TopicProps {
  title: string;
  content: string;
  color: string;
}

export const Topic: React.FC<TopicProps> = ({ title, content, color }) => {
  return (
    <div
      className={`border-2 border-${color} rounded-3xl space-y-4 flex flex-col justify-center`}
      style={{ width: "300px", height: "200px" }}
    >
      <div className="font-gaegu font-bold text-4xl">{title}</div>
      <h5 className="font-nunito leading-normal font-semibold lg:text-xl lg:leading-relaxed">
        {content}
      </h5>
    </div>
  );
};
