import SafetyPracticOne from "@/components/safety/practice/safety-practice-one";
import SafetyPracticeTwo from "@/components/safety/practice/safety-practice-two";
import Head from "next/head";
import React, { useState } from "react";
const SafetyPractice: React.FC = () => {
  interface ComponentsConfig {
    [key: number]: React.FC<any>;
  }

  const componentsConfig: ComponentsConfig = {
    1: SafetyPracticOne,
    2: SafetyPracticeTwo,
  };

  // Current scene loaded
  const [currentIndex, setCurrentIndex] = useState<number>(1);

  // Function to update scene index
  const updateCurrentIndex = (index: number) => {
    setCurrentIndex(index);
  };

  const DynamicComponent = componentsConfig[currentIndex]; // Directly get the component

  return (
    <div>
      <Head>
        <title>Playground - Safety Practice</title>
      </Head>
      <div>
        {DynamicComponent && (
          <DynamicComponent updateCurrentIndex={updateCurrentIndex} />
        )}
      </div>
    </div>
  );
};

export default SafetyPractice;
