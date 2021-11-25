import React from 'react';
import { Box, Typography } from '@material-ui/core';
import { Link } from 'react-scroll';
import { makeStyles } from '@material-ui/core/styles';
import Resume from '../../assets/ArshadResume.pdf';

const useStyles = makeStyles((theme) => ({
	menuItem: {
		marginRight: '1.5rem',
		'&:hover': {
			backgroundColor: '#fff152',
		},
		'&:active': {
			backgroundColor: 'transparent',
		},
		'&:visited': {
			backgroundColor: 'transparent',
		},
		'&:link': {
			backgroundColor: 'none',
		},
		color: '#000000',
		textDecoration: 'none',
		cursor: 'pointer',
		borderRadius: '0.5rem',
		transition: 'all 0.5s ease',
		padding: '1rem',
	},
}));
export default function Desktop() {
	const classes = useStyles();
	return (
		<Box aria-label="desktopMenu" data-testid="desktopMenu">
			<Link
				data-testid="aboutmeOption"
				to="aboutme"
				spy
				smooth
				data-block="Aboutmemenuitemdesktop"
				color="default"
				aria-label="About Me"
				className={classes.menuItem}>
				<Typography variant="button">About Me</Typography>
			</Link>
			<Link
				data-testid="projectsOption"
				to="projects"
				spy
				smooth
				data-block="Projectsmenuitemdesktop"
				color="default"
				aria-label="Projects"
				className={classes.menuItem}>
				<Typography variant="button">Projects</Typography>
			</Link>
			<a
				data-testid="resumeOption"
				aria-label="Resume"
				data-block="Resumemenuitemdesktop"
				href={Resume}
				color="default"
				className={classes.menuItem}>
				<Typography variant="button">Resume</Typography>
			</a>
		</Box>
	);
}
