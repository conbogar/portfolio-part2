describe("Portfolio navigation E2E", () => {
  it("navigates between Home, Education, and Contact pages", () => {
    cy.visit("/");

    cy.contains("Home").should("exist");

    cy.contains("Education").click();
    cy.url().should("include", "/education");
    cy.contains(/education/i).should("exist");

    cy.contains("Contact").click();
    cy.url().should("include", "/contact");
    cy.contains(/send a message/i).should("exist");
  });
});
