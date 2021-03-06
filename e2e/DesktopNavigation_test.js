/* eslint-disable no-undef */
Feature('DesktopNavigation');

Scenario('As a user I can see the full site', ({ I }) => {
	I.amOnPage('/');
	I.resizeWindow(1024, 816);
});

Scenario('As a user i can see the header of the page when it loads', ({ I }) => {
	I.amOnPage('/');
	I.scrollPageToTop();
	I.seeElementInDOM('$header');
	I.seeElementInDOM('$desktopMenu');
});

Scenario(
	'As a user when i press About me option in the menu, i see the about me section',
	({ I }) => {
		I.amOnPage('/');
		I.scrollPageToTop();
		I.seeElementInDOM('$aboutmeOption');
		I.click('$aboutmeOption');
		I.see('About Me');
	}
);

Scenario('when i press projects option in the menu, i see the projects section', ({ I }) => {
	I.amOnPage('/');
	I.scrollPageToTop();
	I.waitForElement('$header', 3);
	I.seeElementInDOM('$projectsOption');
	I.click('$projectsOption');
	I.see('Projects');
});

Scenario('As a user when i press Resume option in the menu, i see the resume', ({ I }) => {
	I.amOnPage('/');
	I.scrollPageToTop();
	I.seeElementInDOM('$resumeOption');
	I.click('$resumeOption');
	I.amOnPage('/static/media/ArshadResume.e3e2046f.pdf');
});
