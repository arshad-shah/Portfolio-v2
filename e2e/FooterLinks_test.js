/* eslint-disable no-undef */
Feature('FooterLinks');

Scenario('As a user I can see the full site', ({ I }) => {
	I.amOnPage('/');
	I.resizeWindow(1024, 816);
});

Scenario('As a user i see the footer when i scroll down', ({ I }) => {
	I.amOnPage('/');
	I.scrollPageToBottom();
	I.seeElementInDOM('$footer');
});

Scenario('As a user i see the social links on the Footer section', ({ I }) => {
	I.amOnPage('/');
	I.seeElementInDOM('$githubLink');
	I.seeElementInDOM('$linkedInLink');
	I.seeElementInDOM('$hackerRankLink');
	I.seeElementInDOM('$mailLink');
});

Scenario('As a user i see the main github account when i click on github link', ({ I }) => {
	I.amOnPage('/');
	I.seeElementInDOM('$githubLink');
	I.click('$githubLink');
	I.amOnPage('https://github.com/arshad-shah');
});

Scenario('As a user i see the main linkedin account when i click on linkedin link', ({ I }) => {
	I.amOnPage('/');
	I.seeElementInDOM('$linkedInLink');
	I.click('$linkedInLink');
	I.amOnPage('https://www.linkedin.com/in/arshadshah');
});

Scenario('As a user i see the main hacker ranck account when i click on hacker rank link', ({ I }) => {
	I.amOnPage('/');
	I.scrollPageToTop();
	I.seeElementInDOM('$hackerRankLink');
	I.click('$hackerRankLink');
	I.amOnPage('https://www.hackerrank.com/shaharshad57');
});

Scenario('As a user i see the email account when i click on email link', ({ I }) => {
	I.amOnPage('/');
	I.seeElementInDOM('$mailLink');
	I.click('$mailLink');
	I.amOnPage('mailto:arshad@arshadshah.com');
});
