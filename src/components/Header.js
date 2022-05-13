import React from 'react';
import { styled } from '@mui/material/styles';
import { AppBar, Toolbar, Typography } from '@mui/material';
import HideOnScroll from './HideOnScroll';

import Desktop from './navigation/Desktop';
import PropTypes from 'prop-types';
const PREFIX = 'Header';

const classes = {
	root: `${PREFIX}-root`,
	MobileHeader: `${PREFIX}-MobileHeader`,
	title: `${PREFIX}-title`,
	titleMobile: `${PREFIX}-titleMobile`,
	logo: `${PREFIX}-logo`,
};

const Root = styled('div')(() => ({
	[`& .${classes.root}`]: {
		flexGrow: 1,
		alignItems: 'center',
		justifyContent: 'center',
	},

	[`& .${classes.MobileHeader}`]: {
		display: 'flex',
		flexDirection: 'column',
		alignItems: 'center',
		justifyContent: 'center',
	},

	[`& .${classes.title}`]: {
		flexGrow: 1,
		padding: '0.9rem',
		letterSpacing: '3px',
	},

	[`& .${classes.logo}`]: {
		height: '3rem',
		width: '3rem',
		padding: '0.3rem',
	},
}));

export default function Header(props) {
	const { isMobile } = props;

	return (
		<Root className={isMobile ? '' : classes.root}>
			<Toolbar id="back-to-top-anchor" />
			{isMobile ? (
				<HideOnScroll {...props}>
					<AppBar data-testid="header">
						<Toolbar className={classes.MobileHeader}>
							<Typography
								variant="h5"
								color="textPrimary"
								className={classes.title}>
								ARSHAD SHAH
							</Typography>
						</Toolbar>
					</AppBar>
				</HideOnScroll>
			) : (
				<HideOnScroll {...props}>
					<AppBar data-testid="header">
						<Toolbar>
							<Typography
								variant="subtitle1"
								color="textPrimary"
								className={classes.title}>
								ARSHAD SHAH
							</Typography>
							<Desktop />
						</Toolbar>
					</AppBar>
				</HideOnScroll>
			)}
		</Root>
	);
}
Header.propTypes = {
	isMobile: PropTypes.bool,
};
