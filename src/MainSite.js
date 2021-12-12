import React, { lazy, Suspense } from 'react';
import useStyles from './styles/App.styles';
import { useMediaQuery, useTheme } from '@material-ui/core';

import CssBaseline from '@material-ui/core/CssBaseline';
import Fab from '@material-ui/core/Fab';
import { FiArrowUp } from 'react-icons/fi';
import ScrollToTop, { ScrollToFade } from './App.util';

import Loading from './components/Loading';
import Mobile from './components/navigation/Mobile';

const Header = lazy(() => import('./components/Header'));
const LandingPage = lazy(() => import('./pages/LandingPage'));
const Aboutme = lazy(() => import('./pages/Aboutme'));
const Projects = lazy(() => import('./pages/Projects'));
const Footer = lazy(() => import('./components/Footer'));

const renderLoader = () => <Loading />;

function MainSite(props) {
	const classes = useStyles();
	const theme = useTheme();
	const isMobile = useMediaQuery(theme.breakpoints.down('sm'));
	return (
		<div className={classes.root}>
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
		</div>
	);
}

export default MainSite;
