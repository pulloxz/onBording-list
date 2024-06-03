import React, { useState } from 'react';
import '/Users/fatimamuhammed/Desktop/puretik tasks/task2/task2react/src/qicktour.css'; 

const QuickTour = () => {
    const [steps, setSteps] = useState([
      { id: 1, text: 'Experience contextual conversations', completed: true },
      { id: 2, text: 'Brand your customer experience', completed: true },
      { id: 3, text: 'Offer support beyond your website', completed: false },
      { id: 4, text: 'Top customer support with bots', completed: false },
      { id: 5, text: 'Build your team', completed: false }
    ]);
  
    const completedSteps = steps.filter(step => step.completed).length;
    const progressPercentage = (completedSteps / steps.length) * 100;
  
    const toggleStep = (id) => {
      setSteps(
        steps.map(step => step.id === id ? { ...step, completed: !step.completed } : step)
      );
    };
  
    return (
      <div className="quick-tour-container">
        <div className="quick-tour">
          <h2>Take a quick tour</h2>
          <p>Here are a few steps to help you hit the ground.</p>
          <div className="progress-bar">
            <div className="progress" style={{ width: `${progressPercentage}%` }}>
              <span className="progress-text">{progressPercentage}%</span>
            </div>
          </div>
          <ul className="steps-list">
            {steps.map(step => (
              <li key={step.id} className={step.completed ? 'completed' : ''}>
                <label>
                  <input
                    type="checkbox"
                    checked={step.completed}
                    onChange={() => toggleStep(step.id)}
                  />
                  <span></span>
                  {step.text}
                </label>
              </li>
            ))}
          </ul>
          <button className="skip-btn">Skip this</button>
        </div>
        <button className="get-started-btn">Get started <span>5</span></button>
      </div>
    );
  };
  
  export default QuickTour;