import React from 'react';
import '../styles/experience.css';
import Elist from './explist.js';
import FadeInSection from './FadeInSection';

class Experience extends React.Component {
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
		return (
			<div id="experience">
				<FadeInSection>
					<div className="sectionHeader ">
						<span className="sectionTitle">experience</span>
					</div>
					<Elist></Elist>
				</FadeInSection>
			</div>
		);
	}
}
export default Experience;
