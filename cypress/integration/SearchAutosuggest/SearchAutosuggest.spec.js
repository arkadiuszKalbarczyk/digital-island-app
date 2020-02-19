describe("Search Autosuggest Test", function() {
  it("Finds maternity item", function() {
    cy.visit("http://localhost:3000");
    cy.get("main")
      .find("input")
      .click();
    cy.get("main")
      .find("input")
      .type("mat");

    cy.wait(500);
    cy.contains("ernity/paternity leave and parental leave").click({force: true});
    cy.location().should((loc) => {
      expect(loc.pathname).to.eq('/maternity')
    })
  });
});
