import React from 'react';
import 'survey-react/survey.css';
import * as Survey from 'survey-react';
import { json } from '../surveys/QuestionTwo';

const MySurvey = (prop) => (
  <Survey.Survey
    showCompletedPage={true}
    onComplete={(data) => prop.showCompletedPage(data.valuesHash)}
    json={json}
  />
);

export default MySurvey;
