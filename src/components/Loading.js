import React from "react";
import { PokeBald } from "./StyledComponents";

const Loading = () => {
  return (
    <div
      style={{
        height: "100%",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
      }}
    >
      <PokeBald />
    </div>
  );
};

export default Loading;
