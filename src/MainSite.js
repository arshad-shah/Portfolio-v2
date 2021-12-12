import React, { lazy, Suspense } from 'react';
import { styled } from '@mui/material/styles';
import { useMediaQuery, useTheme } from '@mui/material';

import CssBaseline from '@mui/material/CssBaseline';
import Fab from '@mui/material/Fab';
import { FiArrowUp } from 'react-icons/fi';
import { ScrollToFade, ScrollToTop } from './App.util';

import Loading from './components/Loading';
import Mobile from './components/navigation/Mobile';

import backgroundImage from './assets/background.webp';
import backgroundImageMobile from './assets/backgroundmobile.webp';
const PREFIX = 'MainSite';

const classes = {
	root: `${PREFIX}-root`,
	fab: `${PREFIX}-fab`,
};

const Root = styled('div')(({ theme }) => ({
	[`&.${classes.root}`]: {
		minHeight: '100vh',
		minWidth: '100%',
		[theme.breakpoints.down('sm')]: {
			backgroundImage: `url(${backgroundImageMobile})`,
		},
		backgroundImage: `url(${backgroundImage})`,
		backgroundRepeat: 'no-repeat',
		backgroundSize: 'cover',
		backgroundAttachment: 'fixed',
	},

	[`& .${classes.fab}`]: {
		fontSize: '2rem',
		[theme.breakpoints.down('sm')]: {
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

function MainSite(props) {
	const theme = useTheme();
	const isMobile = useMediaQuery(theme.breakpoints.down('md'));
	return (
		<Root className={classes.root}>
			<Suspense fallback={renderLoader()}>
				<CssBaseline />
				<Header isMobile={isMobile} data-testid="header" />
				{isMobile ? <Mobile /> : null}
				<ScrollToFade {...props}>
					<LandingPage isMobile={isMobile} />
				</ScrollToFade>
				<Aboutme />
				<Projects data-testid="projectsSection" />
				<ScrollToTop {...props}>
					<Fab
						color="secondary"
						data-block="backtotopbutton"
						data-testid="backtoTopButton"
						size="large"
						className={classes.fab}
						aria-label="scroll back to top">
						<FiArrowUp />
					</Fab>
				</ScrollToTop>
				<Footer isMobile={isMobile} />
			</Suspense>
		</Root>
	);
}

export default MainSite;
