import React from 'react';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import PropTypes from 'prop-types';
import FadeInSection from './FadeInSection';
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import '../styles/experience.css';

const isHorizontal = window.innerWidth < 600;

function TabPanel(props) {
	const { children, value, index, ...other } = props;

	if (isHorizontal) {
		return (
			<div
				role="tabpanel"
				hidden={value !== index}
				id={`full-width-tabpanel-${index}`}
				aria-labelledby={`full-width-tab-${index}`}
				{...other}>
				{value === index && (
					<Box p={3}>
						<Typography>{children}</Typography>
					</Box>
				)}
			</div>
		);
	} else {
		return (
			<div
				role="tabpanel"
				hidden={value !== index}
				id={`vertical-tabpanel`}
				{...other}>
				{value === index && (
					<Box p={3}>
						<Typography>{children}</Typography>
					</Box>
				)}
			</div>
		);
	}
}
TabPanel.propTypes = {
	children: PropTypes.node,
	index: PropTypes.any.isRequired,
	value: PropTypes.any.isRequired,
};
function a11yProps(index) {
	if (isHorizontal) {
		return {
			id: `full-width-tab-${index}`,
			'aria-controls': `full-width-tabpanel-${index}`,
		};
	} else {
		return {
			id: `vertical-tab-${index}`,
		};
	}
}
// const useStyles = makeStyles((theme) => ({
// 	root: {
// 		flexGrow: 1,
// 		backgroundColor: 'theme.palette.background.paper',
// 		display: 'flex',
// 		height: 300,
// 	},
// 	tabs: {
// 		// borderRight: `1px solid ${theme.palette.divider}`,
// 	},
// }));
const JobList = () => {
	// const classes = useStyles();
	const [value, setValue] = React.useState(0);
	const experienceItems = {
		'21C': {
			jobTitle: 'Cofounder, Social Media and Tech lead @',
			duration: 'JUL 2020 - PRESENT',
			desc: [
				'21Consequences is a non-profit organisation, to help students with their career decisions by guiding them through various academic phases of their high school life.',
				'This includes spreading awareness about various exams and opportunities through social media platforms, organizing skill based workshops, and providing one on one mentorship.',
				'Worked with a team of 20 members, managed workflow of the organisation, created one of the biggest student community of Kashmir.',
			],
		},
		GDSC: {
			jobTitle: 'Lead @',
			duration: 'JUL 2023 - PRESENT',
			desc: [
				'Founded the Google Developer Student club at my college.',
				'Fostering a collaborative learning environment to help peers advance their technology skills.',
				'Along with my team, we host hands-on workshops and events on different skills to cultivate and enhance the coding culture at campus.',
			],
		},
		Tedx: {
			jobTitle: 'Creativity and Social Media Team @',
			duration: 'March 2023 - PRESENT',
			desc: [
				'Handled the social media and marketing of Tedx NIT Srinagar.',
				'Created novel and captivating ideas that engage and resonate with our audience while effectively conveying our campaign’s message.',
				'I analyze social media engagement and take feedback to ensure improvement in upcoming events.',
			],
		},
	};
	const handleChange = (event, newValue) => {
		setValue(newValue);
	};
	return (
		<div
			className="wrapper"
			// className={classes.root}
		>
			<Tabs
				orientation={!isHorizontal ? 'vertical' : null}
				variant={isHorizontal ? 'fullWidth' : 'scrollable'}
				value={value}
				onChange={handleChange}
				className="tabs">
				{Object.keys(experienceItems).map((key, i) => (
					<Tab label={key} {...a11yProps(i)} />
				))}
			</Tabs>
			{Object.keys(experienceItems).map((key, i) => (
				<TabPanel value={value} index={i} className="tabPanel">
					<span className="joblist-job-title">
						{experienceItems[key]['jobTitle'] + ' '}
					</span>
					<span className="joblist-job-company">{key}</span>
					<div className="joblist-duration">
						{experienceItems[key]['duration']}
					</div>
					<ul className="job-description">
						{experienceItems[key]['desc'].map(function (descItem, i) {
							return (
								<FadeInSection delay={`${i + 1}00ms`}>
									<li key={i}>{descItem}</li>
								</FadeInSection>
							);
						})}
					</ul>
				</TabPanel>
			))}
		</div>
	);
};
export default JobList;
