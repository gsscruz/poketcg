import { View, Text, StyleSheet } from 'react-native';
import React, { useState, useEffect } from 'react';

import DropDownPicker from 'react-native-dropdown-picker';

import { Pokemon } from '../../Screens/Home';
type Props = {
  listOfPokemon: Pokemon[];
  setPickedPokemon: string;
};
export const Dropdown = ({ listOfPokemon, setPickedPokemon }: any) => {
  const [open, setOpen] = useState(false);
  const [value, setValue] = useState(null);
  const [items, setItems] = useState([]);

  useEffect(() => {
    listOfPokemon.length > 0
      ? setItems(
          listOfPokemon.map((poke: any) => {
            let pokeValue =
              poke.name.charAt(0).toUpperCase() + poke.name.slice(1);
            return { label: pokeValue, value: poke.name };
          })
        )
      : null;
  }, [listOfPokemon]);

  const findPokemon = (wantedPokemon: any) => {
    let foundPokemon = listOfPokemon.find((poke: any) => {
      return poke.name === wantedPokemon;
    });
    setPickedPokemon(foundPokemon);
  };
  return (
    <DropDownPicker
      style={styles.dropdown}
      containerStyle={{ width: '70%' }}
      open={open}
      value={value}
      items={items}
      setOpen={setOpen}
      setValue={setValue}
      setItems={setItems}
      onChangeValue={() => findPokemon(value)}
    />
  );
};
const styles = StyleSheet.create({
  dropdown: {},
});
