import makeStyles from '@mui/styles/makeStyles';

export default makeStyles(
	(theme) => ({
		root: {
			backgroundColor: '#ffffff',
			padding: '1rem',
		},
		githubLinksAnchor: {
			'&:visited': {
				color: '#000000',
			},
			'&:link': {
				color: '#000000',
			},
		},
		LanguageChip: {
			margin: '0.3rem',
			borderRadius: '5px',
			padding: '0.5rem',
			fontWeight: 'bold',
		},
	}),
	{ name: 'ProjectCard' }
);
