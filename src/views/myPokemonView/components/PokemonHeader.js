import React, { useEffect, useState } from "react";
import styled from "@emotion/styled";
import { Tag } from "../../../components/StyledComponents";
import { kDangerColor, kMainColor } from "../../../theme/constant";
import CreateIcon from "@material-ui/icons/Create";
import { DbServices } from "../../../localbase/indexedDbDexie";

const CardContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding-top: 32px;
`;

const PokemonImage = styled.img`
  background: #f5f5f5;
  width: 260px;
  border-radius: 50%;
  margin-bottom: 32px;
  box-shadow: 0 1px 6px 0 rgba(49, 53, 59, 0.12);
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

const PokemonHeader = ({ pokemon, ...rest }) => {
  // Naming
  const [editMode, setEditMode] = useState(false);
  const [firstLoad, setFirstLoad] = useState(true);
  const [error, setError] = useState("");
  const [pokemonName, setPokemonName] = useState(pokemon.uniqueName);

  useEffect(() => {
    setError("");
    if (!firstLoad) {
      handleSubmit();
    }
    setFirstLoad(false);
    // eslint-disable-next-line
  }, [editMode]);

  const handleChangeName = () => {
    DbServices.updatePokemonNameById(pokemon.id, pokemonName)
      .then((data) => {
        // Updated Sucesfully
      })
      .catch((err) => {
        console.log({ err });
      });
  };

  const handleSubmit = () => {
    if (!editMode) {
      if (pokemonName !== pokemon.uniqueName) {
        DbServices.getMyPokemonByName(pokemonName)
          .then((data) => {
            if (data) {
              setError("Seems like you have a duplicate name");
            } else {
              handleChangeName();
            }
          })
          .catch((err) => {
            console.log({ err });
          });
      }
    }
  };

  return (
    <CardContainer>
      <PokemonImage
        src={pokemon.sprites.front_default}
        alt="Pokemon"
      ></PokemonImage>
      {error && (
        <span
          style={{
            fontSize: 14,
            margin: "20px 0 8px 8px",
            fontWeight: "normal",
            color: kDangerColor,
          }}
        >
          {error}
        </span>
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
        <EditButton onClick={() => setEditMode(!editMode)}>
          <CreateIcon fontSize="small" />
        </EditButton>
      </PokemonName>
      <div style={{ margin: "16px 0px", display: "flex" }}>
        {pokemon.types &&
          pokemon.types.map((type, index) => {
            return (
              <Tag type={type.type.name} key={`item-${index}`}>
                {type.type.name}
              </Tag>
            );
          })}
      </div>
    </CardContainer>
  );
};

export default PokemonHeader;
