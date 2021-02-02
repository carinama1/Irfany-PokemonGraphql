import React, { Fragment, useEffect, useState } from "react";
import { Container, makeStyles } from "@material-ui/core";
import Page from "../../components/Page";
import PokemonCard from "./components/PokemonCard";
import { ListStyle } from "./_listStyle";
import Loading from "../../components/Loading";

import EmptyPage from "./components/EmptyPage";
import { DbServices } from "../../localbase/indexedDbDexie";

const useStyles = makeStyles((theme) => ({
  root: {
    minHeight: "100%",
    paddingBottom: theme.spacing(3),
  },
}));

const MyPokemonLists = () => {
  const classes = useStyles();
  const [isLoading, setIsLoading] = useState(true);
  const [pokemons, setPokemons] = useState([]);

  useEffect(() => {
    DbServices.getMyPokemons()
      .then((data) => {
        setPokemons(data);
        setIsLoading(false);
      })
      .catch((err) => {
        console.log({ err });
      });
  }, []);

  return (
    <Fragment>
      {isLoading && <Loading />}
      {!isLoading && (
        <Page className={classes.root} title="My Pokemon List">
          <Fragment>
            <Container maxWidth="lg">
              {pokemons && pokemons.length === 0 ? (
                <EmptyPage />
              ) : (
                <Fragment>
                  <div style={{ marginTop: 20 }}></div>
                  <ListStyle>
                    {pokemons &&
                      pokemons.length >= 0 &&
                      pokemons.map((pokemon, index) => {
                        return (
                          <Fragment key={`item-${index}`}>
                            <PokemonCard pokemon={pokemon} />
                          </Fragment>
                        );
                      })}
                  </ListStyle>
                </Fragment>
              )}
            </Container>
          </Fragment>
        </Page>
      )}
    </Fragment>
  );
};

export default MyPokemonLists;
