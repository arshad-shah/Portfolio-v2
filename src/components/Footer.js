import { Box, IconButton, Tooltip, Typography } from '@material-ui/core';
import React from 'react';
import PropTypes from 'prop-types';

// icons
import GitHubIcon from '@material-ui/icons/GitHub';
import LinkedInIcon from '@material-ui/icons/LinkedIn';
import MailIcon from '@material-ui/icons/Mail';
import useStyles from '../styles/Footer.styles';

export default function Footer({ isMobile }) {
	const classes = useStyles();
	return (
		<Box className={isMobile ? classes.rootMobileFooter : classes.root}>
			<Typography variant="overline">
				&copy; {new Date().getFullYear()} Arshad Shah
			</Typography>
			<Box>
				<Tooltip title="Github Profile" arrow>
					<IconButton
						role="button"
						className={classes.socialLinks}
						color="default"
						aria-label="link to Github account of Arshad shah"
						data-block="linktoGithub"
						data-testid="githubForFooter"
						href="https://github.com/arshad-shah">
						<GitHubIcon fontSize="large" />
					</IconButton>
				</Tooltip>

				<Tooltip title="LinkedIn Profile" arrow>
					<IconButton
						role="button"
						className={classes.socialLinks}
						color="default"
						aria-label="link to Linkedin account of Arshad shah"
						data-block="linktoLinkedin"
						data-testid="linkedinForFooter"
						href="https://www.linkedin.com/in/arshadshah">
						<LinkedInIcon fontSize="large" />
					</IconButton>
				</Tooltip>

				<Tooltip title="Email Me" arrow>
					<IconButton
						className={classes.socialLinks}
						color="default"
						role="button"
						aria-label="link to mail account of Arshad shah"
						data-block="linktoMail"
						data-testid="emailForFooter"
						href="mailto:arshad@arshadshah.com">
						<MailIcon fontSize="large" />
					</IconButton>
				</Tooltip>
			</Box>
			<Typography variant="subtitle2">V2.5 Date: 24 / November / 2021</Typography>
		</Box>
	);
}

Footer.propTypes = {
	isMobile: PropTypes.bool.isRequired,
};
