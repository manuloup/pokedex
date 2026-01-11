import { useState } from "react";
import "./App.css";
import PokemonCard from "./components/PokemonCard";

const pokemonList = [
  {
    name: "Darkrai",
    imgSrc:
      "https://www.pokemon.com/static-assets/content-assets/cms2/img/pokedex/full/491.png",
  },
  {
    name: "Absol",
    imgSrc:
      "https://www.pokemon.com/static-assets/content-assets/cms2/img/pokedex/full/359.png",
  },
  {
    name: "Mimiqui",
    imgSrc:
      "https://www.pokemon.com/static-assets/content-assets/cms2/img/pokedex/full/778.png",
  },
  {
    name: "Rayquaza",
    imgSrc:
      "https://www.pokemon.com/static-assets/content-assets/cms2/img/pokedex/full/384.png",
  },
  {
    name: "Noctali",
    imgSrc:
      "https://www.pokemon.com/static-assets/content-assets/cms2/img/pokedex/full/197.png",
  },
  {
    name: "Arceus",
    imgSrc:
      "https://www.pokemon.com/static-assets/content-assets/cms2/img/pokedex/full/493.png",
  },
];

function App() {
  const [pokemonName, setPokemonName] = useState("bulbasaur");

  const pokemon = pokemonList.find((p) => p.name === pokemonName);

  if (!pokemon) {
    throw new Error("Invalid pokemon name");
  }

  return (
    <div>
      <nav>
        {pokemonList.map((p) => (
          <button
            key={p.name}
            type="button"
            onClick={() => setPokemonName(p.name)}
          >
            {p.name}
          </button>
        ))}
      </nav>

      <PokemonCard pokemon={pokemon} />
    </div>
  );
}

export default App;

