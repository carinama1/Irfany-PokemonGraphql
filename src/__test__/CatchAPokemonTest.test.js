// __tests__/fetch.test.js
import React from "react";
import {
  render,
  fireEvent,
  waitFor,
  screen,
  cleanup,
} from "@testing-library/react";
import { MockedProvider } from "@apollo/client/testing";
import { GET_POKEMONS, GET_POKEMON_BY_NAME } from "./get-pokemons";
import { ThemeProvider } from "@material-ui/core";
import theme from "../theme";
import PokemonLists from "../views/pokemonLists";
import { catched } from "../utils/rng";

afterEach(cleanup);

test("Make sure user can catch Pokemon Correctly ", async () => {
  const mocks = [
    {
      request: {
        query: GET_POKEMONS,
        variables: {
          limit: 10,
          offset: 0,
        },
      },
      result: [
        {
          url: "https://pokeapi.co/api/v2/pokemon/2/",
          name: "ivysaur",
          image:
            "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/2.png",
        },
        {
          url: "https://pokeapi.co/api/v2/pokemon/3/",
          name: "venusaur",
          image:
            "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/3.png",
        },
        {
          url: "https://pokeapi.co/api/v2/pokemon/4/",
          name: "charmander",
          image:
            "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/4.png",
        },
        {
          url: "https://pokeapi.co/api/v2/pokemon/5/",
          name: "charmeleon",
          image:
            "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/5.png",
        },
        {
          url: "https://pokeapi.co/api/v2/pokemon/6/",
          name: "charizard",
          image:
            "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/6.png",
        },
        {
          url: "https://pokeapi.co/api/v2/pokemon/7/",
          name: "squirtle",
          image:
            "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/7.png",
        },
        {
          url: "https://pokeapi.co/api/v2/pokemon/8/",
          name: "wartortle",
          image:
            "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/8.png",
        },
        {
          url: "https://pokeapi.co/api/v2/pokemon/9/",
          name: "blastoise",
          image:
            "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/9.png",
        },
        {
          url: "https://pokeapi.co/api/v2/pokemon/10/",
          name: "caterpie",
          image:
            "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/10.png",
        },
        {
          url: "https://pokeapi.co/api/v2/pokemon/11/",
          name: "metapod",
          image:
            "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/11.png",
        },
        {
          url: "https://pokeapi.co/api/v2/pokemon/12/",
          name: "butterfree",
          image:
            "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/12.png",
        },
        {
          url: "https://pokeapi.co/api/v2/pokemon/13/",
          name: "weedle",
          image:
            "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/13.png",
        },
        {
          url: "https://pokeapi.co/api/v2/pokemon/14/",
          name: "kakuna",
          image:
            "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/14.png",
        },
        {
          url: "https://pokeapi.co/api/v2/pokemon/15/",
          name: "beedrill",
          image:
            "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/15.png",
        },
        {
          url: "https://pokeapi.co/api/v2/pokemon/16/",
          name: "pidgey",
          image:
            "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/16.png",
        },
        {
          url: "https://pokeapi.co/api/v2/pokemon/17/",
          name: "pidgeotto",
          image:
            "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/17.png",
        },
        {
          url: "https://pokeapi.co/api/v2/pokemon/18/",
          name: "pidgeot",
          image:
            "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/18.png",
        },
        {
          url: "https://pokeapi.co/api/v2/pokemon/19/",
          name: "rattata",
          image:
            "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/19.png",
        },
        {
          url: "https://pokeapi.co/api/v2/pokemon/20/",
          name: "raticate",
          image:
            "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/20.png",
        },
        {
          url: "https://pokeapi.co/api/v2/pokemon/21/",
          name: "spearow",
          image:
            "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/21.png",
        },
      ],
    },
  ];

  const { debug } = render(
    <ThemeProvider theme={theme}>
      <MockedProvider mocks={mocks}>
        <PokemonLists></PokemonLists>
      </MockedProvider>
    </ThemeProvider>
  );
});

test("Make sure catches returns boolean", async () => {
  const pokemonCatched = catched();

  expect(typeof pokemonCatched === "boolean").toBeTruthy();
});
