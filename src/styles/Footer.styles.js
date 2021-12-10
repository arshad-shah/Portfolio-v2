import { makeStyles } from '@material-ui/core/styles';

export default makeStyles((theme) => ({
	root: {
		display: 'flex',
		flexDirection: 'column',
		backgroundColor: '#ffffff',
		flexWrap: 'wrap',
		alignContent: 'center',
		justifyContent: 'center',
		alignItems: 'center',
		padding: '2rem',
	},
	rootMobileFooter: {
		display: 'flex',
		flexDirection: 'column',
		backgroundColor: '#ffffff',
		flexWrap: 'wrap',
		alignContent: 'center',
		justifyContent: 'center',
		alignItems: 'center',
		padding: '2rem',
		marginBottom: '3rem',
	},
	socialLinks: {
		padding: '1rem',
		color: '#000000',
	},
}));
