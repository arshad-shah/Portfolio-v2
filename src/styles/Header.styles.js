import makeStyles from '@mui/styles/makeStyles';

// LOCAL-STYLING
export default makeStyles((theme) => ({
	root: {
		flexGrow: 1,
		alignItems: 'center',
		justifyContent: 'center',
	},
	MobileHeader: {
		display: 'flex',
		flexDirection: 'row',
		alignItems: 'center',
		justifyContent: 'center',
	},
	title: {
		flexGrow: 1,
		padding: '0.9rem',
		fontWeight: 'bold',
		letterSpacing: '3px',
	},
	titleMobile: {
		padding: '0.9rem',
		fontWeight: 'bold',
		letterSpacing: '3px',
	},
	logo: {
		height: '3rem',
		width: '3rem',
		padding: '0.3rem',
	},
}));
