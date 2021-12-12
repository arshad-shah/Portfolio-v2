import { Box, IconButton, Tooltip, Typography } from '@mui/material';
import { styled } from '@mui/material/styles';
import React from 'react';
import PropTypes from 'prop-types';

// icons
import { FiGithub, FiLinkedin, FiMail } from 'react-icons/fi';
const PREFIX = 'Footer';

const classes = {
    root: `${PREFIX}-root`,
    rootMobileFooter: `${PREFIX}-rootMobileFooter`,
    socialLinks: `${PREFIX}-socialLinks`
};

const StyledBox = styled(Box)((
    {
        theme
    }
) => ({
    [`& .${classes.root}`]: {
		display: 'flex',
		flexDirection: 'column',
		backgroundColor: '#ffffff',
		flexWrap: 'wrap',
		alignContent: 'center',
		justifyContent: 'center',
		alignItems: 'center',
		padding: '2rem',
	},

    [`& .${classes.rootMobileFooter}`]: {
		display: 'flex',
		flexDirection: 'column',
		backgroundColor: '#ffffff',
		flexWrap: 'wrap',
		alignContent: 'center',
		justifyContent: 'center',
		alignItems: 'center',
		padding: '2rem',
		marginBottom: '3rem',
	},

    [`& .${classes.socialLinks}`]: {
		padding: '1rem',
		color: '#000000',
	}
}));

export default function Footer({ isMobile }) {

	return (
        <StyledBox className={isMobile ? classes.rootMobileFooter : classes.root}>
			<Typography variant="h6">&copy; {new Date().getFullYear()} Arshad Shah</Typography>
			<Box>
				<Tooltip title="Github Profile" arrow>
					<IconButton
						role="button"
						className={classes.socialLinks}
						color="default"
						aria-label="link to Github account of Arshad shah"
						data-block="linktoGithub"
						data-testid="githubForFooter"
						href="https://github.com/arshad-shah"
						size="large">
						<FiGithub />
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
						href="https://www.linkedin.com/in/arshadshah"
						size="large">
						<FiLinkedin />
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
						href="mailto:arshad@arshadshah.com"
						size="large">
						<FiMail />
					</IconButton>
				</Tooltip>
			</Box>
			<Typography variant="subtitle2">V2.7 Date: 09 / December / 2021</Typography>
		</StyledBox>
    );
}

Footer.propTypes = {
	isMobile: PropTypes.bool.isRequired,
};
