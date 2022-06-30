import React, { useState, useEffect } from 'react'
import { SafeAreaView } from 'react-native'
import { getPokemonsApi, getPokemonDetailsApi }  from '../api/pokemon';
import PokemonList from '../components/PokemonList';

export default function Pokedex() {
  const [pokemons, setPokemons] = useState([]);
  const [nextUrl, setNextUrl] = useState(null);

  useEffect(()=>{
    (async()=>{
      await loadPokemons()
    })()
  }, [])

  const loadPokemons = async() => {
    try{  
      const response = await getPokemonsApi(nextUrl);
      setNextUrl(response.next);
      const pokemonsArray = [];
      for await (let pokemon of response.results){
        const pokemonDetails = await getPokemonDetailsApi(pokemon.url);
        pokemonsArray.push({
          id: pokemonDetails.id,
          name: pokemonDetails.name,
          type: pokemonDetails.types[0].type.name,
          order: pokemonDetails.order,
          image: pokemonDetails.sprites.other["official-artwork"].front_default

        });
      }
      setPokemons([...pokemons, ...pokemonsArray ]);
    }
    catch(e){
      console.error(e)
    }
  }

  return (
    <SafeAreaView>
      <PokemonList pokemons={pokemons} isNext={nextUrl} loadPokemons={loadPokemons} />
    </SafeAreaView>
  )
}