import React from 'react';

export interface LevelOption {
    label: string;
    id: string;
    imageSrc: string;
}


interface LevelSelectionProps {
    options: LevelOption[];
    onOptionSelect: (index: number) => void;
    onBackClick: () => void;
}

const LevelSelection: React.FC<LevelSelectionProps> = ({
    options,
    onOptionSelect,
    onBackClick,
}) => {
    return (
        <div className="flex flex-col h-full">
            <div className="flex items-center justify-between px-4 py-2 bg-gray-200">
                <button onClick={onBackClick} className="font-gaegu font-bold text-blue-600">Back</button>
                <h1>Select a Level</h1>
                <div></div>
            </div>
            <div className="h-screen flex items-center justify-center">
                <div className="flex flex-1 justify-center items-center">
                    {options.map((option, index) => (
                        <div
                            key={index}
                            className="flex flex-col items-center justify-center mx-4"
                            onClick={() => onOptionSelect(index)}
                        >
                            {/* FIX IMAGE SIZE */}
                            <img alt={option.id} src={option.imageSrc} className="object-cover w-1/5 h-1/2" />
                            <span className="mt-2 font-gaegu">{option.label}</span>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default LevelSelection;
