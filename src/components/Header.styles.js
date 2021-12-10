import { makeStyles } from '@material-ui/core/styles';

// LOCAL-STYLING
export default makeStyles((theme) => ({
	root: {
		flexGrow: 1,
	},
	title: {
		flexGrow: 1,
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
