Feature("Projects");

Scenario(
  "As a user I see the projects section when i click on the menu option in the header",
  ({ I }) => {
    I.wait(3);
    I.scrollPageToTop();
    I.seeElementInDOM("$projects");
    I.click("$projects");
    I.wait(2);
    I.see("Projects");
  }
);

Scenario(
  "As a user I see the projects section when i click on the menu option in the header",
  ({ I }) => {
    I.wait(3);
    I.scrollPageToTop();
    I.seeElementInDOM("$projects");
    I.click("$projects");
    I.wait(2);
    I.see("Projects");
  }
);

Scenario("As a user I can see the project headings", ({ I }) => {
  I.wait(2);
  I.see("Projects");
  I.seeNumberOfElements("$projectHeading", 8);
});
