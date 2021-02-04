import React, { Fragment, useEffect, useState } from "react";
import styled from "@emotion/styled";
import { Button, Typography, makeStyles } from "@material-ui/core";
import { PokeCatch } from "../../../components/StyledComponents";
import { kDangerColor, kMainColor } from "../../../theme/constant";
import CreateIcon from "@material-ui/icons/Create";
import { DbServices } from "../../../localbase/indexedDbDexie";
import { catched } from "../../../utils/rng";

const FailedImage = "/static/images/Failed.png";
const GotchImage = "/static/images/Gotcha.png";

const useStyles = makeStyles((theme) => ({
  buttonMain: {
    fontWeight: "bold",
    marginTop: 24,
    padding: "10px 24px",
    borderRadius: 12,
    fontSize: 32,
    background: theme.btn.primary,
    "&:hover": {
      opacity: 0.9,
      background: theme.btn.primary,
    },
  },
}));

const Card = styled.div`
  display: flex;
  justify-content: start;
  flex-direction: column;
  align-items: center;
  min-height: calc(100vh - 100px);
`;

const PokemonName = ({ children, edit, error }) => {
  let border = "none";
  let color = "black";
  if (edit) {
    border = "1px solid black";
  } else if (error) {
    border = `1px solid ${kDangerColor}`;
    color = `${kDangerColor}`;
  }

  const Wrapper = styled.div`
    width: 320px;
    box-shadow: 0 2px 6px 0 rgba(49, 53, 59, 0.4);
    background: #fff;
    border-radius: 16px;
    position: relative;
    overflow: visible;
    padding: ${!edit ? "16px 0px" : "16px"};
    font-size: 1.5rem;
    margin-bottom: 20px;
    font-weight: bold;
    border: ${border};
    @media (max-width: 600px) {
      font-size: 1.4rem;
      width: 240px;
    }
    text-align: center;
    white-space: nowrap;
    color: ${color};
  `;

  return <Wrapper>{children}</Wrapper>;
};

const EditButton = styled.div`
  position: absolute;
  z-index: 100;
  right: 0;
  top: 50%;
  transform: translate(50%, -50%);
  display: flex;
  justify-content: center;
  align-items: center;
  cursor: pointer;
  width: 40px;
  height: 40px;
  background: ${kMainColor};
  border-radius: 50%;
  :hover {
    top: 48%;
  }
`;

const InputStyle = styled.input`
  width: 100%;
  font-size: 1.5rem;
  font-weight: bold;
  border: none;
  :focus {
    border: none;
    outline: none;
  }
`;

const Result = styled.img`
  width: 400px;
  height: 400px;
  animation: zoom 0.6s ease-in-out;
  transform: scale(0.8);
  @media (max-width: 600px) {
    width: 320px;
    height: 320px;
  }
  @keyframes zoom {
    0% {
      transform: scale(0.3);
    }
    100% {
      transform: scale(0.8);
    }
  }
`;

const ContentWrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin: auto;
  padding: 20px 0px;
`;

export const CatchingPage = ({ seeMyPokemon, pokemon, ...rest }) => {
  const classes = useStyles();
  const [loading, setLoading] = useState(true);
  const [succes, setSucces] = useState(false);
  const [catching, setCatching] = useState(0);
  // Naming
  const [editMode, setEditMode] = useState(false);
  const [error, setError] = useState("");
  const [pokemonName, setPokemonName] = useState(pokemon.name);

  useEffect(() => {
    // setLoading(false);
    setLoading(true);
    setTimeout(() => {
      console.log(catched());
      if (catched()) setSucces(false);
      else {
        setSucces(true);
      }
      setLoading(false);
    }, 1200);
    const abortController = new AbortController();
    return function cleanup() {
      abortController.abort();
    };
    // eslint-disable-next-line
  }, [catching]);

  const tryAgain = () => {
    setCatching(catching + 1);
  };

  const handleSubmit = () => {
    DbServices.getMyPokemonByName(pokemonName)
      .then((data) => {
        if (data) {
          setError("Seems like you have a duplicate name");
        } else {
          catchPokemon();
        }
      })
      .catch((err) => {
        console.log({ err });
      });
  };

  const catchPokemon = () => {
    const myNewPokemon = { ...pokemon, uniqueName: pokemonName };
    delete myNewPokemon["id"];
    DbServices.catchPokemon(myNewPokemon)
      .then((data) => {
        seeMyPokemon(parseInt(data));
      })
      .catch((err) => {
        console.log({ err });
      });
  };

  return (
    <Card>
      {loading && (
        <ContentWrapper>
          <PokeCatch></PokeCatch>
          <Typography variant="h1"> Catching Pokemon...</Typography>
        </ContentWrapper>
      )}
      {!loading && (
        <ContentWrapper>
          <Result src={succes ? GotchImage : FailedImage}></Result>
          <Typography style={{ textAlign: "center" }} variant="h1">
            {succes ? (
              <Fragment>
                {error && (
                  <div
                    style={{ display: "flex", justifyContent: "flex-start" }}
                  >
                    <span
                      style={{
                        fontSize: 14,
                        marginLeft: 20,
                        marginBottom: 8,
                        fontWeight: "normal",
                        color: kDangerColor,
                      }}
                    >
                      {error}
                    </span>
                  </div>
                )}
                <PokemonName edit={editMode} error={error}>
                  {!editMode && pokemonName}
                  {editMode && (
                    <InputStyle
                      key="input-1"
                      autoFocus
                      onKeyDown={(e) => {
                        if (e.key === "Enter") {
                          setEditMode(false);
                        }
                      }}
                      value={pokemonName}
                      onChange={(e) => {
                        e.preventDefault();
                        setPokemonName(e.target.value);
                      }}
                    ></InputStyle>
                  )}
                  <EditButton
                    onClick={() => {
                      if (!editMode) {
                        setError("");
                      }
                      setEditMode(!editMode);
                    }}
                  >
                    <CreateIcon fontSize="small" />
                  </EditButton>
                </PokemonName>
                <span>
                  GOTTEM! <br />
                  <Typography variant="h3">Gotta catch em' all!</Typography>
                </span>
              </Fragment>
            ) : (
              <span>
                OH NO! <br />
                <Typography variant="h3">It ran away...</Typography>
              </span>
            )}
          </Typography>
          {!succes && (
            <Button className={classes.buttonMain} onClick={tryAgain}>
              TRY AGAIN
            </Button>
          )}
          {succes && (
            <Button className={classes.buttonMain} onClick={handleSubmit}>
              KEEP
            </Button>
          )}
        </ContentWrapper>
      )}
    </Card>
  );
};
