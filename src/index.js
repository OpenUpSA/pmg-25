import React, { useEffect } from 'react';
import { createRoot } from 'react-dom/client';
import './app.scss';
import { Timeline } from './timeline';
import { Slideshow } from './slideshow';
import { Testimonials } from './testimonials';
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
			img: "img/1994-sm.jpg",
			bg: "",
		},
		{
			title: "1994",
			subtitle: "First Parliament",
			content: "",
			img: "img/1994-2-sm.jpg",
			bg: "",
		},
		{
			title: "1995",
			subtitle: "Partnership Formed",
			content: "Established a partnership with Black Sash, Human Rights Committee and Idasa.",
			img: "img/1995-sm.jpg",
			bg: "",
		},
		{
			title: "1998",
			subtitle: "First PMG Website",
			content: "The website was set up to make information available to a wider audience.",
			img: "img/1998-sm.jpg",
			bg: "",
		},
		{
			title: "1999",
			subtitle: "Second Parliament",
			content: "Second Parliament",
			img: "img/1999-sm.jpg",
			bg: "",
		},
		{
			title: "1999",
			subtitle: "Users Tripled",
			content: "Within one year of going online, PMG tripled user access to its website.",
			img: "img/1998-sm.jpg",
			bg: "",
		},
		{
			title: "2000",
			subtitle: "PMG Expanded",
			content: "PMG expanded to monitor all committees & instituted a subscriber alert service.",
			img: "img/2000-sm.jpg",
			bg: "",
		}
	];

	const timeline2 = [
		{
			title: "2002",
			subtitle: "Subscription Service",
			content: "PMG began charging subscription fees.",
			img: "img/2002-sm.jpg",
			bg: "",
		},
		{
			title: "2004",
			subtitle: "Third Parliament",
			content: "",
			img: "img/2004-sm.jpg",
			bg: "",
		},
		{
			title: "2007",
			subtitle: "Sound Recordings",
			content: "PMG began providing sound recordings of all parliamentary meetings.",
			img: "img/2007-sm.jpg",
			bg: "",
		},
		{
			title: "2009",
			subtitle: "NGO Status",
			content: "PMG became an independent NGO.",
			img: "img/2009-sm.jpg",
			bg: "",
		},
		{
			title: "2009",
			subtitle: "Fourth Parliament",
			content: "",
			img: "img/2009-2-sm.jpg",
			bg: "",
		},
		{
			title: "2011",
			subtitle: "Bill Tracker launched",
			content: "Bill Tracker launched.",
			img: "img/2011-sm.jpg",
			bg: "",
		},
		{
			title: "2014",
			subtitle: "People's Assembly launched",
			content: "People's Assembly was launched.",
			img: "img/2014-2-sm.jpg",
			bg: "",
		},
		{
			title: "2014",
			subtitle: "Fifth Parliament",
			content: "",
			img: "img/2014-sm.jpg",
			bg: "",
		},
		{
			title: "2018",
			subtitle: "Provincial Legislatures",
			content: "PMG started monitoring provincial legislatures.",
			img: "img/2018-sm.jpg",
			bg: "",
		},
		{
			title: "2019",
			subtitle: "Sixth Parliament",
			content: "",
			img: "img/2019-sm.jpg",
			bg: "",
		},
		{
			title: "2021",
			subtitle: "Zondo Comission",
			content: "PMG assisted the Zondo Commission.",
			img: "img/2021-sm.jpg",
			bg: "",
		}
	];

	const testimonials = [
		{
			person: "Manny de Freitas MP",
			role: "Member of Parliament",
			testimonial: "<p>Although the PMG (Parliamentary Monitoring Group) has traditionally received little attention publicly, in reality it serves an important role in our democracy as well as a vital tool for many MPs. It is common knowledge that Committee minutes compiled by the PMG are taken more seriously and more accurately that the official minutes compiled by Parliament. Often in our work we refer to minutes authored by the PMG as they provide more detail and context that is required.</p><p>Another example is when I had to present a written and oral submission to the Zondo Commission in February; throughout my written and oral submission only PMG minutes were referenced. I also know that PMG minutes of meetings were reference by other witnesses to the Zondo Commission.</p><p>PMG provides a vital service which we cannot do without.</p>"
		},
		{
			person: "Haseena Ismail MP",
			role: "Member of Parliament",
			testimonial: "<p>PMG is a crucial tool to connect the people to what happens in government. It essentially increases one's monitoring capabilities and is crucial to a functioning, transparent and accountable democracy.</p>"
		},
		{
			person: "Fatima Hassan",
			role: "Director",
			org: "Health Justice Initiative",
			testimonial: "<p>The Health Justice Initiative (HJI) is a dedicated public health and law initiative addressing the intersection between racial and gender inequality. We were established in June 2020 and have - out of necessity - focused on transparency and accountability in South Africa's response to the Covid-19 pandemic. From early on in our organisation's inception, we requested access to the PMG's resources which they have rendered free of charge. This access has added significantly to our work. The meticulous documenting of Portfolio Sub-Committee meetings - particularly those on Health and Trade and International Relations - has strengthened our work on accountability. We have employed this information in our submissions to Parliament on draft Bills and Regulations, and within the litigation that we have initiated on vaccine procurement as well as on access to information.</p><p>Our work on National Health Insurance has relied heavily on PMG reports of public submissions made on NHI and the PMG timeline on NHI developments is a key resource. We believe the services rendered by PMG are vital to South Africa's constitutional commitment to transparency, accountability, and democracy, and support the public's role in oversight of government.</p>"
		},
		{
			person: "Ayesha Motala",
			role: "Research Officer (Governance)",
			org: "Land and Accountability Research Centre (LARC)",
			testimonial: "<p>The PMG website is an important resource for us at the Land and Accountability Research Centre. Our work streams focus on issues relating to land, mining, and traditional governance in the former homelands, particularly on how laws and policies affect the customary and constitutional rights of rural citizens in these contexts. Parliamentary developments are therefore crucial for us and our partner organisations in terms of laws aimed at “regulating” rural democracy and rights to land held by rural community members.</p><p>The resources available on the PMG website allow us to keep abreast of developments within Parliamentary Committees that deal with laws and issues related to our work. We are able to check daily schedules of Committee meetings that are uploaded and updated, as well as access minutes of relevant meetings. We can source calls for comments on draft laws and policies so we and our partners can make written submissions.</p><p>PMG allows us to be informed of what is happening in the Parliamentary precinct so that we can monitor activity and share that information widely with academics, civil society organisations, rural activists, and the general public. This in turn facilitates active citizen engagement with South Africa's democratic processes. Even when we are unable to attend important meetings ourselves, we know that the PMG website is a resource we can rely on to ensure our efforts at remaining engaged in the happenings at Parliament never fall behind. Without PMG's dedicated activities, we often would have no other means for accessing this important information.</p><p>In addition to providing a vast database of readily available content, the PMG team has been invaluable to us by answering our queries about the development of certain Bills. We are deeply appreciative of their efforts and commend them for their brilliant work.</p>"
		},
		{
			person: "Mira Dutschke",
			role: "South African Programme Manager",
			org: "Democracy Works Foundation",
			testimonial: "<p>The importance of the work of the Parliamentary Monitoring Group in the South African context cannot be overstated. As a young democracy, we are grappling with the challenge to build a culture of accountability, transparency and oversight. Being able to access the information about the kind of work of our elected representatives are doing is of course key to this struggle. Without this service, civil society would not be able to stay informed about the parliamentary discussions that are relevant to respective areas of work.</p><p>Having known of PMG throughout my career, we were fortunate to engage professionally with regards to the Civil Society Participation in Provincial Legislature project. The European Union and the Westminster Foundation for Democracy co-funded and provided technical support from March 2018 – Jan 2021. The training facilitated by PMG to our network of Civil Society partners has created an appetite for information regarding provincial legislatures and their committees as well. Through the training our CSO partners were able to sign up to alerts for national parliamentary committees active in the areas of health and safety and has played an important role in supporting them their advocacy efforts.</p><p>It would be wonderful to see the great work of the PMG also extending into the provincial legislatures. These institutions are closer to the people and have the mandate for overseeing many of the service delivery challenges our communities struggle with. Public access to this kind of information would go a long way in deepening community driven oversight and accountability in South Africa.</p>"
		},
		{
			person: "Claire Taylor",
			role: "Researcher",
			org: "Gun Free South Africa",
			testimonial: "<p>Gun Free SA is a small organisation working to make South Africa a safer country by reducing gun violence, and we rely extensively on PMG to access parliament. For instance we use PMG's reporting of meetings in a number of ways. Historical reporting has allowed us to access a trove of information to document the impact of gun control on gun violence in SA over 25 years, showing that gun control saves lives but poor enforcement kills. Quick turn-around reporting by PMG facilitates our day-to-day work, including lobbying, advocacy and media relations as we can access correct information on parliamentary discussions and presentations and take informed action. In our interactions with PMG for help in accessing info or getting feedback, staff members are incredibly helpful, responsive and knowledgeable. And very nice too!</p>"
		},
		{
			person: "Matt Johnston",
			role: "Head of Research, Policy & Parliamentary Engagement",
			org: "OUTA",
			testimonial: "<p>OUTA has used the Parliamentary Monitoring Group to do a extraordinarily wide range of work. Our mission has broadened to holding government accountable through Parliament where possible - and PMG's online resources have helped us do this - but we have also made it our mission to hold Members of Parliament themselves accountable. Without the effective and reliable monitoring of PMG, this would be virtually impossible because of Parliament's own unwillingness or inability to maintain proper records of deliberations, policymaking and oversight of executive conduct. South Africa owes a debt of gratitude to PMG and its funders, and we have only just begun utilising this highly valuable platform in ways that really make a difference for ordinary people.</p><p>We would and indeed do recommend PMG to any active citizens and organised civil society as a first port of call when attending meetings in Parliament is not viable. Moreover, even in instances where we do manage to attend meetings - PMG's reliable work means we can focus on engagement and interaction with decision-makers with the peace of mind that proceedings would not be forgotten and commitments will not fade away when they are not fulfilled.</p><p>Please convey our appreciation to everyone at PMG, we really value your efforts.</p>"
		},
		{
			person: "Jennifer Smout",
			role: "Researcher, Writer, Gender Analyst",
			testimonial: "<p>The Parliamentary Monitoring Group is an invaluable record of the information shared, decisions made, and discussions held in the South African Parliament. It provides an extremely wide range of information - from Members' questions, to bill tracking, to committee meeting reports. All of these are a vital source of data in my work as a researcher, and for many researchers across the country and around the world. Without the PMG we would have little evidence of the way that our country's democracy is unfolding at the legislatures, and I am grateful for the hard work of the team in creating and maintaining this essential public record.</p><p>Thank you very much!</p>"
		},
		{
			person: "Phelelani Dlomo",
			role: "Content Advisor, Select Committee on Appropriations",
			org: "Parliament",
			testimonial: "<p>I wish to thank PMG for its contributions towards the work of Parliament of RSA. PMG officials always attend our meetings and capture all the committee deliberations.</p><p>PMG minutes are quite detailed and are assisting a lot when parliamentary officials write committee reports for the adoption of proposed legislation and other policy matters.</p><p>Most importantly this has been a great contribution to promote transparency and accountability during legislative processes.</p>"
		},
		{
			person: "Prof Richard Calland",
			role: "Witness, State Capture Commission proceedings, 8 February 2021 transcript",
			testimonial: "<p>I must say it is gratifying to see and hear the PMG referred to so often in these proceedings. It is an organisation which clearly has stood the test of time fills an important gap and provides a very useful service to the public and to commissions such as this.</p>"
		},
		{
			person: "Ms Samantha Waterhouse and Prof Jaap de Visser",
			role: "Project Head, Women and Democracy Initiative and Director",
			org: "Dullah Omar Institute (UWC)",
			testimonial: "<p>We hold the strong view that the Parliamentary Monitoring Group has made, and continues to make a significant contribution to South Africa's democracy.</p><p>In tandem with the constitutional requirements and developed practices of the legislatures to be transparent and accessible, the PMG has invested in systems to support, augment, and broaden the reach of information from the legislatures. External evaluation demonstrates, that the consequence of this is increased public access to and engagements with legislatures. PMG's consistent presence and recording of proceedings in committees has also made a direct contribution to transparent and accountable government as evidenced most recently through the Zondo Commission of Inquiry into State Capture. The DOI has relied on information provided by the PMG to inform research and augment the evidence-base of our contributions to policy formulation, and to our efforts aimed at accountable government linked to the realization of human rights. At this critical phase of South Africa's democracy, where practices of transparency are being tested, the role played by PMG is invaluable. The organisation's pursuit of neutrality is exemplary. In the context of its work, this approach is foundational to its contribution to our democracy. In addition to being a user of PMG's services, the DOI has also partnered in projects aimed at strengthening the functioning of the legislatures in South Africa's democracy, with the PMG. Time and again PMG has shown itself to be a reliable, responsive, and committed organization to partner with.</p>"
		}
	];






	

	
	

	return (
		<>
			<Tween from={{ opacity: 0 }} to={{ opacity: 1 }} >
				<Slideshow />
			</Tween>
			

			<section className="text-slide">
				<div className="text-slide-inner">

					<div className="logo"/>

					<p>PMG's story coincides with the new democratic Parliament that was established in 1994.</p>

					<p>Prior to 1994, the work of the eighteen parliamentary committees was largely conducted in secret, and they did not really have a well-defined or independent role from the House. However, in the new structure, the number of parliamentary committees was greatly expanded.</p>

					<p><Tween from={{ opacity: 0, y: -100 }} to={{ opacity: 1, y: 0, scrollTrigger: {trigger: '.pullout1', start: '-200px center', end: '200px center', scrub: 0.5} }} ><div className="pullout right pullout1">
					Though it was important for advocacy organisations to capture what was happening at these crucial meetings, it soon became apparent that Parliament itself could not provide sufficient information about its activities.
					</div></Tween>In recognition of the fact that a Parliament should not operate in isolation from the people, these committee meetings were now opened up to attendance by the public. They were intended to provide a forum for departments and, when invited, for private or civil society bodies to present their views on policies, budgets, and proposed legislation. In this way, the parliamentary committees took on increased responsibilities and functions as the “engine room” of Parliament, where vital debates and developments would occur. Though it was important for advocacy organisations to capture what was happening at these crucial meetings, it soon became apparent that Parliament itself could not provide sufficient information about its activities. This ranged, at the time, from the most basic information about the schedules for meetings, to reporting on what was discussed in the meetings and at media briefings. Not only was there no ongoing current information, there was also no institutional memory being created. In the following two years, the Constitutional Assembly and Bill of Rights process and the drafting of legislation setting up the Chapter 9 institutions resulted in a rapid rise in the number of meetings.</p>

					<p><Tween from={{ opacity: 0, y: -100 }} to={{ opacity: 1, y: 0, scrollTrigger: {trigger: '.pullout2', start: '-200px center', end: '200px center', scrub: 0.5} }} ><div className="pullout left pullout2">
					The Black Sash, Institute for Democracy in South Africa, and Human Rights Committee, although dealing with different issues, were all concerned with trying to get as much information as possible
					</div></Tween>At this time, a number of advocacy organisations were trying, individually, to follow committees pertinent to their areas of interest, largely so that their representatives would then be in a better position to make public submissions. The Black Sash, Institute for Democracy in South Africa, and Human Rights Committee (an NGO not to be confused with the SAHRC), although dealing with different issues, were all concerned with trying to get as much information as possible about the workings of the parliamentary committees, for the purpose of their advocacy efforts.</p>

					<p>These three bodies collaborated and managed to build up a team of volunteers, who were reimbursed for their transport costs only, to attend and take hand-written notes from the meetings they attended, which were then circulated between the three organisations. There was some difficulty in achieving consistency through the use of volunteers only. <Tween from={{ opacity: 0, y: -100 }} to={{ opacity: 1, y: 0, scrollTrigger: {trigger: '.pullout3', start: '-200px center', end: '200px center', scrub: 0.5} }} ><div className="pullout right pullout3">
					These three bodies collaborated and managed to build up a team of volunteers, who were reimbursed for their transport costs only, to attend and take hand-written notes from the meetings they attended, which were then circulated between the three organisations.
					</div></Tween>Over time, it also became apparent that there was a greater need in broader civil society for independent, unbiased, consistently accurate, and timely information about the workings of the committees, which was not available from parliamentary sources, to enable other bodies to monitor, intervene and hold both the executive and Parliament accountable.</p>

					<p>The decision was therefore taken by these three bodies to form the Parliamentary Monitoring Group (PMG), a formal structure that would make use of paid interns, and have a full-time management structure, to prepare reports of committee meetings. Slightly more formal report forms were devised that required those attending the meetings to answer a number of questions about the format, structure, and functioning of the meetings, and to record the main points and all MP questions and presenter responses. These handwritten forms were circulated by fax. In the years up to 1997, PMG's paid interns and volunteers reported back on the proceedings of as many committees as its resources and funding would allow.</p>

					<p>Over these years, the system developed so that reports now had to be submitted in typed format, with strict deadlines for submission once payment was made for the reporting.</p>

					<p><Tween from={{ opacity: 0, y: -100 }} to={{ opacity: 1, y: 0, scrollTrigger: {trigger: '.pullout6', start: '-200px center', end: '200px center', scrub: 0.5} }} ><div className="pullout left pullout6">
					By 2000, PMG was managing to attend all parliamentary committees.
					</div></Tween>In 1998, it launched a website on which its reports and other targeted information were published and made available to subscribers and other organisations exempt from paying subscriptions. By 2000, PMG was managing to attend all parliamentary committees.</p>

					<p>Initially, PMG managed to work without charging subscriptions, but by 2002, when donor funding was diminishing and costs were increasing, the decision was taken to charge subscriptions to commercial institutions and government parastatals for some committee reports, to build sustainability.</p>

					<p>Despite consistent bureaucratic hurdles, a sometimes apathetic public, and a shortage of requisite resources (funding, time, labour), PMG was able to continue growing and innovating. Its offerings were expanded over time.</p>
				</div>
			</section>

			<Timeline timeline={timeline1} tid="timeline1"/>

			<section className="text-slide">
				<div className="text-slide-inner">
					<p>PMG has carved out a unique position in the South African landscape. Our non-partisan approach, and consistent and reliable dissemination of information is relied upon by lawmakers, their staff, political parties, academia, civil society, law firms, commercial companies, and the public at large.</p>

					<p>Over the years, various court judgments, legislation, and commissions of inquiries have introduced important aspects of public participation, inclusion, access to information, and transparency, which vindicated our initial efforts and remains a guiding light that continues to drive PMG's growth and ambitions.</p>

					<p><Tween from={{ opacity: 0, y: -100 }} to={{ opacity: 1, y: 0, scrollTrigger: {trigger: '.pullout4', start: '-200px center', end: '200px center', scrub: 0.5} }} ><div className="pullout right pullout4">
					Over the years, we have trained and prepared thousands of monitors, mostly students, on attending meetings and report writing, giving them access to the coalface of accountability, government and law-making.
					</div></Tween>Despite our humble roots, PMG has established quite a machinery, run by a permanent staff of seven. This core machinery is also largely made possible by our monitors, our foot soldiers accessing meetings as PMG representatives and dutiful notetakers. Over the years, we have trained and prepared thousands of monitors, mostly students, on attending meetings and report writing, giving them access to the coalface of accountability, government and law-making. We also rely on a small team of editors, most having started as monitors, now guiding new recruits, to review reports before publishing them on the website. Others have a role to play in ensuring documents relevant to the meeting are secured and uploaded, videos and audios are uploaded, legislation is updated, calls for comment are advertised and MP profiles are updated, to touch on only a few facets of the website. It really is a team effort. Looking back, thousands of monitors have passed through our doors, some of whom have become MPs - a real full circle moment. Tens of thousands of reports have been published and read over these 25 years.</p>

					<p>When Covid hit and physical meetings were banned in the lockdown, PMG had to adapt to “attending” meetings virtually via the Zoom platform. This was also an interesting point in our history which we have navigated. Through our consistency and reliability, our website users continued to grow during this time.</p>

					<p><Tween from={{ opacity: 0, y: -100 }} to={{ opacity: 1, y: 0, scrollTrigger: {trigger: '.pullout5', start: '-200px center', end: '200px center', scrub: 0.5} }} ><div className="pullout left pullout5">
					In addition, we use our data and experience to produce research on the functioning of the legislature, with the aim of raising standards.
					</div></Tween>In addition, we use our data and experience to produce research on the functioning of the legislature, with the aim of raising standards.</p>

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

			<Testimonials testimonials={testimonials} />


		</>
	);
}

const container = document.getElementById('root');
const root = createRoot(container);
root.render(<App />);