import React from 'react';
import ReactDOM from 'react-dom';

function PokemonName(props) {
  return <li>{props.name}</li>;
}

function PokedexList(props) {
  const pokedex = props.pokedex;
  return (
    <ul>
      {pokedex.map(pokemon =>
        <PokemonName key={pokemon.number}
                  name={pokemon.name}
        />
      )}
    </ul>
  );
}

const pokedex = [
  { number: '001', name: 'Bulbasaur' },
  { number: '004', name: 'Charmander' },
  { number: '007', name: 'Squirtle' },
  { number: '025', name: 'Pikachu' },
  { number: '039', name: 'Jigglypuff' }
];

ReactDOM.render(
  <PokedexList pokedex={pokedex} />,
  document.querySelector('#root')
);

/*
Another way:

function ListPokemon2(props) {
  const pokedex = props.pokedex;
  const pokemonList = pokedex.map(pokemon => {
    return (
      <li key={pokemon.number}>
        {pokemon.name}
      </li>
    );
  });
  return (
    <ul>{pokemonList}</ul>
  );
}

ReactDOM.render(
  <ListPokemon2 pokedex={pokedex} />,
  document.querySelector('#root')
);
*/
