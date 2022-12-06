import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, SafeAreaView, Button } from 'react-native';
import PokemonDisplay from '../../components/display';
import { Header } from '../../components/header';

import { Container } from './styles';
import { Dropdown } from '../../components/dropdown';
import { useEffect, useState } from 'react';
import axios from 'axios';

export type Pokemon = {
  name: string;
  id: number;
  image: string;
};
export const Home = ({ navigation }) => {
  let API = 'https://pokeapi.co/api/v2/pokemon/';

  const [pokemon, setPokemon] = useState<Pokemon[]>([]);

  const [pickedPokemon, setPickedPokemon] = useState(
    'https://archives.bulbagarden.net/media/upload/archive/d/dc/20160713080812%21GO_Pok%C3%A9_Ball.png'
  );

  useEffect(() => {
    for (let i = 1; i <= 20; i++) {
      let chosenPokemon: Pokemon;
      axios
        .get(API + i)
        .then((response) => {
          chosenPokemon = {
            name: response.data.name,
            id: response.data.id,
            image:
              response.data.sprites.other['official-artwork'].front_default,
          };
        })
        .then((data) => {
          setPokemon((prevState) => [...prevState, chosenPokemon]);
        });
    }
  }, []);

  return (
    <>
      <SafeAreaView style={{ flex: 1 }}>
        <StatusBar style='auto' />
        <Header mensagem='Pokemon TCG' />
        <Container>
          <PokemonDisplay
            pickedPokemon={pickedPokemon}
            setPickedPokemon={setPickedPokemon}
            navigation={navigation}
          />
          <Dropdown
            listOfPokemon={pokemon}
            setPickedPokemon={setPickedPokemon}
          />
        </Container>
      </SafeAreaView>
    </>
  );
};
