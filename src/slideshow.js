import React, { useEffect } from 'react';
import './slideshow.scss';

export function Slideshow() {

    return(
        <div className="slideshow-container">
            <div className="title-slide-content">
                <h1>DOCUMENTING DEMOCRACY</h1>
                <h2>25 Years of the Parliamentary Monitoring Group</h2>
            </div>
            <div className="slideshow">
                <div className="slideshow-image slideshow-image-1"></div>
                <div className="slideshow-image slideshow-image-2"></div>
                <div className="slideshow-image slideshow-image-3"></div>
            </div>
        </div>
    )

}