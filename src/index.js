import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import ReactGA from 'react-ga';
import App from './App';

ReactGA.initialize('UA-205064366-1'); // add your tracking id here.
ReactGA.pageview(window.location.pathname + window.location.search);

ReactDOM.render(
	<React.StrictMode>
		<App />
	</React.StrictMode>,
	document.getElementById('root')
);
