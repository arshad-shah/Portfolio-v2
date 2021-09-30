Feature("DesktopNavigation");

Scenario(
  "As a user i can see the header of the page when it loads",
  ({ I }) => {
    I.amOnPage("/");
    I.wait(3);
    I.see("A SHAH");
    I.seeElementInDOM("$desktopMenu");
  }
);

Scenario(
  "As a user when i press About me option in the menu, i see the about me section",
  ({ I }) => {
    I.wait(3);
    I.seeElementInDOM("$aboutme");
    I.click("$aboutme");
    I.wait(2);
    I.see("About Me");
  }
);

Scenario(
  "As a user when i press projects option in the menu, i see the projects section",
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
  "As a user when i press About me option in the menu, i see the resume",
  ({ I }) => {
    I.wait(3);
    I.scrollPageToTop();
    I.seeElementInDOM("$resume");
    I.click("$resume");
    I.wait(2);
    I.amOnPage("/static/media/ArshadResume.c8c815b8.pdf");
  }
);
