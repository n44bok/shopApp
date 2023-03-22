import React from 'react';
import { useLocation } from 'react-router-dom';

const Stepper = ({ activeStep }) => {
  const location = useLocation();

  return (
    <div className="stepper">
      <div className={`step ${activeStep === 1 ? 'active' : ''}`} onClick={() => location('/')}>
        <span></span>
      </div>
      <div className={`step ${activeStep === 2 ? 'active' : ''}`} onClick={() => location('/getStarted2')}>
        <span></span>
      </div>
      <div className={`step ${activeStep === 3 ? 'active' : ''}`} onClick={() => location('/getStarted3')}>
        <span></span>
      </div>
    </div>
  );
};

export default Stepper


