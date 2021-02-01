import Localbase from "localbase";

const db = new Localbase("db");

export const addPokemonRequest = async (pokemon) => {
  return await db
    .collection("my-pokemon")
    .add({
      pokemon,
    })
    .then()
    .catch((err) => {
      console.log("ddddddddd");
      console.log(err);
      throw err;
    });
};

export const retrievePokemonRequest = async () => {
  return await db
    .collection("my-pokemon")
    .get()
    .then()
    .catch((err) => {
      console.log("ddddddddd");
      console.log(err);
      throw err;
    });
};

export const getPokemonByID = async (id) => {
  console.log("asdasdasdasdadas");
  return await db
    .collection("my-pokemon")
    .doc({ pokemon: { id } })
    .get()
    .then()
    .catch((err) => {
      console.log("ddddddddd");
      console.log(err);
      throw err;
    });
};

export const getPokemonByName = async (name) => {
  return await db
    .collection("my-pokemon")
    .doc({ name })
    .get()
    .then()
    .catch((err) => {
      console.log("ddddddddd");
      console.log(err);
      throw err;
    });
};

export const releasePokemonByID = async (id) => {
  return await db
    .collection("my-pokemon")
    .doc({ pokemon: { id } })
    .delete()
    .then()
    .catch((err) => {
      console.log("ddddddddd");
      console.log(err);
      throw err;
    });
};
