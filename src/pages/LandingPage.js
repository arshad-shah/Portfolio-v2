import React from 'react';
import { styled } from '@mui/material/styles';
import { Box, Typography, Button } from '@mui/material';
import { Link } from 'react-scroll';
// icons
import { FiArrowDown } from 'react-icons/fi';

import PropTypes from 'prop-types';
import SocialLinks from '../components/SocialLinks';
const PREFIX = 'LandingPage';

const classes = {
	hero: `${PREFIX}-hero`,
	landingIntro: `${PREFIX}-landingIntro`,
	landingName: `${PREFIX}-landingName`,
	landingDesc: `${PREFIX}-landingDesc`,
	ScrollDown: `${PREFIX}-scrollDown`,
};

const StyledBox = styled(Box)(({ theme }) => ({
	[`&.${classes.hero}`]: {
		display: 'flex',
		flexDirection: 'column',
		flexWrap: 'wrap',
		color: '#ffffff',
		textAlign: 'center',
		alignItems: 'center',
		justifyContent: 'center',
		minHeight: '100vh',
		[theme.breakpoints.down('sm')]: {
			flexDirection: 'column',
			fontSize: theme.spacing(2),
		},
	},

	[`& .${classes.landingIntro}`]: {
		padding: '0.7rem',
		[theme.breakpoints.down('sm')]: {
			paddingBottom: '0',
		},
	},

	[`& .${classes.landingName}`]: {
		padding: '0.7rem',
	},

	[`& .${classes.landingDesc}`]: {
		padding: '0.7rem',
	},

	[`& .${classes.ScrollDown}`]: {
		padding: '1rem',
		marginTop: '1rem',
		fontSize: '2rem',
	},
}));

export default function LandingPage({ isMobile }) {
	return (
		<StyledBox className={classes.hero} data-testid="hero">
			<Typography className={classes.landingIntro} variant="h4">
				Hi, My Name Is -
			</Typography>

			<Typography className={classes.landingName} variant="h2">
				Arshad Shah!
			</Typography>

			<Typography className={classes.landingDesc} variant="h4">
				A Third Year <b>Computer Science</b> Student and a <b>Software Engineer</b>.
			</Typography>
			<SocialLinks
				sx={{
					color: '#fdff95',
					transition: 'all 0.2s ease-out',
					'&:hover': {
						boxShadow: '0px 0px 10px #fdff95',
						transform: 'scale(1.2)',
						transition: 'all 0.2s ease-in',
					},
				}}
			/>
			{!isMobile ? (
				<Link to="aboutme" spy smooth>
					<Button
						data-testid="scrollDown"
						aria-label="scroll down button"
						size="large"
						className={classes.ScrollDown}
						color="secondary"
						variant="outlined"
						data-block="scrolldown">
						<FiArrowDown />
					</Button>
				</Link>
			) : null}
		</StyledBox>
	);
}

LandingPage.propTypes = {
	isMobile: PropTypes.bool.isRequired,
};
