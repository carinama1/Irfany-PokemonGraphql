import React from "react";
import styled from "@emotion/styled";
import { Tag } from "../../../components/StyledComponents";

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
  box-shadow: 0 1px 6px 0 rgba(49, 53, 59, 0.12);
`;

const PokemonName = ({ children }) => {
  const Wrapper = styled.div`
    width: 320px;
    box-shadow: 0 2px 6px 0 rgba(49, 53, 59, 0.4);
    background: #fff;
    border-radius: 16px;
    position: relative;
    overflow: visible;
    padding: 16px;
    font-size: 1.5rem;
    margin-top: 20px;
    font-weight: bold;
    text-transform: capitalize;
    @media (max-width: 600px) {
      font-size: 1.4rem;
      width: 240px;
    }
    text-align: center;
    white-space: nowrap;
  `;

  return <Wrapper>{children}</Wrapper>;
};

const PokemonHeader = ({ name, image, types, ...rest }) => {
  return (
    <CardContainer>
      <PokemonImage src={image} alt="Pokemon"></PokemonImage>
      <PokemonName>{name}</PokemonName>
      <div style={{ margin: "16px 0px", display: "flex" }}>
        {types &&
          types.map((type, index) => {
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
