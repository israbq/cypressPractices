describe("TestCases for Login", () => {
  it("Successful Login", () => {
    cy.visit("https://www.demoblaze.com/");
    cy.get("#login2").click().wait(500);
    cy.get("#loginusername").type("ptest10");
    cy.get("#loginpassword").type("ptest10");
    cy.get('[onclick="logIn()"]').click();
    cy.get("#nameofuser").should("contain", "Welcome ptest10");
  });
  it("Failed Login", () => {
    cy.visit("https://www.demoblaze.com/");
    cy.get("#login2").click().wait(500);
    cy.get("#loginusername").type("ptest10");
    cy.get("#loginpassword").type("ptest11");
    cy.get('[onclick="logIn()"]').click();
    cy.on("window:alert", (t) => {
      expect(t).to.contains("Wrong password.");
    });
  });
  it("Empty Fields", () => {
    cy.visit("https://www.demoblaze.com/");
    cy.get("#login2").click().wait(500);
    cy.get('[onclick="logIn()"]').click();
    cy.on("window:alert", (t) => {
      expect(t).to.contains("Please fill out Username and Password.");
    });
  });
});