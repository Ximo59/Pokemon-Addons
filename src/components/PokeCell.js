import React from "react";

const PokeCell = ({ pokeClass, handleOnClick }) => {
  return (
    <button onClick={() => handleOnClick(pokeClass + 1)} className="poke-cell">
      <img
        className="img_poké"
        src={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${
          pokeClass + 1
        }.png`}
      />
    </button>
  );
};

export default PokeCell;
