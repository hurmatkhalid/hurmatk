import React from 'react';
import '../styles/Footer.css';
import FadeInSection from './FadeInSection';

class Foot extends React.Component {
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
			<FadeInSection>
				<div id="credits">
					<div className="ending-credits">
						<div>Come again ☺︎</div>
						<div>Feedback is welcome</div>
					</div>
				</div>
			</FadeInSection>
		);
	}
}

export default Foot;
