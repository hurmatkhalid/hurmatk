import React from 'react';
import GitHubIcon from '@mui/icons-material/GitHub';
import OpenInBrowserIcon from '@mui/icons-material/OpenInBrowser';

class Mylinks extends React.Component {
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
			<span className="external-links">
				<a className="github-icon" href={this.props.githubLink}>
					<GitHubIcon
						style={{
							fontSize: 29,
							padding: '2px',
							color: 'var(--highlight)',
						}}></GitHubIcon>
				</a>
				{this.props.openLink && (
					<a className="open-icon" href={this.props.openLink}>
						<OpenInBrowserIcon
							style={{
								fontSize: 32,
								padding: '2px',
								color: 'var(--highlight)',
							}}></OpenInBrowserIcon>
					</a>
				)}
			</span>
		);
	}
}

export default Mylinks;
