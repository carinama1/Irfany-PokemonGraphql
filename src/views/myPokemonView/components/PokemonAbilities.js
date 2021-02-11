import React, { useContext } from "react";
import styled from "@emotion/styled";
import { Tag } from "../../../components/StyledComponents";
import { capitalize } from "@material-ui/core";
import { MyPokemonContext } from "../../context/pokemonContext";

const CardContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  padding-top: 18px;
  margin: 0px 20px;
`;

const Card = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: start;
  flex-flow: {
    flex-direction: row;
    flex-wrap: wrap;
  }
  padding: 10px 10px 32px 32px;
  @media (max-width: 600px) {
    padding: 10px 10px 32px 0px;
  }
`;

const PokemonName = styled.div`
  width: 320px;
  box-shadow: 0 2px 6px 0 rgba(49, 53, 59, 0.4);
  border-radius: 16px;
  padding: 16px;
  font-size: 1.5rem;
  margin-top: 20px;
  font-weight: bold;
  background-color: #f9b233;
  text-transform: capitalize;
  font-family: "Robotto";
  color: white;
  @media (max-width: 600px) {
    font-size: 1.3rem;
    width: 200px;
    padding: 12px;
  }
  text-align: center;
  white-space: nowrap;
  overflow: hidden;
`;

const PokemonAbilities = () => {
  const { pokemon } = useContext(MyPokemonContext);
  return (
    <CardContainer>
      <PokemonName>Abilities</PokemonName>
      {/* <Tag>Abilities</Tag> */}
      <Card>
        {pokemon.abilities &&
          pokemon.abilities.map(({ ability }, index) => {
            return <Tag key={`item-${index}`}>{capitalize(ability.name)}</Tag>;
          })}
      </Card>
      <PokemonName style={{ marginTop: 0 }}>Moves</PokemonName>
      {/* <Tag>Moves</Tag> */}
      <Card>
        {pokemon.moves &&
          pokemon.moves.map(({ move }, index) => {
            return <Tag key={`item-${index}`}>{capitalize(move.name)}</Tag>;
          })}
      </Card>
    </CardContainer>
  );
};

export default PokemonAbilities;
