import React, { useEffect } from 'react';
import { createRoot } from 'react-dom/client';
import './app.scss';
import { Timeline } from './timeline';
import { gsap } from 'gsap';
import { Tween } from 'react-gsap';
import { ScrollTrigger } from 'gsap/dist/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);


function App() {

	const timeline1 = [
		{
			title: "1994",
			subtitle: "First Democratic Election",
			content: "Under the watchful eye of the IEC, South Africa held its first democratic election, ending 50 years of Apartheid.",
			img: "img/1994-lg.jpg",
			bg: "img/1994-lg.jpg",
		},
		{
			title: "1995",
			subtitle: "Partnership Formed",
			content: "Established a partnership with Black Sash, Human Rights Committee and Idasa.",
			img: "img/1994-lg.jpg",
			bg: "img/1994-lg.jpg",
		},
		{
			title: "1998",
			subtitle: "2ND Democratic Election",
			content: "Second Democratic Election",
			img: "img/1998-lg.jpg",
			bg: "img/1998-lg.jpg",
		},
		{
			title: "1998",
			subtitle: "First PMG Website",
			content: "The website was set up to make information available to a wider audience.",
			img: "img/1998-2-lg.jpg",
			bg: "img/1998-2-lg.jpg",
		},
		{
			title: "1999",
			subtitle: "Users Tripled",
			content: "Within one year of going online, PMG tripled user access to its website.",
			img: "img/1998-2-lg.jpg",
			bg: "img/1998-2-lg.jpg",
		},
		{
			title: "2000",
			subtitle: "PMG Expanded",
			content: "PMG expanded to monitor all committees & instituted a subscriber alert service.",
			img: "img/1998-2-lg.jpg",
			bg: "img/1998-2-lg.jpg",
		}
	];

	const timeline2 = [
		{
			title: "2002",
			subtitle: "Subscription Service",
			content: "PMG began charging subscription fees.",
			img: "img/1998-2-lg.jpg",
			bg: "img/1998-2-lg.jpg",
		},
		{
			title: "2007",
			subtitle: "Sound Recordings",
			content: "PMG began providing sound recordings of all parliamentary meetings.",
			img: "img/1998-2-lg.jpg",
			bg: "img/1998-2-lg.jpg",
		},
		{
			title: "2009",
			subtitle: "NGO Status",
			content: "PMG became an independent NGO.",
			img: "img/1998-2-lg.jpg",
			bg: "img/1998-2-lg.jpg",
		},
		{
			title: "2011",
			subtitle: "Bill Tracker launched",
			content: "Bill Tracker launched.",
			img: "img/1998-2-lg.jpg",
			bg: "img/1998-2-lg.jpg",
		},
		{
			title: "2014",
			subtitle: "People's Assembly launched",
			content: "People's Assembly was launched.",
			img: "img/1998-2-lg.jpg",
			bg: "img/1998-2-lg.jpg",
		},
		{
			title: "2018",
			subtitle: "Provincial Legislatures",
			content: "PMG started monitoring provincial legislatures.",
			img: "img/1998-2-lg.jpg",
			bg: "img/1998-2-lg.jpg",
		},
		{
			title: "2021",
			subtitle: "Zondo Comission",
			content: "PMG assisted the Zondo Commission.",
			img: "img/1998-2-lg.jpg",
			bg: "img/1998-2-lg.jpg",
		}
	];

	

	
	

	return (
		<>
			<Tween from={{ opacity: 0 }} to={{ opacity: 1 }} >
				<section className="title-slide">
					<Tween from={{ opacity: 0, y: -200 }} to={{ opacity: 1, y: -100 }} >
						<div className="title-slide-content">
							<h1>Documenting Democracy</h1>
							<h2>25 Years of the Parliamentary Monitoring Group</h2>
						</div>
					</Tween>
				</section>
			</Tween>

			<section className="text-slide">
				<div class="text-slide-inner">
					<p>PMG's story coincides with the new democratic Parliament that was established in 1994.</p>

					<p>Prior to 1994, the work of the eighteen parliamentary committees was largely conducted in secret, and they did not really have a well-defined or independent role from the House. However, in the new structure, the number of parliamentary committees was greatly expanded.</p>

					<p><Tween from={{ opacity: 0, y: -100 }} to={{ opacity: 1, y: 0, scrollTrigger: {trigger: '.pullout1', start: '-200px center', end: '200px center', scrub: 0.5} }} ><div className="pullout right pullout1">
					This ranged, at the time, from the most basic information about the schedules for meetings, to reporting on what was discussed in the meetings and at media briefings.
					</div></Tween>In recognition of the fact that a Parliament should not operate in isolation from the people, these committee meetings were now opened up to attendance by the public. They were intended to provide a forum for departments and, when invited, for private or civil society bodies to present their views on policies, budgets, and proposed legislation. In this way, the parliamentary committees took on increased responsibilities and functions as the “engine room” of Parliament, where vital debates and developments would occur. Though it was important for advocacy organisations to capture what was happening at these crucial meetings, it soon became apparent that Parliament itself could not provide sufficient information about its activities. This ranged, at the time, from the most basic information about the schedules for meetings, to reporting on what was discussed in the meetings and at media briefings. Not only was there no ongoing current information, there was also no institutional memory being created. In the following two years, the Constitutional Assembly and Bill of Rights process and the drafting of legislation setting up the Chapter 9 institutions resulted in a rapid rise in the number of meetings.</p>

					<p><Tween from={{ opacity: 0, y: -100 }} to={{ opacity: 1, y: 0, scrollTrigger: {trigger: '.pullout2', start: '-200px center', end: '200px center', scrub: 0.5} }} ><div className="pullout left pullout2">
						<img src="img/1998-2-lg.jpg"/>
					</div></Tween>At this time, a number of advocacy organisations were trying, individually, to follow committees pertinent to their areas of interest, largely so that their representatives would then be in a better position to make public submissions. The Black Sash, Institute for Democracy in South Africa, and Human Rights Committee (an NGO not to be confused with the SAHRC), although dealing with different issues, were all concerned with trying to get as much information as possible about the workings of the parliamentary committees, for the purpose of their advocacy efforts.</p>

					<p>These three bodies collaborated and managed to build up a team of volunteers, who were reimbursed for their transport costs only, to attend and take hand-written notes from the meetings they attended, which were then circulated between the three organisations. There was some difficulty in achieving consistency through the use of volunteers only. <Tween from={{ opacity: 0, y: -100 }} to={{ opacity: 1, y: 0, scrollTrigger: {trigger: '.pullout3', start: '-200px center', end: '200px center', scrub: 0.5} }} ><div className="pullout right pullout3">
					This ranged, at the time, from the most basic information about the schedules for meetings, to reporting on what was discussed in the meetings and at media briefings.
					</div></Tween>Over time, it also became apparent that there was a greater need in broader civil society for independent, unbiased, consistently accurate, and timely information about the workings of the committees, which was not available from parliamentary sources, to enable other bodies to monitor, intervene and hold both the executive and Parliament accountable.</p>

					<p>The decision was therefore taken by these three bodies to form the Parliamentary Monitoring Group (PMG), a formal structure that would make use of paid interns, and have a full-time management structure, to prepare reports of committee meetings. Slightly more formal report forms were devised that required those attending the meetings to answer a number of questions about the format, structure, and functioning of the meetings, and to record the main points and all MP questions and presenter responses. These handwritten forms were circulated by fax. In the years up to 1997, PMG's paid interns and volunteers reported back on the proceedings of as many committees as its resources and funding would allow.</p>

					<p>Over these years, the system developed so that reports now had to be submitted in typed format, with strict deadlines for submission once payment was made for the reporting.</p>

					<p>In 1998, it launched a website on which its reports and other targeted information were published and made available to subscribers and other organisations exempt from paying subscriptions. By 2000, PMG was managing to attend all parliamentary committees.</p>

					<p>Initially, PMG managed to work without charging subscriptions, but by 2002, when donor funding was diminishing and costs were increasing, the decision was taken to charge subscriptions to commercial institutions and government parastatals for some committee reports, to build sustainability.</p>

					<p>Despite consistent bureaucratic hurdles, a sometimes apathetic public, and a shortage of requisite resources (funding, time, labour), PMG was able to continue growing and innovating. Its offerings were expanded over time.</p>
				</div>
			</section>

			<Timeline timeline={timeline1} tid="timeline1"/>

			<section className="text-slide">
				<div class="text-slide-inner">
					<p>PMG has carved out a unique position in the South African landscape. Our non-partisan approach, and consistent and reliable dissemination of information is relied upon by lawmakers, their staff, political parties, academia, civil society, law firms, commercial companies, and the public at large.</p>

					<p>Over the years, various court judgments, legislation, and commissions of inquiries have introduced important aspects of public participation, inclusion, access to information, and transparency, which vindicated our initial efforts and remains a guiding light that continues to drive PMG's growth and ambitions.</p>

					<p>Despite our humble roots, PMG has established quite a machinery, run by a permanent staff of seven. This core machinery is also largely made possible by our monitors, our foot soldiers accessing meetings as PMG representatives and dutiful notetakers. Over the years, we have trained and prepared thousands of monitors, mostly students, on attending meetings and report writing, giving them access to the coalface of accountability, government and law-making. We also rely on a small team of editors, most having started as monitors, now guiding new recruits, to review reports before publishing them on the website. Others have a role to play in ensuring documents relevant to the meeting are secured and uploaded, videos and audios are uploaded, legislation is updated, calls for comment are advertised and MP profiles are updated, to touch on only a few facets of the website. It really is a team effort. Looking back, thousands of monitors have passed through our doors, some of whom have become MPs - a real full circle moment. Tens of thousands of reports have been published and read over these 25 years.</p>

					<p>When Covid hit and physical meetings were banned in the lockdown, PMG had to adapt to “attending” meetings virtually via the Zoom platform. This was also an interesting point in our history which we have navigated. Through our consistency and reliability, our website users continued to grow during this time.</p>

					<p>In addition, we use our data and experience to produce research on the functioning of the legislature, with the aim of raising standards.</p>

					<p>As the conversation continues about how to reimagine and reinvigorate Parliament following the Zondo Commission, we believe PMG has an important role to play in this regard.</p>

					<p>We are grateful to our partners - funders, staff, past and current, and stakeholders- who believed in us and continued supporting our work. It fills us with great joy to celebrate this important milestone and toast the next chapter.</p>

					<p>The website is the face of the organisation and is the vehicle through which we help to strengthen democracy through information.</p>
				</div>
			</section>

			<Timeline timeline={timeline2} tid="timeline2"/>


			<section className="stats">
				<div className="stats-inner">
					<Tween from={{ opacity: 0, y: -100 }} to={{ opacity: 1, y: 0, scrollTrigger: {trigger: '.stats-inner', start: '-175px center', end: '225px center', scrub: 0.5} }} >
						<h1>PMG IN NUMBERS</h1>
						<h2>At the time of writing</h2>
					</Tween>
					<div className="stat-cards-row">
						<Tween from={{ opacity: 0, y: -100 }} to={{ opacity: 1, y: 0, scrollTrigger: {trigger: '.stats', start: '-200px center', end: '200px center', scrub: 0.5} }} stagger={{amount: 4}} >
							<div className="col">
								<div className="stat-card stat-card1">
									<div className="stat-card-title">Users Per Month</div>
									<div className="stat-card-number">90,000</div>
								</div>
							</div>
							<div className="col">
								<div className="stat-card stat-card2">
									<div className="stat-card-title">Comittee Meetings Listed</div>
									<div className="stat-card-number">30,267</div>
								</div>
							</div>
							<div className="col">
								<div className="stat-card stat-card3">
									<div className="stat-card-title">Bills Tracked</div>
									<div className="stat-card-number">1083</div>
								</div>
							</div>
						</Tween>
					</div>
				</div>	
			</section>


		</>
	);
}

const container = document.getElementById('root');
const root = createRoot(container);
root.render(<App />);