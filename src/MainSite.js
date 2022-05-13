import React, { lazy, Suspense, useEffect } from 'react';
import { styled } from '@mui/material/styles';
import { useMediaQuery, useTheme } from '@mui/material';

import CssBaseline from '@mui/material/CssBaseline';
import Fab from '@mui/material/Fab';
import { FiArrowUp } from 'react-icons/fi';

import Loading from './components/Loading';
import Mobile from './components/navigation/Mobile';
import Link from 'react-scroll/modules/components/Link';

const PREFIX = 'MainSite';

const classes = {
	root: `${PREFIX}-root`,
	fab: `${PREFIX}-fab`,
};

const Root = styled('div')(({ theme }) => ({
	[`& .${classes.fab}`]: {
		fontSize: '2rem',
		bottom: theme.spacing(2),
		right: theme.spacing(2),
		display: 'none',
		position: 'fixed',
		zIndex: '1000',
		[theme.breakpoints.down('sm')]: {
			marginBottom: '4rem',
		},
		[theme.breakpoints.down('md')]: {
			marginBottom: '4rem',
		},
	},
}));

const Header = lazy(() => import('./components/Header'));
const LandingPage = lazy(() => import('./pages/LandingPage'));
const Aboutme = lazy(() => import('./pages/Aboutme'));
const Projects = lazy(() => import('./pages/Projects'));
const Footer = lazy(() => import('./components/Footer'));

const renderLoader = () => <Loading />;

function MainSite() {
	const theme = useTheme();
	const isMobile = useMediaQuery(theme.breakpoints.down('md'));

	// a function that shows and hides the scroll to top button based on the scroll position
	const handleScroll = () => {
		const scrollPosition = window.scrollY;
		const scrollButton = document.getElementById('scroll-to-top');
		// if the scroll position is greater than 100px, show the scroll to top button
		if (scrollPosition > 100) {
			scrollButton.style.display = 'block';
		}
		// if the scroll position is less than 100px, hide the scroll to top button
		else {
			scrollButton.style.display = 'none';
		}
	};

	useEffect(() => {
		window.addEventListener('scroll', handleScroll);
		return () => {
			window.removeEventListener('scroll', handleScroll);
		};
	}, []);

	return (
		<Root className={classes.root}>
			<Suspense fallback={renderLoader()}>
				<CssBaseline />
				<Header isMobile={isMobile} data-testid="header" />
				{isMobile ? <Mobile /> : null}
				<LandingPage isMobile={isMobile} />
				<Aboutme />
				<Projects data-testid="projectsSection" />

				<Link
					id="scroll-to-top"
					data-block="backtotopbutton"
					data-testid="backtoTopButton"
					aria-label="scroll back to top"
					to="back-to-top-anchor"
					spy
					smooth
					className={classes.fab}>
					<Fab color="secondary" size="large">
						<FiArrowUp />
					</Fab>
				</Link>
				<Footer isMobile={isMobile} />
			</Suspense>
		</Root>
	);
}

export default MainSite;
