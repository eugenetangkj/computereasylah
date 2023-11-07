import NextLink from "next/link";
import { BiHome } from "react-icons/bi";

//Back button
export enum Topic {
  Typing,
  Applications,
  Email,
  Safety,
  Dictionary,
}

type BackButtonProps = {
  pathToReturnTo: string;
  displayText: string;
  category: Topic;
};

export default function BackButton({
  pathToReturnTo,
  displayText,
  category,
}: BackButtonProps) {
  let hoverColour =
    category == Topic.Typing
      ? "hover:text-energy-orange-hover"
      : category == Topic.Applications
      ? "hover:text-creative-pink-hover"
      : category == Topic.Email
      ? "hover:text-trust-blue-hover"
      : category == Topic.Safety
      ? "hover:text-passion-red-hover"
      : category == Topic.Dictionary
      ? "hover:text-wisdom-purple-hover"
      : "hover:text-black";

  return (
    <div className={`flex justify-center items-center fixed w-full top-0 left-0 py-4 z-30 md:pt-8 bg-neutral-100 text-center`}>
  <div className="grid grid-cols-3 w-4/5">
    {/* Back button */}
    <NextLink href={pathToReturnTo} className="text-center">
      <h5 className={`font-nunito text-2xl lg:text-4xl font-bold ${hoverColour} duration-300`}>
        {displayText}
      </h5>
    </NextLink>

    {/* Home button */}
    <NextLink href="/" className="text-center">
      <h5 className={`font-nunito text-2xl lg:text-4xl font-bold ${hoverColour} duration-300`}>Home</h5>
    </NextLink>

    {/* Dictionary button */}
    <NextLink href="/dictionary" className="text-center">
      <h5 className={`font-nunito text-2xl lg:text-4xl font-bold ${hoverColour} duration-300`}>Dictionary</h5>
    </NextLink>
  </div>
</div>
    
  );
}
