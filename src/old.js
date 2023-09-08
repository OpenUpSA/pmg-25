import React, { useEffect } from 'react';
import { createRoot } from 'react-dom/client';
import './app.scss';
import enterView from 'enter-view';


function App() {
	const [state, setState] = React.useState("Hello, world!");
	const [counter, setCounter] = React.useState(0);
	const [timelines, setTimelines] = React.useState({
		first: [
			{
				slide: 1,
				title: "1994",
				content: "Under the watchful eye of the IEC, South Africa held its first democratic election, ending 50 years of Apartheid.",
				img_lg: "img/timeline-1994-lg.png",
				img_xs: "img/timeline-1994-lg.png",
				active:'active'
			},
			{
				slide: 2,
				title: "1995",
				content: "Partnership formed",
				img_lg: "img/timeline-1995-lg.png",
				img_xs: "img/timeline-1995-lg.png",
				active: ''
			},
			{
				slide: 3,
				title: "1998",
				content: "Second Election",
				img_lg: "img/timeline-1998-lg.png",
				img_xs: "img/timeline-1998-lg.png",
				active: ''
			},
			{
				slide: 4,
				title: "1998",
				content: "First PMG Website",
				img_lg: "img/timeline-1998-2-lg.png",
				img_xs: "img/timeline-1998-2-lg.png",
				active: ''
			},
			{
				slide: 5,
				title: "1999",
				content: "Users Double",
				img_lg: "img/timeline-1999-lg.png",
				img_xs: "img/timeline-1999-lg.png",
				active: ''
			}
		]
	});

	useEffect(() => {
		enterView({
			selector: '.step',
			enter: function(el) {
				el.classList.add('active');
				let slides = timelines.first;
				slides.forEach((slide) => {
					if(slide.slide == el.getAttribute('data-slide')) {
						slide.active = 'active';
					} else {
						slide.active = '';
					}
				});
				setTimelines({first: slides});
			},
			exit: function(el) {
				el.classList.remove('active');
				let slides = timelines.first;
				slides.forEach((slide) => {
					if(slide.slide == el.getAttribute('data-slide')) {
						slide.active = 'active';
					} else {
						slide.active = '';
					}
				});
				setTimelines({first: slides});
			},
			progress: function(el, progress) {
				el.style.opacity = progress;
				
					
			},
			offset: 0
		});
	}, []);

	return (
		<>
			<section style={{height: '200px'}}>
				Lorem...ipsum!
			</section>

			<div className="scrolly-container">
				<div className="scrolly">
					<div className="sticky">
						{
							timelines.first.map((slide, index) => <div key={index} className={`sticky-inner ${slide.active}`} style={{backgroundImage: `url(${slide.img_lg})`}} data-slide={slide.slide}></div>)
						}
					</div>
					<div className="steps-container">
						{
							timelines.first.map((slide, index) => <div key={index} className="step" data-slide={slide.slide}>
								<div className="step-inner" >
									<h2 className="step-title">{slide.title}</h2>
									<div className="step-content">
										{slide.content}
									</div>
								</div>
							</div>)
						}
					</div>
				</div>
			</div>
		</>
	);
}

const container = document.getElementById('root');
const root = createRoot(container);
root.render(<App />);