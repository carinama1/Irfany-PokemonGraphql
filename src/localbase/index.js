import Localbase from "localbase";

const db = new Localbase("db");

export const addPokemonRequest = async (pokemon) => {
  return await db.collection("my-pokemon").add({
    pokemon,
  });
};

export const retrievePokemonRequest = async () => {
  return await db.collection("my-pokemon").get();
};
