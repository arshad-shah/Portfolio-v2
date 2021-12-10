Feature("Projects");

Scenario(
  "As a user I see the projects section when i click on the menu option in the header",
  ({ I }) => {
    I.scrollPageToTop();
    I.seeElementInDOM("$projects");
    I.click("$projects");
    I.see("Projects");
  }
);

Scenario(
  "As a user I see the projects section when i click on the menu option in the header",
  ({ I }) => {
    I.scrollPageToTop();
    I.waitForElement("$header", 3);
    I.seeElementInDOM("$projects");
    I.click("$projects");
    I.seeElementInDOM("$projectsSection");
  }
);

Scenario("As a user I can see the project headings", ({ I }) => {
  I.see("Projects");
  I.seeNumberOfElements("$projectHeading", 8);
});

Scenario(
  "As a user I am redirected to the github repo when i click on github link",
  ({ I }) => {
    I.amOnPage("/");
    I.seeElementInDOM("$githublink");
    I.click("$githublink");
    I.amOnPage("https://www.github.com/*");
  }
);

Scenario(
  "As a user I am redirected to the site when i click on external site link",
  ({ I }) => {
    I.amOnPage("/");
    I.seeElementInDOM("$externalSiteLink");
    I.click("$externalSiteLink");
    I.amOnPage(
      "https://arshad-shah.github.io/portfoliov1/index.html" ||
        "https://arshad-shah.github.io/Year-1-Web-Dev-Project/website/index.html"
    );
  }
);
