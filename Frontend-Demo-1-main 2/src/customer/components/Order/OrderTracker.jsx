import { Step, StepLabel, Stepper } from "@mui/material";
import React from "react";

const steps = [
    "Placed",
    "Order Confirmed",
    "Shipped",
    "Out for delivery",
    "Delivered",
];

const OrderTracker = ({ activeStep }) => {
    return (
        <div className="w-full">
            <Stepper activeStep={activeStep} alternativeLabel>
                {steps.map((label, index) => (
                    <Step key={index}>
                        <StepLabel
                            StepIconProps={{
                                sx: { // Circle color for both active and completed steps
                                    "&.Mui-active": { color: "#5b2338" },
                                    "&.Mui-completed": { color: "#5b2338" }
                                }
                            }}
                            sx={{ fontSize: "44px" }}
                        >
                            {label}
                        </StepLabel>
                    </Step>
                ))}
            </Stepper>
        </div>
    );
};

export default OrderTracker;
