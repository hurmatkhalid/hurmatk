import React from 'react';
import FadeInSection from './FadeInSection';
import EmailIcon from '@mui/icons-material/Email';
import '../styles/Intro.css';
import Typewriter from 'typewriter-effect';
import Animate from './animate';

class Intro extends React.Component {
	constructor() {
		super();
		this.state = {
			expanded: true,
			activeKey: '1',
			visible: true,
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
			<div id="intro">
				<Animate />
				<span className="introTitle" id="typewriter">
					<Typewriter
						onInit={(typewriter) => {
							typewriter
								.typeString('hi! I am ')
								.typeString(
									'<span style="color: var(--highlight); font-weight: bold;">hurmat.</span>'
								)
								.pauseFor(1000)
								// .deleteAll()
								.start();
						}}
					/>
				</span>
				<FadeInSection>
					<div className="introSubtitle">bringing imagination to reality</div>
					<div className="introDescription">
						I am based in Kashmir. I love exploring new technologies and
						applying them in real life. I like to work on projects that are
						meaningful and impactful.
					</div>
					<a href="mailto:hurmatkhalid1822@gmail.com" className="introContact">
						<EmailIcon />
						{' ' + 'Say hi!'}
					</a>
				</FadeInSection>
			</div>
		);
	}
}
export default Intro;
