import React from 'react';
import 'survey-react/survey.css';
import * as Survey from 'survey-react';
import { json } from '../surveys/QuestionOne';

const MySurvey = (prop) => (
  <Survey.Survey
    showCompletedPage={false}
    onComplete={(data) => prop.showCompletedPage(data.valuesHash)}
    json={json}
  />
);

export default MySurvey;
