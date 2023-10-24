import NextLink from "next/link";

//Back button
export enum Topic {
  Typing,
  Applications,
  Email,
  Safety,
  Dictionary

}


type BackButtonProps = {
  pathToReturnTo: string;
  displayText: string;
<<<<<<< HEAD
  category: Topic;
};



export default function BackButton({ pathToReturnTo, displayText, category }: BackButtonProps) {
  let hoverColour = (category == Topic.Typing)
                    ? 'hover:text-energy-orange-hover'
                    : (category == Topic.Applications)
                    ? 'hover:text-creative-pink-hover'
                    : (category == Topic.Email)
                    ? 'hover:text-trust-blue-hover'
                    : (category == Topic.Safety)
                    ? 'hover:text-passion-red-hover'
                    : (category == Topic.Dictionary)
                    ? 'hover:text-wisdom-purple-hover'
                    : 'hover:text-black'

=======
  themeColor?: string;
};

export default function BackButton({
  pathToReturnTo,
  displayText,
  themeColor = "trust-blue",
}: BackButtonProps) {
>>>>>>> 1507f87b6b2c4683c2875d09df7a6c13cdb6e631
  return (
    <div
      className={`fixed w-full bg-white top-0 left-0 py-2 z-20 pl-8 pt-8 md:pl-16 md:pt-8`}
    >
      {/* Back button */}
      <NextLink href={pathToReturnTo} className="">
        <h5
<<<<<<< HEAD
          className={`font-nunito text-2xl lg:text-4xl font-bold ${hoverColour} duration-300`}
=======
          className={`font-nunito text-2xl lg:text-4xl font-bold hover:text-${themeColor}-hover duration-300`}
>>>>>>> 1507f87b6b2c4683c2875d09df7a6c13cdb6e631
          style={{ display: "inline-block", width: "5%", height: "100%" }}
        >
          {displayText}
        </h5>
      </NextLink>
    </div>
  );
}
