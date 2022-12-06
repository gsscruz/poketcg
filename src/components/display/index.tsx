import { View, Text, Image, TouchableOpacity } from 'react-native';
import React, { useState } from 'react';

import axios from 'axios';
type Props = {
  pickedPokemon: string;
};

const PokemonDisplay = ({ pickedPokemon, navigation }: any) => {
  return (
    <View>
      <TouchableOpacity
        onPress={() =>
          navigation.navigate('TCG', {
            pickedPokemon: pickedPokemon,
          })
        }
      >
        <Image
          style={{ width: 200, height: 200 }}
          source={{
            uri: pickedPokemon?.image
              ? pickedPokemon?.image
              : 'https://www.pngall.com/wp-content/uploads/4/Pokemon-Pokeball.png',
          }}
        />
      </TouchableOpacity>
    </View>
  );
};

export default PokemonDisplay;
