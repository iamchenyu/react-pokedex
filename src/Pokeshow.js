import React from "react";
import Pokecard from "./Pokecard";
import "./Pokeshow.css";

export default ({ pokeDex, total, url }) => (
  <>
    <div className="Pokeshow">
      {pokeDex.map((pokemon) => (
        <Pokecard
          key={pokemon.id}
          id={pokemon.id}
          name={pokemon.name}
          type={pokemon.type}
          exp={pokemon.base_experience}
          baseURL={url}
        />
      ))}
    </div>
    <p className="Pokeshow-score">Total Experience: {total}</p>
  </>
);
