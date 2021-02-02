import React, { Fragment, useEffect, useState } from "react";
import { Button, capitalize, Hidden, makeStyles } from "@material-ui/core";
import Page from "../../components/Page";
import { useNavigate, useParams } from "react-router";
import PokemonHeader from "./components/PokemonHeader";
import styled from "@emotion/styled";
import Loading from "../../components/Loading";
import PokemonAbilities from "./components/PokemonAbilities";
import { StickyComponent } from "../../components/StyledComponents";
import ReleasingPage from "./components/ReleasingPage";
import MobileHeader from "../../components/MobileHeader";
import { DbServices } from "../../localbase/indexedDbDexie";

const useStyles = makeStyles((theme) => ({
  root: {
    minHeight: "100%",
    padding: 0,
    // background: "#a8ff78" /* fallback for old browsers */,
    // // eslint-disable-next-line
    // background: "linear-gradient(to left,#00fcb0,#8fff52)",
  },
  buttonMain: {
    fontWeight: "bold",
    padding: "10px 24px",
    boxShadow: "0 1px 6px 0 rgba(49, 53, 59, 0.12)",
    borderRadius: 12,
    color: "white",
    fontSize: "inherit",
    background: theme.btn.danger,
    "&:hover": {
      background: theme.btn.danger,
      marginBottom: 20,
    },
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

const FooterRelease = styled.div`
  height: 100px;
  width: 100%;
  display: flex;
  align-items: center;
  font-size: 32px;
  justify-content: center;
  @media (max-width: 600px) {
    font-size: 1rem;
  }
`;

const PokemonView = () => {
  const classes = useStyles();
  const navigation = useNavigate();
  const param = useParams();
  const [isLoading, setIsLoading] = useState(true);
  const [isReleasing, seIsReleasing] = useState(false);
  const [pokemon, setPokemon] = useState({});

  useEffect(() => {
    const { id } = param;
    DbServices.getMyPokemonById(parseInt(id)).then((data) => {
      if (!data) {
        navigation("/my-pokemon-list", { replace: true });
      } else {
        setPokemon(data);
        setIsLoading(false);
      }
    });
    // eslint-disable-next-line
  }, []);

  const releasePokemon = () => {
    const { id } = param;
    DbServices.releasePokemon(parseInt(id))
      .then(() => {
        seIsReleasing(true);
      })
      .catch((err) => {
        console.log({ err });
      });
  };

  return (
    //   TODO : Handle error when paste to here directly : done
    <Fragment>
      {isLoading && <Loading />}
      {!isLoading && (
        <Page
          className={classes.root}
          title={(pokemon && capitalize(pokemon.uniqueName)) || "Pokemon"}
        >
          <Hidden smUp>
            <MobileHeader />
            <div style={{ marginBottom: 42 }}></div>
          </Hidden>
          {isReleasing && (
            <ReleasingPage
              name={pokemon.uniqueName}
              image={pokemon.sprites.front_default}
            />
          )}
          {!isReleasing && (
            <Fragment>
              <PokemonHeader
                pokemon={pokemon}
                types={pokemon.types}
              ></PokemonHeader>
              <Divider />
              <PokemonAbilities
                abilities={pokemon.abilities}
                moves={pokemon.moves}
              />
              <StickyComponent>
                <FooterRelease>
                  <Button
                    className={classes.buttonMain}
                    onClick={releasePokemon}
                  >
                    RELEASE
                  </Button>
                </FooterRelease>
              </StickyComponent>
            </Fragment>
          )}
        </Page>
      )}
    </Fragment>
  );
};

export default PokemonView;
