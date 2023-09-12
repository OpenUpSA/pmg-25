import React, { useEffect } from 'react';
import './timeline.scss';
import $ from 'jquery';

export function Timeline({ timeline, tid }) {

    useEffect(() => {
        $.fn.timeline = function() {
            var selectors = {
                id: $(this),
                item: $(this).find(".timeline-item"),
                activeClass: "timeline-item--active",
                img: ".timeline__img",
                bg: ".timeline__bg"
            };
            selectors.item.eq(0).addClass(selectors.activeClass);
            selectors.id.css(
                "background-image",
                "url(" +
                    selectors.item
                    .first()
                    .find(selectors.bg)
                    .attr("src") +
                    ")"
            );
            var itemLength = selectors.item.length;
            $(window).scroll(function() {
                var max, min;

                // var pos is middle of screen
                var pos = ($(this).scrollTop() + $(this).height() / 2) - 200;

                // var pos = $(this).scrollTop() + 200;
                selectors.item.each(function(i) {
                    min = $(this).offset().top;
                    max = $(this).height() + $(this).offset().top;
                    var that = $(this);
                    if (i == itemLength - 2 && pos > min + $(this).height() / 2) {
                        selectors.item.removeClass(selectors.activeClass);
                        selectors.id.css(
                            "background-image",
                            "url(" +
                            selectors.item
                                .last()
                                .find(selectors.img)
                                .attr("src") +
                            ")"
                        );
                        selectors.item.last().addClass(selectors.activeClass);
                    } else if (pos <= max - 40 && pos >= min) {
                        selectors.id.css(
                            "background-image",
                            "url(" +
                            $(this)
                                .find(selectors.img)
                                .attr("src") +
                            ")"
                        );
                        selectors.item.removeClass(selectors.activeClass);
                        $(this).addClass(selectors.activeClass);
                    }
                });
            });
        };
        
        $('#' + tid).timeline();

    }, []);      

    return (
        <div className="timeline-container" id={tid}>
            <div className="timeline">
                {
					timeline.map((slide, index) => 
                        <div className="timeline-item" data-text={slide.subtitle} key={index}>
                            <div className="timeline__content">
                                <img className="timeline__img" src={slide.img} />
                                <h2 className="timeline__content-title">{slide.title}</h2>
                                <p className="timeline__content-desc">{slide.content}</p>
                            </div>
                        </div>
                    )
                }
            </div>
        </div>
    )
}