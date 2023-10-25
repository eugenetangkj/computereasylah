import React, { useState } from "react";

const BorderedhintWithTooltip: React.FC<{
  hint: string;
  hintClassName: string;
  tooltipContent: Array<any>;
  handleRevealClicked: () => void;
}> = ({ hint, hintClassName, tooltipContent, handleRevealClicked }) => {
  const [isTooltipOpen, setTooltipOpen] = useState(false);
  const [hasClicked, setHasClicked] = useState(false);

  const toggleTooltip = () => {
    if (!hasClicked) {
      setHasClicked(true);
    }
    setTooltipOpen(!isTooltipOpen);
  };

  return (
    <span className="relative inline">
      <span
        className={`cursor-pointer ${hintClassName}`}
        onClick={toggleTooltip}
      >
        {hint}
      </span>
      {isTooltipOpen && (
        <div className="absolute z-10 left-0 mt-4 p-2 bg-blue-300 border-4 border-blue-500 rounded-lg text-xl">
          <div className="flex mr-4" dir="rtl">
            <div
              className="text-red-500 cursor-pointer text-xl font-semibold mt-2 mb-4"
              onClick={toggleTooltip}
            >
              Close
            </div>
          </div>
          {tooltipContent.map((hint) => (
            <div className="whitespace-nowrap">
              <div
                className={`text-left ${
                  hint.count == hint.total ? "text-gray-300 line-through" : ""
                }`}
              >
                {hint.hint}
              </div>
              <div className="">
                ({hint.count} / {hint.total})
              </div>
            </div>
          ))}
          <div className="flex items-center justify-center">
            <div
              className="bg-white border-solid border-4 rounded-full h-16 w-40 mt-10 hover:bg-green-500 border-green-500 items-center justify-center flex text-black"
              onClick={handleRevealClicked}
            >
              Reveal Answers
            </div>
          </div>
        </div>
      )}
    </span>
  );
};

export default BorderedhintWithTooltip;
