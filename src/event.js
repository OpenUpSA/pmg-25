import React, { useEffect, useState } from 'react';
import './event.scss';
import ReactHtmlParser from 'react-html-parser';
import { gsap } from 'gsap';
import { Tween } from 'react-gsap';
import { ScrollTrigger } from 'gsap/dist/ScrollTrigger';

import PhotoAlbum from "react-photo-album";
import Lightbox from "yet-another-react-lightbox";
import Captions from "yet-another-react-lightbox/dist/plugins/captions/index.js";
import "../node_modules/yet-another-react-lightbox/dist/styles.css";
import "../node_modules/yet-another-react-lightbox/dist/plugins/captions/captions.css";

// import optional lightbox plugins
// import Fullscreen from "yet-another-react-lightbox/plugins/fullscreen";
// import Slideshow from "yet-another-react-lightbox/plugins/slideshow";
// import Thumbnails from "yet-another-react-lightbox/plugins/thumbnails";
// import Zoom from "yet-another-react-lightbox/plugins/zoom";
// import "yet-another-react-lightbox/plugins/thumbnails.css";

export function Event({ photos }) {

    const [index, setIndex] = useState(-1);

    return (

        <section className="event">
            <div className="event-inner">
                <Tween from={{ opacity: 0, y: -100 }} to={{ opacity: 1, y: 0, scrollTrigger: {trigger: '.event-inner', start: '-175px center', end: '225px center', scrub: 0.5} }} >
                    <h1>PMG CELEBRATION</h1>
                    <h2>28 September 2023</h2>
                </Tween>
                <Tween from={{ opacity: 0, y: -100 }} to={{ opacity: 1, y: 0, scrollTrigger: {trigger: '.event-inner', start: '-175px center', end: '225px center', scrub: 0.5} }} >
                    <div className="photoalbum-container">
                        <PhotoAlbum layout="masonry" photos={photos} onClick={({ index }) => setIndex(index)}/>
                    </div>
                    <Lightbox
                        slides={photos}
                        open={index >= 0}
                        index={index}
                        close={() => setIndex(-1)}
                        plugins={[Captions]}
                        
                    />
                </Tween>
                
                
            </div>	
        </section>
    )

}