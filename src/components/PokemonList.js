import { StyleSheet, ActivityIndicator, FlatList, Platform, View } from 'react-native'
import React from 'react'
import PokemonCard from './PokemonCard'

export default function PokemonList({ pokemons, loadPokemons, isNext }) {
  const loadMore = () => {
    loadPokemons();
  }

  return (
    <>
      <View style={styles.container}>
        <FlatList
            data={pokemons}
            numColumns={2}
            showsVerticalScrollIndicator={false}
            keyExtractor={(pokemon)=> String(pokemon.id)}
            renderItem={({item})=><PokemonCard pokemon={item} />}
            contentContainerStyle={styles.flatListContainer}
            onEndReached = { isNext && loadMore }
            onEndReachedThreshold= {0.1} 
            ListFooterComponent = {isNext && <ActivityIndicator size="large" style={styles.spinner} color='#AEAEAE' />}
        />
      </View>
    </>
  )
}


const styles = StyleSheet.create({
    container:{
      paddingTop: Platform.OS === 'android' ? 40 : 0
    },
    flatListContainer : {
        paddingHorizontal: 5,
      },
    spinner: {
      marginTop: 20,
      marginBottom: 60,
    }
})