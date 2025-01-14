import * as React from 'react';
import Box from '@mui/material/Box';
import Stepper from '@mui/material/Stepper';
import Step from '@mui/material/Step';
import StepLabel from '@mui/material/StepLabel';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import { useLocation } from 'react-router-dom';
import DeliveryAddressForm from './DeliveryAddressForm';
import OrderSummary from './OrderSummary';

const steps = ['Login', 'Delivery Address', 'Order Summary', 'Payment'];

export default function Checkout() {
  const [activeStep, setActiveStep] = React.useState(0);
  const location = useLocation();
  const querySearch = new URLSearchParams(location.search)

  const step = querySearch.get("step")

  const handleNext = () => {

    setActiveStep((prevActiveStep) => prevActiveStep + 1);
  };

  const handleBack = () => {
    setActiveStep((prevActiveStep) => prevActiveStep - 1);
  };

  return (
    <div className='px-10 lg:px-20'>
      <Box sx={{ width: '100%' }}>
      <Box sx={{ overflow: 'auto', whiteSpace: 'nowrap', width: '100%' }}>
  <Stepper activeStep={step}>
    {steps.map((label, index) => {
      const stepProps = {};
      const labelProps = {};

      return (
        <Step key={label} {...stepProps}>
          <StepLabel
            {...labelProps}
            sx={{
              "& .MuiStepIcon-root": {
                color: "#5b2338", // Default color
              },
              "& .MuiStepIcon-root.Mui-active": {
                color: "#5b2338", // Active step color
              },
              "& .MuiStepIcon-root.Mui-completed": {
                color: "#5b2338", // Completed step color
              },
            }}
          >
            {label}
          </StepLabel>
        </Step>
      );
    })}
  </Stepper>
</Box>


        {activeStep === steps.length ? (
          <React.Fragment>
            <Typography sx={{ mt: 2, mb: 1 }}>
              All steps completed - you&apos;re finished
            </Typography>
            <Box sx={{ display: 'flex', flexDirection: 'row', pt: 2 }}>
              <Box sx={{ flex: '1 1 auto' }} />
            </Box>
          </React.Fragment>
        ) : (
          <React.Fragment>


            <Box sx={{ display: 'flex', flexDirection: 'row', pt: 2 }}>
              <Button
                color="inherit"
                disabled={activeStep === 0}
                onClick={handleBack}
                sx={{ mr: 1 }}
              >
                Back
              </Button>

            </Box>

            <div>
              {step == 2 ? <DeliveryAddressForm /> : <OrderSummary />}
            </div>

          </React.Fragment>
        )}
      </Box>
    </div>
  );
}
