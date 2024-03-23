import React, { useState } from 'react'
import AliceCarousel from 'react-alice-carousel';
import HomeSectionCard from '../HomeSectionCard/HomeSectionCard';
import KeyboardArrowLeftIcon from '@mui/icons-material/KeyboardArrowLeft';
import { Button } from '@mui/material';
import { mens_kurta } from '../../../Data/mens_kurta';

const HomeSectionCarosel = () => {

    const [activeIndex, setActiveIndex] = useState(0);
    const responsive = {
        0: { items: 1, itemsFit: "contain", },
        720: { items: 3, itemsFit: "contain", },
        1024: { items: 5.5, itemsFit: "contain", },
    };

    const slidePrev = () => { setActiveIndex(activeIndex - 1); }
    const slideNext = () => { setActiveIndex(activeIndex + 1); }

    const syncActiveIndex = ({ item }) => {
        console.log("chech sync");
        setActiveIndex(item);
    }

    const items = mens_kurta.slice(0, 10).map((item) => <HomeSectionCard product={item} />)

    return (
        <div className='border'>
            <div className='relative p-5'>
                <AliceCarousel
                    disableButtonsControls
                    disableDotsControls
                    mouseTracking
                    items={items}
                    activeIndex={activeIndex}
                    responsive={responsive}
                    onSlideChanged={syncActiveIndex}
                    animationType="fadeout"
                    animationDuration={2000}
                />

                {activeIndex !== items.length - 5 && <Button onClick={slideNext} variant="contained" className="z-50 bg-white" sx={{
                    position: 'absolute', top: "8rem",
                    right: '0rem', transform: " translateX(50%) rotate(90deg)", bgcolor: 'white',
                }}
                    aria-label="next">
                    <KeyboardArrowLeftIcon sx={{ transform: "rotate(90deg)", color: 'black' }} />
                </Button>}

                <Button onClick={slidePrev} variant="contained" className="z-50 bg-white" sx={{
                    position: 'absolute', top: "8rem",
                    left: '0rem', transform: " translateX(-50%) rotate(-90deg)", bgcolor: 'white',
                }}
                    aria-label="next">
                    <KeyboardArrowLeftIcon sx={{ transform: "rotate(90deg)", color: 'black' }} />
                </Button>
            </div>


        </div>
    )
}

export default HomeSectionCarosel