import React from 'react';
import { Box, List, ListItem, Typography } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import { Link } from 'react-scroll';
import Resume from '../../assets/ArshadResume.pdf';
import PropTypes from 'prop-types';

const useStyles = makeStyles((theme) => ({
	button: {
		'&:hover': {
			backgroundColor: 'transparent',
		},
		'&:active': {
			backgroundColor: theme.palette.secondary.main,
		},
		'&:focus': {
			backgroundColor: theme.palette.secondary.main,
		},
		color: theme.palette.text.primary,
		padding: '0.5rem',
		textDecoration: 'none',
		cursor: 'pointer',
		borderRadius: '0.5rem',
		transition: 'all 0.5s ease',
	},
	mobileMenuList: {
		display: 'flex',
		flexDirection: 'row',
		bottom: '0',
		position: 'fixed',
		width: '100%',
		backgroundColor: theme.palette.primary.main,
		zIndex: '100',
	},
	mobileMenuItem: {
		justifyContent: 'center',
	},
}));

export default function Mobile() {
	const classes = useStyles();

	return (
		<Box aria-label="mobileMenu" data-toggle="mobileMenu">
			<List className={classes.mobileMenuList}>
				<ListItem className={classes.mobileMenuItem}>
					<Link
						className={classes.button}
						data-block="Aboutmemenuitemmobile"
						to="aboutme"
						data-testid="aboutmeOption"
						spy
						smooth
						aria-label="About Me">
						<Typography variant="button">About Me</Typography>
					</Link>
				</ListItem>
				<ListItem className={classes.mobileMenuItem}>
					<Link
						className={classes.button}
						data-block="Projectsmenuitemmobile"
						to="projects"
						data-testid="projectsOption"
						spy
						smooth
						aria-label="Projects">
						<Typography variant="button">Projects</Typography>
					</Link>
				</ListItem>
				<ListItem className={classes.mobileMenuItem}>
					<a
						className={classes.button}
						data-testid="resumeOption"
						variant="outlined"
						href={Resume}
						data-block="Resumemenuitemmobile"
						aria-label="Resume">
						<Typography variant="button">Resume</Typography>
					</a>
				</ListItem>
			</List>
		</Box>
	);
}

Mobile.propTypes = {
	click: PropTypes.bool.isRequired,
	closeMobileMenu: PropTypes.func.isRequired,
	handleMenu: PropTypes.func.isRequired,
};
