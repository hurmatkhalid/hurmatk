import React from 'react';
import '../styles/SideBarNav.css';
import { Sidenav } from 'rsuite';
import FadeInSection from './FadeInSection';
import EmailIcon from '@mui/icons-material/Email';
import GitHubIcon from '@mui/icons-material/GitHub';
import LinkedInIcon from '@mui/icons-material/LinkedIn';

const isMobile = window.innerWidth < 600;

class SideBarNav extends React.Component {
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
		const { expanded } = this.state;
		const links = [
			<a href="#intro">/home</a>,
			<a href="#about">/about</a>,
			<a href="#experience">/experience</a>,
			<a href="#projects">/software-creations</a>,
		];
		return (
			<div className="sidebarNav">
				{!isMobile && (
					<Sidenav
						expanded={expanded}
						defaultOpenKeys={['3', '4']}
						activeKey={this.state.activeKey}
						onSelect={this.handleSelect}
						appearance={'subtle'}>
						<Sidenav.Body>
							<div className="sidebar-links">
								{links.map((link, i) => (
									<FadeInSection delay={`${i + 1}00ms`}>
										<div>{link}</div>
									</FadeInSection>
								))}
							</div>
						</Sidenav.Body>
					</Sidenav>
				)}
				<div className="sidebarLogos" href="/">
					<a href="mailto:hurmatkhalid1822@gmail.com" className="logo">
						<EmailIcon style={{ fontSize: 20 }} />
					</a>
					<a href="https://github.com/hurmatkhalid" className="logo">
						<GitHubIcon style={{ fontSize: 20 }} />
					</a>
					<a href="https://www.linkedin.com/in/hurmatkhalid" className="logo">
						<LinkedInIcon style={{ fontSize: 20 }} />
					</a>
				</div>
			</div>
		);
	}
}
export default SideBarNav;
