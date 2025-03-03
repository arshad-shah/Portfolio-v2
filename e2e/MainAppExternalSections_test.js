/* eslint-disable no-undef */
Feature('MainAppExternalSections');

Scenario('As a user I can see the full site', ({ I }) => {
	I.amOnPage('/');
	I.resizeWindow(1024, 816);
});

Scenario('As a user I can click the back to top button', ({ I }) => {
	I.amOnPage('/');
	I.scrollPageToBottom();
	I.waitForElement('$backtoTopButton');
	I.seeElement('$backtoTopButton');
	I.click('$backtoTopButton');
	I.seeElement('$header');
});
