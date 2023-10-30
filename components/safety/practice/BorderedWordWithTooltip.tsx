import React, { useState } from "react";

const BorderedWordWithTooltip: React.FC<{
  word: string;
  wordClassName: string;
  tooltipContent: string;
  isWordClicked: boolean;
  handleWordClicked: () => void;
}> = ({ word, wordClassName, tooltipContent, isWordClicked, handleWordClicked }) => {
  const [isTooltipOpen, setTooltipOpen] = useState(false);

  const toggleTooltip = () => {
    if (!isWordClicked) {
      handleWordClicked();
    }
    setTooltipOpen(!isTooltipOpen);
  };

  return (
    <span className="relative inline">
      <span
        className={`cursor-pointer ${wordClassName} ${
          isTooltipOpen
            ? "border-4 rounded-lg border-red-500 p-1 leading-loose"
            : isWordClicked
            ? "border-4 rounded-lg p-1 leading-loose"
            : ""
        }`}
        onClick={toggleTooltip}
      >
        {word}
      </span>
      {isTooltipOpen && (
        <div className="absolute z-10 left-0 mt-4 p-2 bg-blue-300 border-4 border-blue-500 rounded-lg text-xl">
          <div>{tooltipContent}</div>
          <div
            className="text-red-500 cursor-pointer text-xl font-semibold mt-2"
            onClick={toggleTooltip}
          >
            Close
          </div>
        </div>
      )}
    </span>
  );
};

export default BorderedWordWithTooltip;
