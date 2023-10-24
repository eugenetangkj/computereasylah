import React, { useState } from "react";
import SafetyPracticOne from "@/components/safety/practice/safety-practice-one";
import SafetyPracticeTwo from "@/components/safety/practice/safety-practice-two";

const SafetyPractice: React.FC = () => {
  const componentsConfig = {
    1: SafetyPracticOne,
    2: SafetyPracticeTwo,
  };

  // Current scene loaded
  const [currentIndex, setCurrentIndex] = useState("1");

  // Function to update scene index
  const updateCurrentIndex = (index: string) => {
    setCurrentIndex(index);
  };

  const DynamicComponent = componentsConfig[currentIndex]; // Directly get the component

  return (
    <div>
      {DynamicComponent && (
        <DynamicComponent updateCurrentIndex={updateCurrentIndex} />
      )}
    </div>
  );
};

export default SafetyPractice;
