import { Typography, Toolbar, Box, Chip } from '@material-ui/core';
import React from 'react';
import useStyles from '../styles/aboutMe.styles';
import Picture from '../assets/Picture.webp';
import { aboutMeData } from '../data/aboutMeData';
import { LazyLoadImage } from 'react-lazy-load-image-component';

export default function Aboutme() {
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
						width={100}
					/>
				</Box>
				<Box className={classes.aboutMeDesc}>
					<Typography variant="body1">
						I am a student <b>Software Engineer</b> with a passion for building
						<b> Beautiful</b> and <b>Intuitive</b> user interfaces.
						<br />I have a passion for <b>Learning</b> new technologies and building
						products that <b>solve real-world problems</b>.
						<br />I have real world experience in <b>Frontend technologies</b> like
						<b> React </b>.
						<br />I am a <b>Team Player</b> and <b>Hard Worker</b> and I am always
						<b> Looking for new challenges</b>.
						<br />I have also worked with <b>Backend technologies</b> such as Node.js,
						Express.js, MongoDB, Firebase, and Firestore as well as with different
						frameworks such as NextJS, React Native, and Flutter.
						<br />I like designing and creating stuff for all domains from <b>
							Mobile
						</b>{' '}
						to <b>Desktop</b>.
						<br />
						My goal is to make <b>Cross Platform</b>, <b>Efficient</b>, and{' '}
						<b>Clean Application</b> that give an easy and Perfect experience.
					</Typography>

					<Typography className={classes.subheading} variant="h5">
						{aboutMeData.Technologies}
					</Typography>

					<Typography variant="body1">
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

					<Typography className={classes.subheading} variant="h5">
						Work Experience:
						<Typography variant="body1">
							{aboutMeData.jobTitle}
							<Typography variant="subtitle1">{aboutMeData.jobCompany}</Typography>
						</Typography>
						<Typography variant="body2">{aboutMeData.jobDescription}</Typography>
						<Typography variant="subtitle2">{aboutMeData.jobDate}</Typography>
					</Typography>
				</Box>
			</Box>
		</Box>
	);
}
