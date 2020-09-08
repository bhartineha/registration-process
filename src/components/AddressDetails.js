import React, { useContext } from 'react';
import { Grid, } from '@material-ui/core';
import { Form } from '../components/useForm';
import Controls from "../components/controls/Controls";
import { multiStepContext } from '../StepContext';


export default function AddressDetails() {
  const { setStep, values, errors, handleInputChange } = useContext(multiStepContext);
  return (
    <div>
      <Form >
        <Grid container>

          <Grid item xs={6}>
            <div>
              <Controls.Input
                name="curAddress"
                label="Current Address"
                value={values.curAddress}
                onChange={handleInputChange}
                error={errors.curAddress}
              />
            </div>

            <div>
              <Controls.Input
                name="curCity"
                label="City"
                value={values.curCity}
                onChange={handleInputChange}
                error={errors.curCity}
              />
            </div>

            <div>
              <Controls.Input
                name="curState"
                label="State"
                value={values.curState}
                onChange={handleInputChange}
                error={errors.curState}
              />
            </div>

            <div>
              <Controls.Input
                name="curCountry"
                label="Country"
                value={values.curCountry}
                onChange={handleInputChange}
                error={errors.curCountry}
              />
            </div>

            <div>
              <Controls.Input
                name="curPincode"
                label="Pincode"
                value={values.curPincode}
                onChange={handleInputChange}
                error={errors.curPincode}
              />
            </div>
          </Grid>


          <Grid item xs={6}>
            <div>
              <Controls.Input
                name="perAddress"
                label="Permanent Address"
                value={values.perAddress}
                onChange={handleInputChange}
                error={errors.perAddress}
              />
            </div>

            <div>
              <Controls.Input
                name="perCity"
                label="City"
                value={values.perCity}
                onChange={handleInputChange}
                error={errors.perCity}
              />
            </div>

            <div>
              <Controls.Input
                name="perState"
                label="State"
                value={values.perState}
                onChange={handleInputChange}
                error={errors.perState}
              />
            </div>

            <div>
              <Controls.Input
                name="perCountry"
                label="Country"
                value={values.perCountry}
                onChange={handleInputChange}
                error={errors.perCountry}
              />
            </div>

            <div>
              <Controls.Input
                name="perPincode"
                label="Pincode"
                value={values.perPincode}
                onChange={handleInputChange}
                error={errors.perPincode}
              />
            </div>
          </Grid>
        </Grid>

        <div>
          <Controls.Button
            type="back"
            text="Back"
            onClick={() => setStep(1)}
            color="secondary" /> <span></span>

          <Controls.Button
            type="next"
            text="Next"
            onClick={() => setStep(3)} />
        </div>
      </Form>
    </div>
  )
}
