import { StyleSheet, View, Text } from 'react-native'
import React from 'react';
import { map, capitalize } from 'lodash';
import getColorByPokemonType from '../../utils/getColorByPokemonType';

export default function Type({ types }) {

    return (
        <View style={styles.content}>
          {map(types, (item, index)=>(
            <View style={{backgroundColor: getColorByPokemonType(item.type.name), ...styles.pill}} key={'pokemontype-'+item.type.name + index} >
                <Text style={styles.text} >{ capitalize(item.type.name) }</Text>
            </View>
          ))}
        </View>
  )
}

const styles = StyleSheet.create({
    content: {
        marginTop: 50,
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center',
    },
    pill: {
        paddingHorizontal: 30,
        paddingVertical: 5,
        borderRadius: 20,
        marginHorizontal: 20,
    },
    text:{
        color: '#fff',
        fontWeight: 'bold'
    }
})