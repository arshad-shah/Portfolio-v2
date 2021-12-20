import React from 'react';
import { styled } from '@mui/material/styles';
import { Box, Typography } from '@mui/material';
import { Link } from 'react-scroll';
import Resume from '../../assets/ArshadResume.pdf';

const PREFIX = 'Desktop';

const classes = {
	menuItem: `${PREFIX}-menuItem`,
};

const StyledBox = styled(Box)(({ theme }) => ({
	[`& .${classes.menuItem}`]: {
		marginRight: '1.5rem',
		'&:hover': {
			backgroundColor: '#fff152',
			boxShadow: '0px 0px 10px #1e1e1e',
			transform: 'scale(1.3)',
			fontWeight: 'bold',
			transition: 'all 0.13s ease-in',
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
		transition: 'all 0.3s ease-out',
		padding: '1rem',
	},
}));

export default function Desktop() {
	return (
		<StyledBox aria-label="desktopMenu" data-testid="desktopMenu">
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
		</StyledBox>
	);
}
