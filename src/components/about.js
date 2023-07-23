import React from 'react';
import '../styles/about.css';
import FadeInSection from './FadeInSection';

class about extends React.Component {
	constructor() {
		super();
		this.state = {
			expanded: true,
			activeKey: '1',
		};
		this.handleSelect = this.handleSelect.bind(this);
	}
	handleSelect(eventKey) {
		this.setState({
			activeKey: eventKey,
		});
	}
	render() {
		const one = (
			<p>
				I am currently a junior at National Institute of Technology, Srinagar,
				majoring in Computer Science Engineering. I am also pursuing a part-time
				bachelors in Data Science from Indian Institute of Technology, Madras.
			</p>
		);
		const two = (
			<p>
				I am a badminton player, freestyle skier, a wannabe film-maker, and an
				advocate for community engagement. I love long drives during sunset and
				bike rides during sunrise. I have lost count of the number of times I
				have watched The Office {`(I still watch).`} Last, I love places full of
				green trees and water.
			</p>
		);
		// const three = (
		// 	<p>
		// 		Lorem ipsum dolor sit amet consectetur adipisicing elit. Lorem ipsum
		// 	</p>
		// );
		const desc_items = [one, two];

		const tech_stack = [
			'C++',
			'Python',
			'Javascript',
			'Reactjs',
			'Nodejs',
			'HTML & CSS',
		];
		const tech_items = tech_stack.map((stack) => <li>{stack}</li>);
		return (
			<div id="about">
				<FadeInSection>
					<div className="sectionHeader">
						<span className="sectionTitle">about </span>
					</div>
					<div className="aboutContent">
						<div className="aboutDescription">
							{[one]}
							{'Here are some technologies I have been working with:'}
							<ul className="tech-stack">
								{tech_stack.map(function (tech_item, i) {
									return (
										<FadeInSection delay={`${i + 1}00ms`}>
											<li>{tech_item}</li>
										</FadeInSection>
									);
								})}
							</ul>
							{[two]}
						</div>
						<div className="aboutImage">
							<img src="../mat/myphoto.jpeg" alt="" />
						</div>
					</div>
				</FadeInSection>
			</div>
		);
	}
}

export default about;
