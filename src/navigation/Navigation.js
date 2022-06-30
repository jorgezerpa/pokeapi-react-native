import React from 'react';
import { Image } from 'react-native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Icon from 'react-native-vector-icons/FontAwesome5';
import FavoritesNavigation from './FavoritesNavigation';
import PokedexNavigation from './PokedexNavigation';
import AccountNavigation from './AccountNavigation';

const Tab = createBottomTabNavigator();

export default function Navigation() {
  return (
    <Tab.Navigator initialRouteName='pokedex' >
        <Tab.Screen name='favorites' component={FavoritesNavigation} options={{ title:'', headerTransparent: true, tabBarLabel:'Favoritos', tabBarIcon: ({ color, size })=><Icon name='heart' color={color} size={size} /> }} />
        <Tab.Screen name='pokedex' component={PokedexNavigation} options={{ header: ()=>null, tabBarLabel:'', tabBarIcon: renderPokeball }} />
        <Tab.Screen name='account' component={AccountNavigation} options={{ title:'', headerTransparent: true, tabBarLabel:'Mi cuenta', tabBarIcon: ({ color, size })=><Icon name='user' color={color} size={size} /> }} />
    </Tab.Navigator>
  )
}


function renderPokeball(){
  return <Image 
    source={require('../assets/pokeball.webp')}
    style={{ width: 75, height: 75, top: -15 }}
  />
}


