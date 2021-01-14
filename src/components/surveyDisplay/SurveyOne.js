import React, { useCallback, useState } from 'react';
import MySurvey from '../surveyTypes/SurveyTypeOne';

const SurveyOne = () => {
  const [showPage, setShowPage] = useState(true);
  const onCompletePage = useCallback(
    (data) => {
      console.log(data);
      setShowPage(!showPage);
    },
    [showPage]
  );
  const setFinalPage = () => {
    return (
      <main>
        <h1>Thank you for completing the survey one!</h1>
      </main>
    );
  };
  return (
    <div>
      {showPage ? (
        <MySurvey showCompletedPage={(data) => onCompletePage(data)} />
      ) : (
        setFinalPage()
      )}
    </div>
  );
};

export default SurveyOne;