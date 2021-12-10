import { makeStyles } from '@material-ui/core/styles';
import backgroundImage from '../assets/background.webp';
import backgroundImageMobile from '../assets/backgroundmobile.webp';

export default makeStyles(
	(theme) => ({
		root: {
			minHeight: '100vh',
			minWidth: '100%',
			[theme.breakpoints.down('xs')]: {
				backgroundImage: `url(${backgroundImageMobile})`,
			},
			backgroundImage: `url(${backgroundImage})`,
			backgroundRepeat: 'no-repeat',
			backgroundSize: 'cover',
			backgroundAttachment: 'fixed',
		},
	}),
	{ name: 'App' }
);
