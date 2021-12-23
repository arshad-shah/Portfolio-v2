import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import ReactGA from 'react-ga';
import App from './App';

import TagManager from 'react-gtm-module';

const tagManagerArgs = {
	gtmId: 'GTM-NBW8RKR',
};

TagManager.initialize(tagManagerArgs);
ReactGA.initialize('UA-205064366-1');
ReactGA.pageview(window.location.pathname + window.location.search);
ReactDOM.render(<App />, document.getElementById('root'));
