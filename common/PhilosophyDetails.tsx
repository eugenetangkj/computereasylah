type PhilosophyDetailsProps = {
    title: string;
    text: string;
    imageSrc: any;
    imageAlt: string;
  }
  
export const PhilosophyDetails = ({ title, text, imageSrc, imageAlt }: PhilosophyDetailsProps) => {
return (
    <div className="flex flex-col space-y-2 lg:flex-row justify-center items-center lg:mx-28 lg:space-x-16">
        {/* Philosophy image and title */}
        <img
            src={imageSrc}
            alt={imageAlt}
            className="mx-auto self-center sm:mr-16 sm:ml-0"
            style={{ height: "75px", width: "75px" }}
        />
        {/* Philosophy details */}
        <div className="flex flex-col justify-center mx-2 lg:items-start">
            <p className="font-gaegu font-bold text-3xl sm:text-4xl py-4">{title}</p>
            <p className="font-nunito text-lg md:text-xl self-center mb-8">
                {text}
            </p>
        </div>
    </div>
 
);
};