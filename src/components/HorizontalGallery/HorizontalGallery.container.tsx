import React from "react";
import { useNavigation } from "@react-navigation/native";
import { StyleProp, ViewStyle } from "react-native";

import HorizontalGallery, { MovieDetailsProps } from "./HorizontalGallery";
import { Screens } from "../../navigation/Screens";

const freeGuy = require('../../assets/images/galleryImages/freeguy.jpg');
const godzilla = require('../../assets/images/galleryImages/godzilla.jpg');
const greenKnight = require('../../assets/images/galleryImages/greenknight.jpg');
const perksWallflower = require('../../assets/images/galleryImages/perkswallflower.jpeg');
const spaceJam = require('../../assets/images/galleryImages/spacejam.jpeg');
const tenet = require('../../assets/images/galleryImages/tenet.jpeg');

const data = [
  {
    title: 'Free Guy',
    image: freeGuy,
    duration: 138,
    category: 'Action / Comedy',
    description: 'in Free Guy, de nieuwe epische avonturen-komedie film van Twentieth Century Studios, ontdekt een bankbediende (Ryan Reynolds) dat hij eigenlijk een figurant is in een open-world videogame, besluit hij om de held van zijn eigen verhaal te worden… één die hij zelf herschrijft. Nu hij alles op het spel heeft gezet, doet hij er alles aan om de wereld naar zijn hand te zetten in zijn eigen versie – zonder beperkingen. In een wereld waarin er geen grenzen zijn, bepaalt hij uiteindelijk zelf zijn lot.',
  },
  {
    title: 'Godzulla vs. Kong',
    image: godzilla,
    duration: 113,
    category: 'Action / Sci-Fi',
    description: 'Mensen en titanen leven samen. Kong en zijn beschermers ondernemen een gevaarlijke reis om zijn ware thuis te vinden. Jia, een weesmeisje dat een unieke en krachtige band heeft met het machtige beest, gaat ook mee. Ze komen echter al snel op het pad van een woedende Godzilla, die alles vernietigt wat hij tegenkomt.',
  },
  {
    title: 'The Green Knight',
    image: greenKnight,
    duration: 130,
    category: 'Adventure / Drama',
    description: 'De koppige neef van koning Arthur begint aan een zoektocht om de Groene Ridder te confronteren, een reus die in Camelot verschijnt. Hij zet alles op het spel en begint aan een episch avontuur om zichzelf te bewijzen voor zijn familie en de rechtbank.',
  },
  {
    title: 'The Perks of Being a Wallflower',
    image: perksWallflower,
    duration: 102,
    category: 'Drama / Romance',
    description: 'De sociaal onhandige tiener Charlie is een muurbloempje en kijkt altijd vanaf de zijlijn naar het leven, totdat twee charismatische studenten zijn mentoren worden.'
  },
  {
    title: 'Space Jam: A New Legacy',
    image: spaceJam,
    duration: 115,
    category: 'Animation / Adventure',
    description: 'Basketballegende LeBron James beleeft samen met zijn jonge zoon Dom een wild avontuur met de Looney Tunes in dit animatie/live-action vervolg op de klassieke film Space Jam uit 1996.'
  },
  {
    title: 'Tenet',
    image: tenet,
    duration: 150,
    category: 'Action / Sci-Fi',
    description: 'Een geheim agent wordt gerekruteerd door een mysterieuze organisatie, genaamd Tenet, en wordt hierdoor op een missie gestuurd die zich afspeelt in de schemerwereld van de internationale spionage. De missie van deze agent is om de Derde Wereldoorlog te voorkomen, die gebeurtenis zal namelijk de gehele wereldbevolking doen laten verdwijnen.'
  }
];

const HorizontalGalleryContainer = ({ style }: { style?: StyleProp<ViewStyle> }) => {
  const navigation = useNavigation();

  const onPressMovie = (item: MovieDetailsProps) => {
    navigation.navigate(Screens.Details, { movieDetails: item });
  }

  return (
    <HorizontalGallery data={data} style={style} onPress={onPressMovie} />
  )
}

export default HorizontalGalleryContainer;
