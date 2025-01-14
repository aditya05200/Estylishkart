import React from "react";
import MainCarousel from "../../components/HomeCarousel/MainCarousel"
import HomeSectionCarousel from "../../components/HomeSectionCarousel/HomeSectionCarousel";
import { mens_kurta } from "../../../Data/mens_kurta";
import ProductCard from "../../components/Product/ProductCard";
import HomePageCategory from "../../components/Category/HomePageCategory";

const HomePage = () => {
    return(
        <div>
            <MainCarousel/>
            <div>
                <HomePageCategory/>
            </div>
            <div className="space-y-0 py-0">
                <HomeSectionCarousel data={mens_kurta} section={"BEST DEALS GURANTEED"}/>
                <HomeSectionCarousel data={mens_kurta} section={"POPULAR PRODUCTS"}/>
                <HomeSectionCarousel data={mens_kurta} section={"TOP RATED PRODUCTS"}/>
            </div>
        </div>
    )
}

export default HomePage;