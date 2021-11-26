/* eslint-disable no-undef */
Feature('FooterLinks');

Scenario('As a user I can see the full site', ({ I }) => {
	I.amOnPage('/');
	I.resizeWindow(1024, 816);
});

Scenario('As a user i see the social links on the Footer section', ({ I }) => {
	I.amOnPage('/');
	I.seeElementInDOM('$githubForFooter');
	I.seeElementInDOM('$linkedinForFooter');
	I.seeElementInDOM('$emailForFooter');
});

Scenario('As a user i see the main github account when i click on github link', ({ I }) => {
	I.amOnPage('/');
	I.seeElementInDOM('$githubForFooter');
	I.click('$githubForFooter');
	I.amOnPage('https://github.com/arshad-shah');
});

Scenario('As a user i see the main linkedin account when i click on linkedin link', ({ I }) => {
	I.amOnPage('/');
	I.seeElementInDOM('$linkedinForFooter');
	I.click('$linkedinForFooter');
	I.amOnPage('https://www.linkedin.com/in/arshadshah');
});

Scenario('As a user i see the email account when i click on email link', ({ I }) => {
	I.amOnPage('/');
	I.seeElementInDOM('$emailForFooter');
	I.click('$emailForFooter');
	I.amOnPage('mailto:arshad@arshadshah.com');
});
