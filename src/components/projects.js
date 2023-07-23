import React from 'react';
import FolderOpenIcon from '@mui/icons-material/FolderOpen';
// import GitHubIcon from '@mui/icons-material/GitHub';
import FadeInSection from './FadeInSection';
import '../styles/projects.css';
import Mylinks from './Mylinks';
class Projects extends React.Component {
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
		const projects = {
			'Brow Browser': {
				desc: 'Website for my organisation',
				techStack: 'Next.js, TypeScript, TailwindCSS, Firebase',
				link: 'https://github.com/hurmatkhalid/brow',
				open: '#',
			},
			'21Consequences Website': {
				desc: 'Website for my organisation',
				techStack: 'Next.js, TypeScript, TailwindCSS, Firebase',
				link: 'https://github.com/hurmatkhalid/21consequences',
				open: 'http://21consequences.vercel.app/',
			},
			'Google Clone': {
				desc: ' can you tell if this is real?',
				techStack: 'React, Firebase, Js, CSS',
				link: 'https://github.com/hurmatkhalid/Google-Clone',
				open: 'https://clone-7ad40.web.app/',
			},
		};
		return (
			<div id="projects">
				<div className="section-header ">
					<span className="section-title">Software Creations</span>
				</div>
				<div className="project-container">
					<ul className="projects-grid">
						{Object.keys(projects).map((key, i) => (
							<FadeInSection delay={`${i + 1}00ms`}>
								<li className="projects-card">
									<div className="card-header">
										<div className="folder-icon">
											<FolderOpenIcon style={{ fontSize: 35 }}></FolderOpenIcon>
										</div>
										<Mylinks
											githubLink={projects[key]['link']}
											openLink={projects[key]['open']}></Mylinks>
									</div>

									<div className="card-title">{key}</div>
									<div className="card-desc">{projects[key]['desc']}</div>
									<div className="card-tech">{projects[key]['techStack']}</div>
								</li>
							</FadeInSection>
						))}
					</ul>
				</div>
			</div>
		);
	}
}
export default Projects;
