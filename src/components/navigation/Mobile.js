import React from 'react';
import { Box, List, ListItem, Link as ExternalLink } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import { Link } from 'react-scroll';
import Resume from '../../assets/ArshadResume.pdf';

const useStyles = makeStyles((theme) => ({
	button: {
		'&:hover': {
			backgroundColor: 'transparent',
		},
		color: theme.palette.text.primary,
		fontWeight: 'bold',
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
		padding: '10px',
	},
	mobileMenuItem: {
		justifyContent: 'center',
		padding: '10px',
	},
}));

export default function Mobile() {
	const classes = useStyles();

	return (
		<Box aria-label="mobileMenu" data-toggle="mobileMenu">
			<List className={classes.mobileMenuList}>
				<ListItem button className={classes.mobileMenuItem}>
					<Link
						className={classes.button}
						data-block="Aboutmemenuitemmobile"
						to="aboutme"
						data-testid="aboutmeOption"
						spy
						smooth
						aria-label="About Me">
						ABOUT ME
					</Link>
				</ListItem>
				<ListItem button className={classes.mobileMenuItem}>
					<Link
						className={classes.button}
						data-block="Projectsmenuitemmobile"
						to="projects"
						data-testid="projectsOption"
						spy
						smooth
						aria-label="Projects">
						PROJECTS
					</Link>
				</ListItem>
				<ListItem button className={classes.mobileMenuItem}>
					<ExternalLink
						className={classes.button}
						data-testid="resumeOption"
						variant="outlined"
						href={Resume}
						data-block="Resumemenuitemmobile"
						aria-label="Resume">
						RESUME
					</ExternalLink>
				</ListItem>
			</List>
		</Box>
	);
}
