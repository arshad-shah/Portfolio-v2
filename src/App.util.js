import React from 'react';
import { styled } from '@mui/material/styles';
import PropTypes from 'prop-types';
import { useTheme } from '@mui/material/styles';
import useScrollTrigger from '@mui/material/useScrollTrigger';
import Zoom from '@mui/material/Zoom';
import { Fade, useMediaQuery } from '@mui/material';

const PREFIX = 'ScrollToTop';

const classes = {
    root: `${PREFIX}-root`,
    rootMobile: `${PREFIX}-rootMobile`
};

const StyledFade = styled(Fade)((
    {
        theme
    }
) => ({
    [`& .${classes.root}`]: {
		position: 'fixed',
		bottom: theme.spacing(2),
		right: theme.spacing(2),
	},

    [`& .${classes.rootMobile}`]: {
		position: 'fixed',
		bottom: theme.spacing(10),
		right: theme.spacing(2),
	}
}));

const ScrollToTop = function (props) {
	const theme = useTheme();
	const isMobile = useMediaQuery(theme.breakpoints.down('md'));
	const { children } = props;

	const trigger = useScrollTrigger({
		disableHysteresis: true,
		threshold: 300,
	});

	const handleClick = (event) => {
		const anchor = (event.target.ownerDocument || document).querySelector(
			'#back-to-top-anchor'
		);

		if (anchor) {
			anchor.scrollIntoView({ behavior: 'smooth', block: 'center' });
		}
	};

	return (
		<Zoom in={trigger}>
			<div
				onClick={handleClick}
				role="presentation"
				data-block="backtotopbutton"
				className={isMobile ? classes.rootMobile : classes.root}>
				{children}
			</div>
		</Zoom>
	);
};

ScrollToTop.propTypes = {
	children: PropTypes.element.isRequired,
};

export default ScrollToTop;

export var ScrollToFade = function (props) {
	const { children } = props;
	const trigger = useScrollTrigger({
		disableHysteresis: true,
		threshold: 300,
	});

	if (!trigger) {
		return (
            <StyledFade in timeout={1000}>
				<div>{children}</div>
			</StyledFade>
        );
	}
	return (
		<Fade out={trigger.toString()} timeout={1000}>
			<div>{children}</div>
		</Fade>
	);
};

ScrollToFade.propTypes = {
	children: PropTypes.element.isRequired,
};
