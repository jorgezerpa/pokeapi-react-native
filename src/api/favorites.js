import AsyncStorage from "@react-native-async-storage/async-storage";
import { includes, pull } from 'lodash';
import { FAVORITE_STORAGE } from "../utils/constants";

export async function getPokemonFavorite(id){
    try{
        const response = await AsyncStorage.getItem(FAVORITE_STORAGE);
        return JSON.parse(response || "[]"); //into str        
    }catch(e){
        throw e
    }
}

export async function addPokemonFavorite(id){
    try{
        const favorites = await getPokemonFavorite(id);
        favorites.push(id);
        await AsyncStorage.setItem(FAVORITE_STORAGE, JSON.stringify(favorites));
    }catch(e){
        throw e
    }
}

export async function isPokemonFavorite(id){
    try{
        const response = await getPokemonFavorite();
        return includes(response, id);
    } catch(e){
        throw e
    }
}


export async function removePokemonFavorite(id){
    try{
        const response = await getPokemonFavorite();
        const newFavorites = pull(response, id);
        await AsyncStorage.setItem(FAVORITE_STORAGE, JSON.stringify(newFavorites));
    } catch(e){
    throw e
    }
}
