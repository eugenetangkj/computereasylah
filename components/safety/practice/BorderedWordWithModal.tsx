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
            className="bg-trust-blue-900 hover:bg-trust-blue-hover rounded-full font-semibold text-lg sm:text-xl h-12 w-28 sm:h-14 sm:w-32 cursor-pointer duration-300"
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
  modalContent: string;
  isWordClicked: boolean;
  handleWordClicked: () => void;
  phishyCount: number;
  isContinueToRead: boolean;
  openCongratulationsModal: () => void;
}> = ({ word, wordClassName, modalContent, isWordClicked, handleWordClicked, phishyCount, isContinueToRead, openCongratulationsModal }) => {
  const [isModalOpen, setModalOpen] = useState(false);

  const toggleModal = () => {
    if (!isWordClicked) {
      handleWordClicked();
    }
    setModalOpen(!isModalOpen);
  };

  const closeModal = () => {
    setModalOpen(false);
    // Only display congratulations modal when user has clicked on 5 phishy words and close the explanation modal
    if (phishyCount === 5 && !isContinueToRead) {
      openCongratulationsModal();
    }
  };

  return (
    <span className="relative inline">
      <ExplanationModal
        word={word}
        content={modalContent}
        handleCloseModal={closeModal}
        isOpen={isModalOpen}
      />
      <span
        className={`cursor-pointer ${wordClassName} ${
          isWordClicked
            ? "border-b-4 border-question-wrong sm:border-4 sm:border-dashed sm:border-pale-gray-100 sm:rounded-lg sm:p-1 sm:leading-loose hover:border-solid hover:border-question-correct"
            : ""
        }`}
        onClick={toggleModal}
      >
        {word}
      </span>
    </span>
  );
};

export default BorderedWordWithModal;
