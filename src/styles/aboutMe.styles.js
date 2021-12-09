import { makeStyles } from '@material-ui/core/styles';

export default makeStyles(
	(theme) => ({
		root: {
			display: 'flex',
			flexDirection: 'column',
			backgroundColor: '#ffffff',
			padding: '1rem',
			textAlign: 'center',
		},
		intro: {
			padding: '1rem',
		},
		aboutMeLink: {
			minHeight: 0,
		},
		row: {
			display: 'flex',
			flexDirection: 'row',
			padding: '1rem',
			[theme.breakpoints.down('md')]: {
				flexDirection: 'row',
			},
			[theme.breakpoints.down('sm')]: {
				flexDirection: 'column',
			},
		},
		aboutMePicture: {
			display: 'flex',
			flexDirection: 'column',
			padding: '1rem',
			width: '25%',
			height: '60%',
			margin: 'auto',
			[theme.breakpoints.down('md')]: {
				flexDirection: 'column',
				width: '30%',
				height: '100%',
			},
			[theme.breakpoints.down('sm')]: {
				flexDirection: 'column',
				width: '50%',
				height: '100%',
			},
			[theme.breakpoints.down('xs')]: {
				flexDirection: 'column',
				width: '100%',
				height: '100%',
			},
		},
		aboutMeDesc: {
			display: 'flex',
			flexDirection: 'column',
			padding: '1rem',
			textAlign: 'left',
		},
		picture: {
			borderRadius: '1rem',
			width: 'auto',
			height: 'auto',
			boxShadow: '0px 0px 10px #000000',
			transition: 'all 0.5s ease-out',
		},
		subheading: {
			paddingTop: '1rem',
		},
		TechChip: {
			margin: '0.3rem',
			borderRadius: '5px',
			padding: '0.5rem',
			fontWeight: 'bold',
		},
	}),
	{ name: 'Aboutme' }
);
