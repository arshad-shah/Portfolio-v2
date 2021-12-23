import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import ReactGA from 'react-ga';
import App from './App';

import TagManager from 'react-gtm-module';

const env = process.env.NODE_ENV;
if (env === 'production') {
	const tagManagerArgs = {
		gtmId: process.env.REACT_APP_GOOGLE_CONTAINER_ID,
	};

	TagManager.initialize(tagManagerArgs);
	ReactGA.initialize(process.env.REACT_APP_GOOGLE_TRACKING_ID);
	ReactGA.pageview(window.location.pathname + window.location.search);
}
ReactDOM.render(<App />, document.getElementById('root'));
