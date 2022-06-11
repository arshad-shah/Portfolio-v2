import React, { lazy, Suspense } from 'react';
import { styled } from '@mui/material/styles';
import {
	Box,
	useMediaQuery,
	useScrollTrigger,
	useTheme,
	Zoom,
} from '@mui/material';
import { Fab } from '@mui/material';

import CssBaseline from '@mui/material/CssBaseline';
import { FiArrowUp } from 'react-icons/fi';
import BlobScatter from './assets/blob-scatter-haikei.svg';

import Loading from './components/Loading';
import Mobile from './components/navigation/Mobile';
import Link from 'react-scroll/modules/components/Link';

const PREFIX = 'MainSite';

const classes = {
	fab: `${PREFIX}-fab`,
};

const Root = styled('div')(({ theme }) => ({
	color: '#000000',
	minHeight: '100vh',
	backgroundRepeat: 'no-repeat',
	backgroundSize: 'cover',
	backgroundImage: `url(${BlobScatter})`,
	[`& .${classes.fab}`]: {
		fontSize: '2rem',
		bottom: theme.spacing(1),
		right: theme.spacing(1),
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
const AboutMe = lazy(() => import('./pages/AboutMe'));
const Projects = lazy(() => import('./pages/Projects'));
const Footer = lazy(() => import('./components/Footer'));

const renderLoader = () => <Loading />;

function MainSite() {
	const theme = useTheme();
	const isMobile = useMediaQuery(theme.breakpoints.down('md'));

	const trigger = useScrollTrigger({
		disableHysteresis: true,
		threshold: 500,
	});

	return (
		<Root>
			<Suspense fallback={renderLoader()}>
				<CssBaseline />
				<Header isMobile={isMobile} data-testid="header" />
				{isMobile ? <Mobile /> : null}
				<LandingPage isMobile={isMobile} />
				<AboutMe />
				<Projects data-testid="projectsSection" />

				<Zoom in={trigger}>
					<Box
						role="presentation"
						sx={{ position: 'fixed', bottom: 6, right: 6 }}
					>
						<Link to="back-to-top-anchor" smooth spy>
							<Fab
								color="secondary"
								id="backToTopButton"
								className={classes.fab}
								data-block="backtotopbutton"
								data-testid="backtoTopButton"
								aria-label="scroll back to top"
							>
								<FiArrowUp />
							</Fab>
						</Link>
					</Box>
				</Zoom>
				<Footer isMobile={isMobile} />
			</Suspense>
		</Root>
	);
}

export default MainSite;
