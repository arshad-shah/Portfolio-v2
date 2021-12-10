Feature("DesktopNavigation");

Scenario("The header is visible", ({ I }) => {
  I.amOnPage("/");
  I.wait(3);
  I.see("A SHAH");
  I.seeElementInDOM("$desktopMenu");
});

Scenario("The about me aption takes you to about me section", ({ I }) => {
  I.amOnPage("/");
  I.wait(3);
  I.seeElementInDOM("$aboutme");
  I.click("$aboutme");
  I.wait(2);
  I.see("About Me");
});
