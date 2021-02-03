describe("Handle Get The Correct Pokemon", () => {
  const pokemonName = "bulbasaur";
  it("Rendering the correct pokemon", () => {
    cy.visit("http://localhost:3000/");

    cy.get("div").contains(pokemonName).click();
    cy.get("div").contains(pokemonName);
  });
});
