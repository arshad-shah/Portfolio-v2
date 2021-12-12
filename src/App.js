import React from 'react';
import {
    ThemeProvider,
    StyledEngineProvider,
    createTheme,
    responsiveFontSizes,
    adaptV4Theme,
} from '@mui/material/styles';
import MainSite from './MainSite';

let theme = createTheme(adaptV4Theme({
	palette: {
		mode: 'light',
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
}));

theme = responsiveFontSizes(theme);

export default function App() {
	return (
        <StyledEngineProvider injectFirst>
            <ThemeProvider theme={theme}>
                <MainSite />
            </ThemeProvider>
        </StyledEngineProvider>
    );
}
