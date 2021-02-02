describe("Handle Catch The Correct Pokemon", () => {
  const pokemonName = "bulbasaur";
  it("Rendering the correct pokemon", () => {
    cy.visit("http://localhost:3000/");

    cy.get("div").contains(pokemonName).click();
    cy.get("div").contains(pokemonName);
  });

  it("Capturing the correct pokemon", () => {
    cy.visit("http://localhost:3000/");

    cy.get("div").contains(pokemonName).click();
    cy.get(".poke-ball").click();
    if (cy.get("div").contains("GOTTEM!")) {
      cy.get("div").contains("Gotta catch em' all!");
    } else {
      cy.get("div").contains("OH NO!");
    }
  });
});
