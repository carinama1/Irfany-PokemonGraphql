import Dexie from "dexie";
Dexie.dependencies.indexedDB = require("fake-indexeddb");
Dexie.dependencies.IDBKeyRange = require("fake-indexeddb/lib/FDBKeyRange");

const db = new Dexie("PokemonsDexie");

db.version(1).stores({
  pokemon: "++id, &uniqueName",
});

db.version(2).stores({
  pokemon: "++id, &uniqueName", // Change indexes
});

class dbServices {
  getMyPokemons() {
    return new Promise((resolve) => {
      resolve(db.pokemon.toArray());
    });
  }

  getMyPokemonByName(uniqueName) {
    return new Promise((resolve) => {
      resolve(db.pokemon.where("uniqueName").equals(uniqueName).first());
    });
  }

  getMyPokemonById(id) {
    return new Promise((resolve) => {
      resolve(db.pokemon.where("id").equals(id).first());
    });
  }

  updatePokemonNameById(id, uniqueName) {
    return new Promise((resolve) => {
      resolve(db.pokemon.where("id").equals(id).modify({ uniqueName }));
    });
  }

  releasePokemon(id) {
    return new Promise((resolve) => {
      resolve(db.pokemon.where("id").equals(id).delete());
    });
  }

  catchPokemon(pokemon) {
    return new Promise((resolve) => {
      resolve(db.pokemon.add(pokemon));
    });
  }
}

export const DbServices = new dbServices();
