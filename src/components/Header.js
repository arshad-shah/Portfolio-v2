import React from 'react';
import { AppBar, Toolbar, Typography } from '@material-ui/core';
import HideOnScroll from './HideOnScroll';

import Desktop from './navigation/Desktop';
import useStyles from '../styles/Header.styles';
import logo from '../assets/logo.svg';
import PropTypes from 'prop-types';

export default function Header(props) {
	const classes = useStyles();
	const { isMobile } = props;

	return (
		<div className={isMobile ? '' : classes.root}>
			<Toolbar id="back-to-top-anchor" />
			{isMobile ? (
				<AppBar data-testid="header">
					<Toolbar className={classes.MobileHeader}>
						<img aria-label="Logo" src={logo} className={classes.logo} alt="" />
						<Typography
							variant="h5"
							component="p"
							color="textPrimary"
							className={classes.titleMobile}>
							A SHAH
						</Typography>
					</Toolbar>
				</AppBar>
			) : (
				<HideOnScroll {...props}>
					<AppBar data-testid="header">
						<Toolbar>
							<img aria-label="Logo" src={logo} className={classes.logo} alt="" />
							<Typography
								variant="h5"
								component="p"
								color="textPrimary"
								className={classes.title}>
								A SHAH
							</Typography>
							<Desktop />
						</Toolbar>
					</AppBar>
				</HideOnScroll>
			)}
		</div>
	);
}
Header.propTypes = {
	isMobile: PropTypes.bool,
};
