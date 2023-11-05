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
    <div
      className={`fixed w-full top-0 left-0 py-2 z-20 pl-8 pt-8 md:pl-16 md:pt-8 bg-white`}
    >
      <div className="flex flex-row items-center justify-between">
        {/* Back button */}
        <NextLink href={pathToReturnTo} className="">
          <h5
            className={`font-nunito text-2xl lg:text-4xl font-bold ${hoverColour} duration-300`}
            style={{ display: "inline-block", width: "5%", height: "100%" }}
          >
            {displayText}
          </h5>
        </NextLink>
        {/* Home button */}
        <NextLink href="/playground" className="">
          <BiHome
            className={`${hoverColour} inline-block text-4xl lg:text-5xl duration-300 z-50`}
          />
        </NextLink>
        {/* Empty div to fill up space so that home button is at center */}
        <div></div>
      </div>
    </div>
  );
}
