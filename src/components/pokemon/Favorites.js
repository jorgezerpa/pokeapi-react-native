import React, { useState, useEffect } from 'react';
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import { addPokemonFavorite, isPokemonFavorite, removePokemonFavorite } from '../../api/favorites';

export default function Favorites({ pokemon }) {
  const [isFavorite, setIsFavorite] = useState(undefined);
  const [reloadCheck, setReloadCheck] = useState(false);
  const Icon = isFavorite ? FontAwesome : FontAwesome5;

  useEffect(()=>{
    (async()=>{
        try {
          const response = await isPokemonFavorite(pokemon);
          setIsFavorite(response); 
        } catch (error)  {
          setIsFavorite(false);
        }
    })()
  },[pokemon, reloadCheck])

  const onReloadCheckFavorite = () => {
    setReloadCheck(!reloadCheck);
  }

  const addFavorite = async() => {
      try {
        await addPokemonFavorite(pokemon)
        onReloadCheckFavorite();
       } catch (error) {
        console.log(error)
       }
  }

  const removeFavorite = async() => {
      try {
        await removePokemonFavorite(pokemon);
        onReloadCheckFavorite();
      } catch (error) {
        console.log(error)
      }
  }

  return (
    <Icon style={{ marginRight: 20 }} name="heart" color="#fff" size={20} onPress={!isFavorite ? addFavorite : removeFavorite }  />
  )
}