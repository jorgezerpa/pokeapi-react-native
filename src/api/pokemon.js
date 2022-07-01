import { API_HOST } from '../utils/constants';

export async function getPokemonsApi(nextUrl){
    try{
        const url = `${API_HOST}/pokemon?limit=20&offset=0`;
        const response = await fetch(nextUrl || url);
        return await response.json();
    }
    catch(e){
        throw e
    }
}

export async function getPokemonDetailsApi(url){
    try{
        const response = await fetch(url);
        const result = await response.json();
        return result;
    }
    catch(e){
        throw e
    }
}

export async function getSinglePokemonDetails(id){
    try{
        const url = `${API_HOST}/pokemon/${id}`;
        const response = await fetch(url);
        const result = response.json();
        return result;
    } catch(e){
        throw e;
    }
}

