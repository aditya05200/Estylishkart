import { Button, Grid, Typography } from "@mui/material";
import React from "react";
import { useNavigate } from "react-router-dom";

const Footer = () => {
    const navigate = useNavigate();

    return(
        <div>
            <Grid className="bg-black text-white text-center mt-10" container sx={{bgcolor:"black", color:"white", py:3}}>
                <Grid item xs={12} sm={6} md={3}>

                    <Typography className="pb-5" variant="h6">Contact Us</Typography>
                    <div><Button className="pb-5" variant="p" gutterBottom>support@estylishkart.com</Button></div>
                    <div><Button className="pb-5" variant="p" gutterBottom>+91 9625787978</Button></div>
                    <div><Button className="pb-5" variant="p" gutterBottom>255/1754, Asola Extn., Fatehpur, New Delhi- 110074, India</Button></div>
                               
                </Grid>

                <Grid item xs={12} sm={6} md={3}>

                    <Typography className="pb-5" variant="h6">Categories</Typography>
                    <div><Button className="pb-5" variant="p" gutterBottom>Men</Button></div>
                    <div><Button className="pb-5" variant="p" gutterBottom>Women</Button></div>
                    <div><Button className="pb-5" variant="p" gutterBottom>Kids</Button></div>
                    <div><Button className="pb-5" variant="p" gutterBottom>Home & Living</Button></div>
                    <div><Button className="pb-5" variant="p" gutterBottom>Accessories</Button></div> 
                               
                </Grid>

                <Grid item xs={12} sm={6} md={3}>

                    <Typography className="pb-5" variant="h6">Useful Links</Typography>
                    <div><Button className="pb-5" variant="p" gutterBottom onClick={()=>navigate("/about")}>About Us</Button></div>
                    <div><Button className="pb-5" variant="p" gutterBottom onClick={()=>navigate("/privacy-policy")}>Privacy Policy</Button></div>
                    <div><Button className="pb-5" variant="p" gutterBottom onClick={()=>navigate("/terms-conditions")}>Terms & Conditions</Button></div>
                    <div><Button className="pb-5" variant="p" gutterBottom onClick={()=>navigate("/return")}>Return, Exchange, Cancellation & Refund Policy</Button></div>
                    <div><Button className="pb-5" variant="p" gutterBottom onClick={()=>navigate("/shipping")}>Shipping Policy</Button></div>
                               
                </Grid>

            </Grid>

        </div>

    )
}

export default Footer