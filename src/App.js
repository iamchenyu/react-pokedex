import React from "react";
import Pokeshow from "./Pokeshow";
import { pokeDex, pokeDexImageBase } from "./Pokedex";
import "./App.css";
import { choice } from "./helper";

export default () => {
  const pokeList1 = choice(pokeDex);
  const pokeList2 = choice(pokeDex);

  const ttl1 = pokeList1.reduce((acc, next) => acc + next.base_experience, 0);
  const ttl2 = pokeList2.reduce((acc, next) => acc + next.base_experience, 0);

  const winner = ttl1 >= ttl2 ? "Player 1" : "Player 2";

  return (
    <>
      <h1 className="App-title">Pokedex</h1>
      <Pokeshow pokeDex={pokeList1} total={ttl1} url={pokeDexImageBase} />
      <hr className="App-divider" />
      <Pokeshow pokeDex={pokeList2} total={ttl2} url={pokeDexImageBase} />
      <p className="App-score">The winner is {winner}! 🎉</p>
    </>
  );
};
