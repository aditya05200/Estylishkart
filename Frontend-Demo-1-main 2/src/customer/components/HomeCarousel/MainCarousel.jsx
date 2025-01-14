import React from 'react';
import AliceCarousel from 'react-alice-carousel';
import 'react-alice-carousel/lib/alice-carousel.css';
import { mainCarouselData } from './MainCarouselData';
import signup from '../../../images/signup.png';

const responsive = {
    0: { items: 1 },
    568: { items: 2 },
    1024: { items: 3 },
};

const MainCarousel = () => {

    const items = mainCarouselData.map((item) => <img className='cursor-pointer' role='presentation' src={item.image} alt=''/>)

    return(
        <div className='lg:mx-20'>
    <img src={signup} alt='Offers' />
    <AliceCarousel
        items={items}
        disableButtonsControls
        autoPlay
        autoPlayInterval={2000}
        infinite
    />
</div>

    )
};

export default MainCarousel;