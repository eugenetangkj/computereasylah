import Modal from "@/common/Modal";
import React, { useState } from "react";
interface ExplanationModalProps {
  word: string;
  content: string;
  isOpen: boolean;
  handleCloseModal: () => void;
}

const ExplanationModal: React.FC<ExplanationModalProps> = ({
  word,
  content,
  isOpen,
  handleCloseModal,
}) => {
  return (
    <>
      <Modal isOpen={isOpen} onClose={handleCloseModal}>
        <div className="font-nunito mt-4 text-center">
          <div className="italic">&ldquo;{word}&rdquo;</div>
          <br />
          <div className="text-lg sm:text-xl">{content}</div>
          <br />
          <button
            className="bg-trust-blue-900 hover:bg-trust-blue-hover rounded-full font-semibold text-lg sm:text-xl h-12 w-28 sm:h-14 sm:w-32 cursor-pointer"
            onClick={handleCloseModal}
          >
            I see!
          </button>
        </div>
      </Modal>
    </>
  );
};
const BorderedWordWithModal: React.FC<{
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
      <ExplanationModal
        word={word}
        content={tooltipContent}
        handleCloseModal={toggleTooltip}
        isOpen={isTooltipOpen}
      />
      <span
        className={`cursor-pointer ${wordClassName} ${
          isWordClicked
            ? "border-b-4 border-question-wrong sm:border-4 sm:border-dashed sm:border-pale-gray-100 sm:rounded-lg sm:p-1 sm:leading-loose hover:border-solid hover:border-question-correct"
            : ""
        }`}
        onClick={toggleTooltip}
      >
        {word}
      </span>
    </span>
  );
};

export default BorderedWordWithModal;
