import React, { useContext } from 'react';
import Controls from "../components/controls/Controls";
import { Form } from '../components/useForm';
import { multiStepContext } from '../StepContext';

export default function ExperienceDetails() {
  const { setStep, values, errors, handleInputChange, submitData } = useContext(multiStepContext);
  return (
    <div>
      <Form>
        <div>
          <Controls.Input
            name="company"
            label="Company"
            value={values.company}
            onChange={handleInputChange}
            error={errors.company}
          />
        </div>

        <div>
        <Controls.DatePicker
            name="fromDate"
            label="From Date"
            value={values.fromDate}
            onChange={handleInputChange}
        />
        </div>
        <div>
        <Controls.DatePicker
            name="toDate"
            label="To Date"
            value={values.toDate}
            onChange={handleInputChange}
        />
        </div>
        <div>
          <Controls.Input
            name="role"
            label="Role"
            value={values.role}
            onChange={handleInputChange}
            error={errors.role}
          />
        </div>
        <div>
          <Controls.Button
            type="back"
            text="Back"
            onClick={() => setStep(2)}
            color="secondary" /> <span></span>

          <Controls.Button
            type="submit"
            text="Submit"
            onClick={submitData} />

        </div>
      </Form>
    </div>
  )
}
