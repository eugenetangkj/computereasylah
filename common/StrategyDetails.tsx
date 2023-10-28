import Title from "./Title";
import Text from "./Text";


interface StrategyDetailsProps {
    title: string;
    subtitle: string;
    text: string;
    imageSrc: any;
    imageAlt: string;
}
  
export const StrategyDetails: React.FC<StrategyDetailsProps> = ({
title,
subtitle,
text,
imageSrc,
imageAlt,
}) => {
return (
    <div className=" flex flex-col mb-12 space-y-8">
        {/* Text content */}
        <div className="text-left space-y-4">
            <Title text={title} />
            <Text content={subtitle} className="text-blue-600 font-bold" />
            <Text content={text}/>
        </div>
        {/* Image content */}
        <div>
            <img
            src={imageSrc}
            alt={imageAlt}
            className="w-auto md:w-4/5 lg:w-2/3 xl:w-1/2" />
        </div>

    </div>
);
};