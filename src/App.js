import React, { lazy, Suspense } from 'react';
import { ThemeProvider, createTheme, responsiveFontSizes } from '@material-ui/core/styles';
import { useMediaQuery } from '@material-ui/core';
import CssBaseline from '@material-ui/core/CssBaseline';
import Fab from '@material-ui/core/Fab';
import ArrowUpwardRoundedIcon from '@material-ui/icons/ArrowUpwardRounded';
import ScrollToTop, { ScrollToFade } from './App.util';
import useStyles from './styles/App.styles';
import Loading from './components/Loading';
import Mobile from './components/navigation/Mobile';

const Header = lazy(() => import('./components/Header'));
const LandingPage = lazy(() => import('./pages/LandingPage'));
const Aboutme = lazy(() => import('./pages/Aboutme'));
const Projects = lazy(() => import('./pages/Projects'));
const Footer = lazy(() => import('./components/Footer'));
let theme = createTheme({
	palette: {
		type: 'light',
		primary: {
			main: '#fdff95',
		},
		secondary: {
			main: '#ffbf0d',
		},
		action: {
			hoverOpacity: 0.09,
		},
	},
	typography: {
		fontFamily: 'Nunito',
		fontSize: 18,
	},
});

theme = responsiveFontSizes(theme);

const renderLoader = () => <Loading />;

export default function App(props) {
	const classes = useStyles();
	const isMobile = useMediaQuery(theme.breakpoints.down('sm'));

	return (
		<ThemeProvider theme={theme}>
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
							aria-label="scroll back to top">
							<ArrowUpwardRoundedIcon fontSize="large" />
						</Fab>
					</ScrollToTop>

					<Footer isMobile={isMobile} />
				</Suspense>
			</div>
		</ThemeProvider>
	);
}
