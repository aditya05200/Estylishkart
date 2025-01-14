import React from "react";
import AddressCard from "../AddressCard/AddressCard";
import OrderTracker from "./OrderTracker";
import { Box, Grid } from "@mui/material";
import { color } from "../Product/FilterData";
import { StarIcon } from "@heroicons/react/24/outline";
import StarBorderIcon from '@mui/icons-material/StarBorder';

const OrderDetails =()=>{
    return(
        <div className="px-5 lg:px-20">
            <div>
                <h1 className="font-semibold text-lg">Delivery Address</h1>
                <AddressCard/>
            </div>

            <div className="py-20">
                <OrderTracker activeStep={3}/>
            </div>

            <Grid className="space-y-5" container>
                {[1,1,1,1,1].map((item)=>
                <Grid item container className="shadow-xl rounded-md p-5 border" sx={{alignItems: "center", justifyContent:"space-between", borderColor:'#5b2338'}}>
                    <Grid item xs={6} container>
                        <div className="flex items-center space-x-2">
                            <img className="w-[5rem] h-[7rem] object-cover object-top" src="https://manyavar.scene7.com/is/image/manyavar/IDES704_306-Dark+Blue_101.12070_31-08-2024-16-53:650x900" alt="" />
                        </div>
                        <div className="space-y-2 ml-5">
                            <p className="font-semibold">Men's Kurta</p>
                            <p className="space-x-5 opacity-50 text-xs font-semibold"> <span>Color: Black</span> <span>Size: M</span></p>
                            <p>Brand: EstylishKart</p>
                            <p>Rs 2999</p>
                        </div>
                    </Grid>

                    <Grid>
                        <Box sx={{color:"#5b2338"}}>

                            <StarBorderIcon sx={{fontSize:"3rem"}} className="px-2 text-5xl"/>
                            <span>Rate & Review Product</span>
                        </Box>
                    </Grid>
                </Grid>
                )}
                
            </Grid>
        </div>
    )
}

export default OrderDetails;