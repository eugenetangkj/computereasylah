import React from "react";
import Menu from "./menu";
import Statistics from "./statistics";
import Game from "./game";
// import Image from 'next/image';
// import pic from '@/assets/chickenricestall.png';
import { getStoryScenesFromString } from "./story-data";
import { StoryScenes } from "./story-data";

interface TypingRandomiseUIProps {
  chosenStory: string;
}

// This component loads the story data and randomises the order before presenting it to the Game component
// It is used for the Learn feature for Typing
// It is also used for the Practice feature for Typing
const TypingRandomiseUI: React.FC<TypingRandomiseUIProps> = (chosenStory) => {
  const storyData: StoryScenes = {
    scenes: getStoryScenesFromString(chosenStory.chosenStory)
      .scenes.map((value) => ({ value, sort: Math.random() }))
      .sort((a, b) => a.sort - b.sort)
      .map(({ value }) => value),
  };
  return (
    <div className="flex flex-col justify-center items-center bg-slate-100 max-h-full max-w-full">
      {/* <Menu /> */}

      <Game storyData={storyData} />
      {/* <Statistics /> */}

      {/* <Image src={pic} alt='Chicken Rice Stall' className='w-1/2' /> */}
    </div>
  );
};

export default TypingRandomiseUI;
