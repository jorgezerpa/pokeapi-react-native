import React, { useEffect, useState } from 'react'
import { ScrollView } from 'react-native'
import Icon from "react-native-vector-icons/FontAwesome5";
import { getSinglePokemonDetails } from '../api/pokemon';
import Header from '../components/pokemon/Header';
import Type from '../components/pokemon/Type';
import Stats from '../components/pokemon/Stats';
import Favorite from '../components/pokemon/Favorites';
import useAuth from '../hooks/useAuth';

export default function Pokemon({ navigation, route: {params} }) {
  const [pokemon, setPokemon] = useState(null);
  const { auth } = useAuth();

  useEffect(() => {
    navigation.setOptions({
      headerRight: () => auth && <Favorite pokemon={pokemon?.id} /> ,
      headerLeft: () => (
        <Icon
          name="arrow-left"
          color="#fff"
          size={20}
          style={{ marginLeft: 0 }}
          onPress={navigation.goBack}
        />
      ),
    });
  }, [navigation, params, pokemon]);


  useEffect(()=>{
    (async() => {
      try {
        const response = await getSinglePokemonDetails(params.id);
        setPokemon(response);
      } catch (error) {
        navigation.goBack();
      }
    })();
  }, [params])

  if(!pokemon) return null;

  return (
    <ScrollView>
      { pokemon && (
        <>
        <Header
          name={pokemon.name}
          order={pokemon.order}
          image={pokemon.sprites.other["official-artwork"].front_default}
          type={pokemon.types[0].type.name}
        />
        <Type types={pokemon.types} />
        <Stats stats={pokemon.stats} />
        </>
      )

      }
    </ScrollView>
  )
}