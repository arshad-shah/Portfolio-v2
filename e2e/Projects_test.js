/* eslint-disable no-undef */
Feature('Projects');

Scenario('As a user I can see the full site', ({ I }) => {
	I.amOnPage('/');
	I.resizeWindow(1024, 816);
});

Scenario('As a user I can see the project headings', ({ I }) => {
	I.amOnPage('/');
	I.see('Projects');
	I.seeNumberOfElements('$projectHeading', 6);
});

Scenario('As a user I am redirected to the github repo when i click on github link', ({ I }) => {
	I.amOnPage('/');
	I.seeElementInDOM('$githublink');
	I.click('$githublink');
	I.amOnPage('https://www.github.com/*');
});

Scenario('As a user I am redirected to the site when i click on external site link', ({ I }) => {
	I.amOnPage('/');
	I.seeElementInDOM('$externalSiteLink');
	I.click('$externalSiteLink');
	I.amOnPage(
		'https://arshad-shah.github.io/portfoliov1/index.html' ||
			'https://arshad-shah.github.io/Year-1-Web-Dev-Project/website/index.html'
	);
});

Scenario('As a user I am redirected to the google shop site when i click on shop link', ({ I }) => {
	I.amOnPage('/');
	I.seeElementInDOM('$shoplinkfornimaz');
	I.click('$shoplinkfornimaz');
	I.amOnPage(
		'https://play.google.com/store/apps/details?id=com.arshadshah.nimaz&pcampaignid=pcampaignidMKT-Other-global-all-co-prtnr-py-PartBadge-Mar2515-1'
	);
});
