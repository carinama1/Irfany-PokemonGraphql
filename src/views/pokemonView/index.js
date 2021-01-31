import React, { Fragment, useEffect, useState } from "react";
import { capitalize, makeStyles } from "@material-ui/core";
import Page from "../../components/Page";
import { useQuery } from "@apollo/react-hooks";
import { GET_POKEMON_BY_NAME } from "../../graphql/get-pokemons";
import { useLocation, useNavigate } from "react-router";
import PokemonHeader from "./components/PokemonHeader";
import styled from "@emotion/styled";
import Loading from "../../components/Loading";
import PokemonAbilities from "./components/PokemonAbilities";
import { PokeBall, StickyComponent } from "../../components/StyledComponents";
import { addPokemonRequest } from "../../localbase";

const useStyles = makeStyles(() => ({
  root: {
    minHeight: "100%",
    padding: 0,
    // background: "#a8ff78" /* fallback for old browsers */,
    // // eslint-disable-next-line
    // background: "linear-gradient(to left,#00fcb0,#8fff52)",
  },
}));

const Divider = styled.div`
  width: 100%;
  height: 1px;
  border-top: 1px solid black;
  background: #a8ff78; /* fallback for old browsers */
  background: -webkit-linear-gradient(to left, #78ffd6, #a8ff78);
  background: linear-gradient(to left, #78ffd6, #a8ff78);
`;

const PokemonView = () => {
  const classes = useStyles();
  const location = useLocation();
  const navigation = useNavigate();
  const [isLoading, setIsLoading] = useState(true);
  const [pokemon, setPokemon] = useState({});

  if (!location.state) {
    navigation("/", { replace: true });
  }

  const { data, error, loading } = useQuery(GET_POKEMON_BY_NAME, {
    variables: { name: (location.state && location.state.name) || "" },
  });

  useEffect(() => {
    const onCompleted = (data) => {
      setPokemon(data.pokemon);
      setIsLoading(false);
    };
    const onError = (error) => {
      return navigation("/", { replace: true });
    };
    if (onCompleted || onError) {
      if (onCompleted && !loading && !error) {
        onCompleted(data);
      } else if (onError && !loading && error) {
        onError(error);
      }
    }
    // eslint-disable-next-line
  }, [loading, data, error]);

  const catchPokemon = () => {
    const { name, image } = location.state;
    const myNewPokemon = { name, image };
    addPokemonRequest(myNewPokemon)
      .then((data) => {
        console.log(data);
      })
      .catch((err) => {
        console.log({ err });
      });
    console.log("catch  : ", pokemon);
  };

  return (
    //   TODO : Handle error when paste to here directly
    <Fragment>
      {isLoading && <Loading />}
      {!isLoading && (
        <Page className={classes.root} title={capitalize(location.state.name)}>
          <PokemonHeader
            name={pokemon.name}
            image={location.state.image}
            types={pokemon.types}
          ></PokemonHeader>
          <Divider />
          <PokemonAbilities
            abilities={pokemon.abilities}
            moves={pokemon.moves}
          />
          <StickyComponent>
            <div onClick={catchPokemon}>
              <PokeBall />
            </div>
          </StickyComponent>
        </Page>
      )}
    </Fragment>
  );
};

export default PokemonView;
