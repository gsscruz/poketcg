import React, { useEffect, useState } from 'react';
import { View, StyleSheet } from 'react-native';
import Carousel, { Pagination } from 'react-native-snap-carousel';
import CarouselCardItem, { SLIDER_WIDTH, ITEM_WIDTH } from './CarouselCardItem';
import data from './data';
import axios from 'axios';

const CarouselCards = ({ route }) => {
  const { pickedPokemon } = route.params;

  const isCarousel = React.useRef(null);

  const [index, setIndex] = React.useState(0);

  const [pokemonCard, setPokemonCard] = useState([]);
  //get name from piockedPokemon and make a get request to another pokemon api to get the card
  useEffect(() => {
    axios({
      method: 'GET',
      url: 'https://api.pokemontcg.io/v2/cards',
      params: {
        q: '!name:' + pickedPokemon?.name,
      },
      headers: {
        'X-Api-Key': '5c3d663f-2e17-4587-a2a3-4c1cc7ef2432',
      },
    }).then((cards) => {
      cards.data.data.map((card) => {
        setPokemonCard((prevState) => [
          ...prevState,
          { imgUrl: card.images.large },
        ]);
      });
    });
  }, []);

  return (
    <View style={styles.container}>
      <Carousel
        layout='tinder'
        layoutCardOffset={9}
        ref={isCarousel}
        // data={[{ imgUrl: pickedPokemon?.image }]}
        data={pokemonCard}
        // data={pokemonCard.map(() => {
        //   return { imgUrl: pokemonCard };
        // })}
        renderItem={CarouselCardItem}
        sliderWidth={SLIDER_WIDTH}
        itemWidth={ITEM_WIDTH}
        inactiveSlideShift={0}
        useScrollView={true}
      />
    </View>
  );
};
const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
    padding: '30%',
    flex: 1,
  },
});

export default CarouselCards;
