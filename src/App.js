import React from 'react';
import { ThemeProvider, createTheme, responsiveFontSizes } from '@material-ui/core/styles';
import MainSite from './MainSite';

let theme = createTheme({
	palette: {
		type: 'light',
		primary: {
			main: '#fdff95',
		},
		secondary: {
			main: '#ffbf0d',
		},
		action: {
			hoverOpacity: 0.09,
		},
	},
	typography: {
		fontFamily: 'Nunito',
		fontSize: 18,
	},
});

theme = responsiveFontSizes(theme);

export default function App() {
	return (
		<ThemeProvider theme={theme}>
			<MainSite />
		</ThemeProvider>
	);
}
