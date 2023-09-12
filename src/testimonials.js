import React, { useEffect } from 'react';
import './testimonials.scss';
import ReactHtmlParser from 'react-html-parser';
import { gsap } from 'gsap';
import { Tween } from 'react-gsap';
import { ScrollTrigger } from 'gsap/dist/ScrollTrigger';

export function Testimonials({ testimonials }) {

    return (

        <div className="testimonials">
            <div className="testimonials-inner">
                <Tween from={{ opacity: 0, y: -100 }} to={{ opacity: 1, y: 0, scrollTrigger: {trigger: '.testimonials-inner', start: '-175px center', end: '225px center', scrub: 0.5} }} >
                    <h1>TESTIMONIALS</h1>
                </Tween>
                {
                    testimonials.map((testimonial, index) => (
                    <Tween from={{ opacity: 0, x: -100 }} to={{ opacity: 1, x: 0, scrollTrigger: {trigger: '.testimonial-' + index, start: '-175px center', end: '225px center', scrub: 0.5} }} >
                        <div key={index} className={`testimonial testimonial-${index}`}>
                            <div className="testimonial-inner" >
                                <div className="testimonial-content">
                                    {ReactHtmlParser(testimonial.testimonial)}
                                </div>
                                <h3>{testimonial.person}</h3>
                                <span>{testimonial.role}</span><br/>
                                <span>{testimonial.org}</span>
                            </div>
                        </div>
                    </Tween>))
                }
            </div>
        </div>
    )

}