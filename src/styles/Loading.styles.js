import makeStyles from '@mui/styles/makeStyles';

export default makeStyles(
	(theme) => ({
		root: {
			display: 'flex',
			flexDirection: 'column',
			alignItems: 'center',
			justifyContent: 'center',
			alignContent: 'center',
			flexWrap: 'nowrap',
			backgroundColor: '#ffffff',
			minHeight: '100vh',
			backgroundRepeat: 'no-repeat',
			backgroundSize: 'cover',
			backgroundPosition: 'fixed',
		},
		name: {
			padding: '1rem',
		},
		progress: {
			padding: '1rem',
		},
	}),
	{ name: 'Loading' }
);
