import React, { Fragment, useEffect, useState } from "react";
import { Box, Button, Container, makeStyles } from "@material-ui/core";
import Page from "../../components/Page";
import { useQuery } from "@apollo/react-hooks";
import { GET_POKEMONS } from "../../graphql/get-pokemons";
import PokemonCard from "./components/PokemonCard";
import { ListStyle } from "./_listStyle";
import { PokeBald } from "../../components/StyledComponents";
import Loading from "../../components/Loading";
import { DbServices } from "../../localbase/indexedDbDexie";

const useStyles = makeStyles((theme) => ({
  root: {
    minHeight: "100%",
    paddingBottom: theme.spacing(3),
  },
  buttonMain: {
    fontWeight: "bold",
    padding: 10,
    borderRadius: 12,
    background: theme.btn.primary,
    "&:hover": {
      opacity: 0.9,
      background: theme.btn.primary,
    },
  },
}));

const ListView = () => {
  const classes = useStyles();
  const [limit] = useState(9);
  const [isLoading, setIsLoading] = useState(false);
  const [page, setPage] = useState(0);
  const [pokemons, setPokemons] = useState([]);
  const [myDbPokemon, setMyDbPokemon] = useState([]);

  useEffect(() => {
    getAllPokemon();
    // eslint-disable-next-line
  }, []);

  const getAllPokemon = () => {
    DbServices.getMyPokemons()
      .then((data) => {
        setMyDbPokemon(data || []);
      })
      .catch((err) => {
        console.log({ error });
      });
  };

  const { data, error, loading, fetchMore } = useQuery(GET_POKEMONS, {
    variables: { limit, offset: 0 },
  });

  useEffect(() => {
    const onCompleted = (data) => {
      const newGqlPokemons = [...data.pokemons.results];
      if (pokemons[0] && newGqlPokemons[0].name === pokemons[0].name) {
        setIsLoading(false);
      } else {
        const newNewDbPokemons = [];
        // eslint-disable-next-line
        newGqlPokemons.map((newPoke) => {
          const owned = myDbPokemon.filter((currPokemon) => {
            return currPokemon.name === newPoke.name;
          }).length;
          newNewDbPokemons.push({ ...newPoke, owned });
        });

        const newPokemons = pokemons.concat(newNewDbPokemons);
        setPokemons(newPokemons);
        setIsLoading(false);
      }
    };
    const onError = (error) => {
      return <div>{error}</div>;
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

  const handleLoadMore = () => {
    setIsLoading(true);
    if (isLoading) return;
    const newPage = page + 1;
    setPage(newPage);
    const newOffset = limit * newPage + 1;
    fetchMore({
      variables: { limit, offset: newOffset },
      updateQuery: (prev, { fetchMoreResult }) => {
        if (!fetchMoreResult) {
          return prev;
        }
        return fetchMoreResult;
      },
    });
  };

  return (
    <Fragment>
      {loading && <Loading />}
      {!loading && (
        <Page className={classes.root} title="Pokemon List">
          <Fragment>
            <Container maxWidth="lg">
              <Box style={{ marginBottom: 40 }}></Box>
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
              <Box
                display="flex"
                style={{ margin: 20 }}
                justifyContent="center"
              >
                {isLoading && <PokeBald />}
                {!isLoading && data && data.pokemons.next && (
                  <Button
                    className={classes.buttonMain}
                    onClick={handleLoadMore}
                  >
                    Load More
                  </Button>
                )}
              </Box>
            </Container>
          </Fragment>
        </Page>
      )}
    </Fragment>
  );
};

export default ListView;
