import React from 'react';
import SurveyOne from './components/surveyDisplay/SurveyTwo';
import './App.css';

function App() {
  return (
    <div className='App'>
      <header className='App-header'>
        <h1>Random Survey</h1>
      </header>
      <main>
        <div className='survey-wrapper'>
          <SurveyOne />
        </div>
      </main>
    </div>
  );
}

export default App;
