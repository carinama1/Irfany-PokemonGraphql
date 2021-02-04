import React, { Fragment, useEffect, useState } from "react";
import { capitalize, Hidden, makeStyles } from "@material-ui/core";
import Page from "../../components/Page";
import { useQuery } from "@apollo/react-hooks";
import { GET_POKEMON_BY_NAME } from "../../graphql/get-pokemons";
import { useLocation, useNavigate } from "react-router";
import PokemonHeader from "./components/PokemonHeader";
import styled from "@emotion/styled";
import Loading from "../../components/Loading";
import PokemonAbilities from "./components/PokemonAbilities";
import { PokeBall, StickyComponent } from "../../components/StyledComponents";
import { CatchingPage } from "./components/CatchingPage";
import MobileHeader from "../../components/MobileHeader";

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
  const [isCatching, setIsCatching] = useState(false);
  const [pokemon, setPokemon] = useState({});

  if (!location.state) {
    navigation("/", { replace: true });
  }

  const { data, error, loading } = useQuery(GET_POKEMON_BY_NAME, {
    variables: { name: (location.state && location.state.name) || "" },
  });

  useEffect(() => {
    const onCompleted = (response) => {
      const newPokemon = response.pokemon;
      setPokemon(newPokemon);
      setIsLoading(false);
    };
    const onError = (error) => {
      //
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

  const seeMyPokemon = (id) => {
    navigation(`/pokemon-details/m/${id}`);
  };

  return (
    //   TODO : Handle error when paste to here directly
    <Fragment>
      {isLoading && <Loading />}
      {!isLoading && (
        <Page className={classes.root} title={capitalize(location.state.name)}>
          <Hidden smUp>
            <MobileHeader />
          </Hidden>
          {isCatching && (
            <CatchingPage seeMyPokemon={seeMyPokemon} pokemon={pokemon} />
          )}
          {!isCatching && (
            <Fragment>
              <div style={{ marginBottom: 42 }}></div>
              <PokemonHeader
                name={pokemon.name}
                image={pokemon.sprites.front_default}
                types={pokemon.types}
              ></PokemonHeader>
              <Divider />
              <PokemonAbilities
                abilities={pokemon.abilities}
                moves={pokemon.moves}
              />
              <StickyComponent>
                <div className="poke-ball" onClick={() => setIsCatching(true)}>
                  <PokeBall />
                </div>
              </StickyComponent>
            </Fragment>
          )}
        </Page>
      )}
    </Fragment>
  );
};

export default PokemonView;
