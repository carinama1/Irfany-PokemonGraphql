import * as idb from "idb";

const dbPromise = idb.openDB("POKEMONS", 2, {
  upgrade(db) {
    db.createObjectStore("Pokemons");
  },
});

class DBService {
  catchPokemon(pokemon) {
    return new Promise((resolve) => {
      dbPromise
        .then((db) => {
          const tx = db.transaction("Pokemons", "readwrite");
          const store = tx.objectStore("Pokemons");

          store.put(pokemon, pokemon.name);
          return tx.complete;
        })
        .then((data) => {
          resolve(data);
        });
    });
  }

  releasePokemon(id) {
    return new Promise((resolve) => {
      dbPromise
        .then((db) => {
          const tx = db.transaction("Pokemons", "readwrite");
          const store = tx.objectStore("Pokemons");
          store.delete(id);
          return tx.complete;
        })
        .then((data) => {
          resolve(data);
        });
    });
  }

  getMyPokemons() {
    return new Promise((resolve) => {
      dbPromise
        .then((db) => {
          const tx = db.transaction("Pokemons", "readonly");
          const store = tx.objectStore("Pokemons");
          return store.getAll();
        })
        .then((pokemons) => {
          resolve(pokemons);
        });
    });
  }

  getMyPokemonById(id) {
    return new Promise((resolve) => {
      dbPromise
        .then((db) => {
          const tx = db.transaction("Pokemons", "readonly");
          const store = tx.objectStore("Pokemons");
          return store.get(id);
        })
        .then((pokemon) => {
          resolve(pokemon);
        });
    });
  }
}

export const Service = new DBService();
