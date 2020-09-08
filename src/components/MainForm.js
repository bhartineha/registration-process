import React, { useContext } from 'react';
import PersonalDetails from './PersonalDetails';
import AddressDetails from './AddressDetails';
import ExperienceDetails from './ExperienceDetails';
// import Sucess from './Sucess';
import { Stepper, StepLabel, Step } from '@material-ui/core';
import { multiStepContext } from '../StepContext';
import ListItems from './ListItems';

export default function MainForm() {

    const { currentStep, finalData } = useContext(multiStepContext);
    function showStep(step) {
        switch(step) {
            case 1:
                return <PersonalDetails/>
            case 2:
                return <AddressDetails/>
            case 3:
                return <ExperienceDetails/>
        }
    }
    return (
        <div> 
         
          <h3 style={{color:'#3f51b5', textDecoration:'underline'}}>Registration Process</h3>
          <div className="center-stepper">
          <Stepper activeStep={currentStep - 1} orientation="horizontal">
              <Step>
                  <StepLabel></StepLabel>
              </Step>
              <Step>
                  <StepLabel></StepLabel>
              </Step>
              <Step>
                  <StepLabel></StepLabel>
              </Step>
          </Stepper>
          </div>
          {showStep(currentStep)}
          <br/>
          {finalData.length > 0 ? <ListItems /> : ''}
        </div>
    )
}

