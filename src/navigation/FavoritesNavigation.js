import React from 'react'
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Favorites from '../screens/Favorites';
import Pokemon from '../screens/Pokemon';

const Stack = createNativeStackNavigator();

export default function FavoritesNavigation() {
  return (
    <Stack.Navigator>
        <Stack.Screen name='Favorites' component={Favorites} options={{ header: ()=>null }} />
        <Stack.Screen name='Pokemon' component={Pokemon} options={{ title:'', headerTransparent: true }} />        
    </Stack.Navigator>
  )
}