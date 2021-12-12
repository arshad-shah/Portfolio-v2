import { Typography, Toolbar, Box, Chip } from '@mui/material';
import React from 'react';
import useStyles from '../styles/aboutMe.styles';
import Picture from '../assets/Picture.webp';
import { aboutMeData } from '../data/aboutMeData';
import { LazyLoadImage } from 'react-lazy-load-image-component';

export default function Aboutme(props) {
	const classes = useStyles();
	return (
		<Box className={classes.root}>
			<Toolbar className={classes.aboutMeLink} id="aboutme" />
			<Typography align="center" gutterBottom variant="h2">
				{aboutMeData.aboutMeTitle}
			</Typography>
			<Box className={classes.row}>
				<Box className={classes.aboutMePicture}>
					<LazyLoadImage
						aria-label="Picture of Arshad shah."
						alt="Picture of Arshad shah."
						height={150}
						className={classes.picture}
						src={Picture}
						width={150}
					/>
				</Box>
				<Box className={classes.aboutMeDesc}>
					<Typography gutterBottom variant="body1">
						I am a student <b>Software Engineer</b> with a passion for building
						<b> Beautiful</b> and <b>Intuitive</b> user interfaces and <b>Learning</b>{' '}
						new technologies to building products that <b>solve real-world problems</b>.
						<br />I am a <b>Team Player</b> and <b>Hard Worker</b> and I am always
						<b> Looking for new challenges</b>.
						<br />I have real world experience in <b>Frontend technologies</b> like
						<b> React </b>. I have also worked with <b>Backend technologies</b> such as
						Node.js, Express.js, MongoDB, Firebase, and Firestore as well as with
						different frameworks such as NextJS, React Native, and Flutter.
						<br />I like designing and creating stuff for all domains from <b>
							Mobile
						</b>{' '}
						to <b>Desktop</b>.
						<br />
						My goal is to make <b>Cross Platform</b>, <b>Efficient</b>, and{' '}
						<b>Clean Application</b> that give an easy and Perfect experience.
					</Typography>

					<Typography gutterBottom className={classes.subheading} variant="h5">
						{aboutMeData.Technologies}
					</Typography>

					<Typography gutterBottom variant="body1">
						{aboutMeData.TechnologiesList.map((tech) => (
							<Chip
								color="secondary"
								key={tech}
								label={tech}
								className={classes.TechChip}
								data-testid="languageChip"
							/>
						))}
					</Typography>

					<Typography className={classes.subheading} gutterBottom variant="h5">
						Work Experience
					</Typography>

					<Typography gutterBottom variant="body1">
						<b>Software Engineer</b> - Intern {aboutMeData.jobDate}
					</Typography>
					<Typography gutterBottom variant="subtitle1">
						<b>Houghton Mifflin Harcourt</b> - Dublin, Ireland
					</Typography>
					<Typography variant="body2">
						During this <b>Internship</b> i worked on a <b>Frontend Team</b> team
						responsible for the HMH flagship product <b>HMH ED</b>.
						<br />
						Here i learned the <b>React framework</b> using the <b>SPA pattern</b>, unit
						testing, integration testing, and End to End testing.
						<br />I learned crucial skills, following an <b> Agile development </b>
						methodology participating in <b>sprints</b>, and completing tickets.
						<br />
						The most important aspect that I learned was the CI pipeline for building
						complex software and triaging the build process across multiple teams.
					</Typography>
				</Box>
			</Box>
		</Box>
	);
}
