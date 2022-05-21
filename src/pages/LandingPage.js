import React from 'react';
import { styled } from '@mui/material/styles';
import { Box, Typography } from '@mui/material';
import { Link } from 'react-scroll';
// icons
import { FiArrowDown } from 'react-icons/fi';

import PropTypes from 'prop-types';
import SocialLinks from '../components/SocialLinks';
import Wave from '../assets/layered-waves-haikei.svg';

const PREFIX = 'LandingPage';

const classes = {
	hero: `${PREFIX}-hero`,
	landingName: `${PREFIX}-landingName`,
	landingDesc: `${PREFIX}-landingDesc`,
	ScrollDown: `${PREFIX}-scrollDown`,
	// class to add to the hero when the page is scrolled down
	scrolled: `${PREFIX}-scrolled`,
	// class to add to the hero when the page is scrolled up
	unscrolled: `${PREFIX}-unscrolled`,
};

const StyledBox = styled(Box)(({ theme }) => ({
	[`&.${classes.hero}`]: {
		display: 'flex',
		flexDirection: 'column',
		flexWrap: 'wrap',
		color: '#000000',
		textAlign: 'center',
		alignItems: 'center',
		justifyContent: 'center',
		minHeight: '100vh',
		backgroundRepeat: 'no-repeat',
		backgroundSize: 'cover',
		backgroundImage: `url(${Wave})`,
		[theme.breakpoints.down('sm')]: {
			flexDirection: 'column',
			fontSize: theme.spacing(2),
		},
	},

	[`&.${classes.scrolled}`]: {
		opacity: 0,
		transition: 'opacity 0.8s	',
	},
	[`&.${classes.unscrolled}`]: {
		opacity: 1,
		transition: 'opacity 0.8s',
	},

	[`& .${classes.landingName}`]: {
		padding: '0.7rem',
	},

	[`& .${classes.landingDesc}`]: {
		padding: '0.7rem',
	},

	[`& .${classes.ScrollDown}`]: {
		padding: '1rem',
		marginTop: '1.5rem',
		fontSize: '2.5rem',
		color: '#000000',
		'&:hover': {
			// when mouse comes near the button pause the animation
			animation: 'none',
			cursor: 'pointer',
		},
		// animation with the scrollDownAnimation that pulsates the button
		animation: 'pulsateButton 1.5s infinite both',
		animationTimingFunction: 'ease-in-out',
		'@keyframes pulsateButton': {
			'0%': {
				transform: 'scale(1)',
			},
			'50%': {
				transform: 'scale(1.3)',
			},
			'100%': {
				transform: 'scale(1)',
			},
		},
	},
}));

export default function LandingPage({ isMobile }) {
	// when the page is scrolled down, the hero section is hidden
	// and the hero section is shown
	const handleScroll = () => {
		if (window.scrollY > 500) {
			document
				.querySelector(`.${classes.hero}`)
				.classList.add(classes.scrolled);
			document
				.querySelector(`.${classes.hero}`)
				.classList.remove(classes.unscrolled);
		} else {
			document
				.querySelector(`.${classes.hero}`)
				.classList.remove(classes.scrolled);
			document
				.querySelector(`.${classes.hero}`)
				.classList.add(classes.unscrolled);
		}
	};
	React.useEffect(() => {
		window.addEventListener('scroll', handleScroll);
		return () => {
			window.removeEventListener('scroll', handleScroll);
		};
	}, []);

	return (
		<StyledBox className={classes.hero} data-testid="hero">
			<Typography className={classes.landingName} variant="h1">
				Hello, I am Arshad!
			</Typography>

			<Typography className={classes.landingDesc} variant="body1">
				<b>Computer Science</b> Student and <b>Software Engineer</b>.
			</Typography>
			<Typography variant="body1">
				Get in touch <b>@</b>
				<SocialLinks
					sx={{
						color: '#000000',
						transition: 'all 0.3s ease-out',
						'&:hover': {
							transform: 'scale(1.2)',
							transition: 'all 0.13s ease-in',
						},
					}}
				/>
			</Typography>
			{!isMobile ? (
				<Link
					role="button"
					to="aboutme"
					spy
					smooth
					className={classes.ScrollDown}
					data-testid="scrollDown"
					aria-label="scroll down button"
					data-block="scrolldown">
					<FiArrowDown />
				</Link>
			) : null}
		</StyledBox>
	);
}

LandingPage.propTypes = {
	isMobile: PropTypes.bool,
};
