import React, { useContext } from 'react';
import { Form } from '../components/useForm';
import Controls from "../components/controls/Controls";
import { multiStepContext } from '../StepContext';


export default function PersonalDetails() {

  const { setStep, values, errors, handleInputChange } = useContext(multiStepContext);
  return (
    <div>
      <Form >
        <div>
          <Controls.Input
            name="firstName"
            label="First Name"
            value={values.firstName}
            onChange={handleInputChange}
            error={errors.firstName}
          />
        </div>

        <div>
          <Controls.Input
            name="lastName"
            label="Last Name"
            value={values.lastName}
            onChange={handleInputChange}
            error={errors.lastName}
          />
        </div>

        <div>
          <Controls.Input
            name="contact"
            label="Contact"
            // inputProps={{
            //   maxLength: 10
            // }}
            value={values.contact}
            onChange={handleInputChange}
            error={errors.contact}
          />
        </div>

        <div>
          <Controls.Input
            name="email"
            label="Email"
            value={values.email}
            onChange={handleInputChange}
            error={errors.email}
          />
        </div>
        
        <Controls.Button
          type="next"
          text="Next"
          onClick={() => setStep(2)} />
        
      </Form>
    </div>
  )
}
