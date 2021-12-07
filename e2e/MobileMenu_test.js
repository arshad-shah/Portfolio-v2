/* eslint-disable no-undef */
Feature('MobileMenu');

Scenario('As a user i can open the menu and click the about me button', ({ I }) => {
	I.amOnPage('/');
	I.scrollPageToTop();
	I.resizeWindow(425, 875);
	I.click('$aboutmeOption');
	I.see('Projects');
});

Scenario('As a user i can open the menu and click the projects button', ({ I }) => {
	I.amOnPage('/');
	I.scrollPageToTop();
	I.resizeWindow(425, 875);
	
	I.click('$aboutmeOption');
	I.see('About Me');
});

Scenario('As a user i can open the menu and click the resume button', ({ I }) => {
	I.amOnPage('/');
	I.scrollPageToTop();
	I.resizeWindow(425, 875);
	
	I.click('$aboutmeOption');
	I.amOnPage('/static/media/ArshadResume.e3e2046f.pdf	');
});
