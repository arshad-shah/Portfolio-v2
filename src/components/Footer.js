import { Box, Typography } from '@mui/material';
import React from 'react';
import PropTypes from 'prop-types';
import SocialLinks from './SocialLinks';

export default function Footer({ isMobile }) {
	const desktopStyles = {
		display: 'flex',
		flexDirection: 'column',
		padding: '1rem',
		textAlign: 'center',
		alignItems: 'center',
		justifyContent: 'center',
		minHeight: '10vh',
	};

	const mobileStyles = {
		display: 'flex',
		flexDirection: 'column',
		padding: '1rem',
		marginBottom: '3rem',
		textAlign: 'center',
		alignItems: 'flex-start',
		justifyContent: 'center',
		minHeight: '10vh',
	};
	return (
		<Box data-testid="footer" sx={isMobile ? mobileStyles : desktopStyles}>
			<Typography variant="h6">
				&copy; {new Date().getFullYear()} Arshad Shah
			</Typography>
			<SocialLinks
				sx={{
					color: '#000000',
					transition: 'all 0.3s ease-out',
					'&:hover': {
						boxShadow: '0px 0px 10px #000000',
						transform: 'scale(1.1)',
						transition: 'all 0.13s ease-in',
					},
				}}
			/>
			<Typography variant="subtitle2">V3.2 - 01 / May / 2022</Typography>
		</Box>
	);
}

Footer.propTypes = {
	isMobile: PropTypes.bool,
};
