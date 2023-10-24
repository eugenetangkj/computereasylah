import React from 'react';

interface StatisticsProps {
    accuracy: number;
    wpm: number;
}

// This is currently unused
const Statistics: React.FC<StatisticsProps> = ({ accuracy, wpm }) => {
    return (
        <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', backgroundColor: '#f0f0f0', padding: '8px' }}>
            <div style={{ display: 'flex', alignItems: 'center' }}>
                <img src="/path/to/accuracy/image" alt="Accuracy" style={{ marginRight: '8px' }} />
                <span>Accuracy: {accuracy}%</span>
            </div>
            <div style={{ display: 'flex', alignItems: 'center' }}>
                <img src="/path/to/wpm/image" alt="WPM" style={{ marginRight: '8px' }} />
                <span>WPM: {wpm}</span>
            </div>
        </div>
    );
};

export default Statistics;
