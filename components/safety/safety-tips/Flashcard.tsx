import React, { ReactNode } from "react";
import { IoIosReturnRight } from "react-icons/io";

export type FlashcardProps = {
  Back: ReactNode;
  disabled?: boolean;
  Front: ReactNode;
  imageUrl?: string;
  flipped: boolean;
  setFlipped: React.Dispatch<React.SetStateAction<boolean>>;
};

const Flashcard = ({
  Back,
  disabled = false,
  Front,
  imageUrl,
  flipped,
  setFlipped,
}: FlashcardProps): JSX.Element => {
  const handleClick = () => {
    const newFlipped = !flipped;
    setFlipped(newFlipped);
  };

  const cardStyle: React.CSSProperties = {
    width: "500px",
    height: "600px",
    perspective: 1000,
    padding: 0,
    margin: 0,
    border: 0,
    cursor: "pointer",
    transform: `rotateY(${flipped ? 180 : 0}deg)`,
    transformStyle: "preserve-3d",
    transition: "transform 0.5s ease",
    outline: "none",
    display: "flex",
    flexDirection: "column",
  };

  const contentStyle: React.CSSProperties = {
    transform: `rotateY(${flipped ? -180 : 0}deg)`,
    flexGrow: 1,
  };

  return (
    <div
      className={`relative w-64 bg-blue-100 rounded-md shadow-md p-4 justify-center items-center ${
        disabled ? "bg-opacity-25 cursor-not-allowed" : "cursor-pointer"
      } transform ${
        flipped ? "rotate-y-180" : "rotate-y-0"
      } transition-transform duration-500`}
      style={cardStyle}
      onClick={handleClick}
    >
      <IoIosReturnRight className="m-4 top-10 w-4 h-4" />
      {imageUrl && !flipped && (
        <img
          src={imageUrl}
          alt="card image"
          className="m-4 w-11/12 h-1/2 object-contain rounded-md shadow-md"
        />
      )}
      <div
        className="border-2 border-gray-300 p-2 m-4 w-11/12 h-1/6 flex flex-col justify-center items-center"
        style={contentStyle}
      >
        {flipped ? Back : Front}
      </div>
    </div>
  );
};

export default Flashcard;
