import React, { useState } from "react";
import AliceCarousel from 'react-alice-carousel';
import 'react-alice-carousel/lib/alice-carousel.css';
import HomeSectionCard from "../HomeSectionCard/HomeSectionCard";
import ArrowBackIosNewIcon from '@mui/icons-material/ArrowBackIosNew';
import Button from '@mui/material/Button';
import { RotateLeft } from "@mui/icons-material";
// import { mens_kurta } from "../../../Data/mens_kurta";

// 2nd Carousel on Home Screen

const HomeSectionCarousel = ({data, section}) => {

    const responsive = {
        0: { items: 2},
        750: { items: 3},
        1024: { items: 4 },
        1390: {items: 5},
    };

    const items = data.slice(0,10).map((item)=><HomeSectionCard product={item} />)

    return(
        <div>
            <h2 className="text-center font-bold text-xl text-gray-800 py-1" style={{backgroundColor:'#5b2338', color:'#fff'}}>{section}</h2>
        
            <div className="px-0 lg:px-8 ">
                <div className="relative p-5 w-full">
                    <AliceCarousel
                        items={items}
                        disableButtonsControls
                        autoPlay
                        autoPlayInterval={1000}
                        infinite
                        responsive={responsive}
                    />
                </div>
            </div>
        </div>
    )
}

export default HomeSectionCarousel