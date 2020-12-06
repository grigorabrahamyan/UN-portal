import React from 'react';
import picture_one from 'assets/img/picture_one.png';
import { useRouteMatch } from 'react-router-dom';
import ArrowUp from '../components/arrowUpAndDown/arrowUp';

function Slider() {

    return (
        <div className={`slider-contant slider__home`} >
            <img src={picture_one} alt="Picture" />
            <ArrowUp />
        </div>
    )
};

export default Slider;