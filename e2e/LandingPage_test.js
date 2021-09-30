Feature("LandingPage");

Scenario("As a user i see the hero landing page", ({ I }) => {
  I.amOnPage("/");
  I.wait(4);
  I.seeElementInDOM("$hero");
});

Scenario("As a user i see the social links on the hero section", ({ I }) => {
  I.wait(4);
  I.seeElementInDOM("$githubForHero");
  I.seeElementInDOM("$linkedInForHero");
  I.seeElementInDOM("$mailForHero");
});

Scenario(
  "As a user i see the main github account when i click on github link",
  ({ I }) => {
    I.wait(4);
    I.seeElementInDOM("$githubForHero");
    I.click("$githubForHero");
    I.amOnPage("https://github.com/arshad-shah");
  }
);

Scenario(
  "As a user i see the main linkedin account when i click on linkedin link",
  ({ I }) => {
    I.amOnPage("/");
    I.wait(4);
    I.seeElementInDOM("$linkedInForHero");
    I.click("$linkedInForHero");
    I.amOnPage("https://www.linkedin.com/in/arshadshah");
  }
);

Scenario(
  "As a user i see the email account when i click on email link",
  ({ I }) => {
    I.amOnPage("/");
    I.wait(4);
    I.seeElementInDOM("$mailForHero");
    I.click("$mailForHero");
    I.amOnPage("mailto:shaharshad1999@outlook.com");
  }
);
Scenario(
  "As a user i see the about me section when i click the scroll down button",
  ({ I }) => {
    I.amOnPage("/");
    I.wait(4);
    I.seeElementInDOM("$scrollDown");
    I.click("$scrollDown");
    I.see("About Me");
  }
);
