import React, { useState } from 'react';
import App from './App';
import { useForm } from './components/useForm';

export const multiStepContext = React.createContext(); 
 const StepContext = () => {
      const [currentStep, setStep] = useState(1);
      const [finalData, setFinalData] = useState([]);
       
      const validate = (fieldValues = values) => {
        let temp = { ...errors }
        if ('firstName' in fieldValues)
            temp.firstName = (/^[a-zA-Z]*$/g.test(fieldValues.firstName)) ? "" : "Invalid characters"     
        if ('lastName' in fieldValues)
            temp.lastName = (/^[a-zA-Z]*$/g.test(fieldValues.lastName)) ? "" : "Invalid characters"
        if ('email' in fieldValues)
            temp.email = (/$^|.+@.+..+/).test(fieldValues.email) ? "" : "Email is not valid."
        if ('contact' in fieldValues)
            temp.contact = fieldValues.contact.length > 9 ? "" : "Minimum 10 numbers required."
        if ('curCity' in fieldValues)
            temp.curCity = (/^[a-zA-Z]*$/g.test(fieldValues.curCity)) ? "" : "Invalid characters"   
        if ('curState' in fieldValues)
            temp.curState = (/^[a-zA-Z]*$/g.test(fieldValues.curState)) ? "" : "Invalid characters"         
        if ('curCountry' in fieldValues)
            temp.curCountry = (/^[a-zA-Z]*$/g.test(fieldValues.curCountry)) ? "" : "Invalid characters"
        if ('perCity' in fieldValues)
            temp.perCity = (/^[a-zA-Z]*$/g.test(fieldValues.perCity)) ? "" : "Invalid characters"  
        if ('perState' in fieldValues)
            temp.perState = (/^[a-zA-Z]*$/g.test(fieldValues.perState)) ? "" : "Invalid characters"    
        if ('perCountry' in fieldValues)
            temp.perCountry = (/^[a-zA-Z]*$/g.test(fieldValues.perCountry)) ? "" : "Invalid characters"  
        if ('company' in fieldValues)
            temp.company = (/^[a-zA-Z]*$/g.test(fieldValues.company)) ? "" : "Invalid characters"     
        if ('role' in fieldValues)
            temp.role = (/^[a-zA-Z]*$/g.test(fieldValues.role)) ? "" : "Invalid characters"          
        if ('curPincode' in fieldValues)
            temp.curPincode = fieldValues.curPincode.length > 5 ? "" : "Minimum 6 numbers required."
        if ('perPincode' in fieldValues)
            temp.perPincode = fieldValues.perPincode.length > 5 ? "" : "Minimum 6 numbers required."
        setErrors({
            ...temp
        })

        if (fieldValues == values)
            return Object.values(temp).every(x => x == "")
    }
    
      const {
        values,
        setValues,
        errors,
        setErrors,
        handleInputChange   
    } = useForm( {} , true, validate);

      function submitData(e) {
          e.preventDefault();
          setFinalData(finalData=>[...finalData, values]);
          setValues('');
          setStep(1);
          alert('Thank you for your Submission');
      }
    return (
        <div>
            <multiStepContext.Provider value={{currentStep, setStep, values, setValues, errors, setErrors, handleInputChange, finalData, setFinalData, useForm, validate, submitData}} >
               <App />
            </multiStepContext.Provider>
        </div>
    )
}
export default StepContext;