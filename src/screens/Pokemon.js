import React, { useEffect, useState } from 'react'
import { ScrollView } from 'react-native'
import Icon from "react-native-vector-icons/FontAwesome5";
import { getSinglePokemonDetails } from '../api/pokemon';
import Header from '../components/pokemon/Header';
import Type from '../components/pokemon/Type';
import Stats from '../components/pokemon/Stats';

export default function Pokemon({ navigation, route: {params} }) {
  const [pokemon, setPokemon] = useState(null);
  
  useEffect(() => {
    navigation.setOptions({
      headerRight: () => null,
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
  }, [navigation, params]);


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