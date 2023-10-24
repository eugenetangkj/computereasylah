import React, { useState } from "react";

const BorderedWordWithTooltip: React.FC<{
  word: string;
  wordClassName: string;
  tooltipContent: string;
  handleWordClicked: () => void;
}> = ({ word, wordClassName, tooltipContent, handleWordClicked }) => {
  const [isTooltipOpen, setTooltipOpen] = useState(false);
  const [hasClicked, setHasClicked] = useState(false);

  const toggleTooltip = () => {
    if (!hasClicked) {
      handleWordClicked();
      setHasClicked(true);
    }
    setTooltipOpen(!isTooltipOpen);
  };

  return (
    <div className="relative inline-block">
      <button
        className={`cursor-pointer ${wordClassName} ${
          isTooltipOpen
            ? "border-4 rounded-lg border-red-500 p-1 "
            : hasClicked
            ? "border-4 rounded-lg p-1"
            : ""
        }`}
        onClick={toggleTooltip}
      >
        {word}
      </button>
      {isTooltipOpen && (
        <div className="absolute z-10 left-0 mt-4 p-2 bg-gray-200 border border-gray-400 rounded-lg">
          <div>{tooltipContent}</div>
          <button
            className="text-red-500 cursor-pointer"
            onClick={toggleTooltip}
          >
            Close
          </button>
        </div>
      )}
    </div>
  );
};

export default BorderedWordWithTooltip;
