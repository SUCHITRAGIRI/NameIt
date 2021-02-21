import React from 'react';
import NameCard from '../../NameCard/NameCard';
import './ResultsContainer.css';

const ResultsContainer = ({ suggestedNames }) => {
    const suggestedNamesJsx = suggestedNames.map((suggestedNames) => {
        return <NameCard key={suggestedNames} suggestedNames={suggestedNames} />;
    })
    return (
        <div className="results-containers">
            {suggestedNamesJsx}
        </div>
    );
};

export default ResultsContainer;