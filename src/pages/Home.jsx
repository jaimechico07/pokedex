import React, { useState, useEffect } from 'react';

import Navigation from '../components/Navigation';

import { PokemonProvider } from '../context/PokemonProvider';
import FilterBar from '../components/FilterBar';
import { CardPokemon } from '../components/CardPokemon';
import DetailPokemon from './../components/DetailPokemon';


const images = [
  '/assets/backgrounds/1.jpg',
  '/assets/backgrounds/2.jpg',
  '/assets/backgrounds/3.jpg',
  '/assets/backgrounds/4.jpg',
  '/assets/backgrounds/5.jpg',
  '/assets/backgrounds/6.jpg',
  '/assets/backgrounds/7.jpg',
  '/assets/backgrounds/8.jpg',
  '/assets/backgrounds/9.jpg',
];

const Home = () => {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImageIndex(prevIndex => (prevIndex + 1) % images.length);
    }, 20000);

    return () => {
      clearInterval(interval);
    };
  }, []);

  const backgroundImageStyle = {
    backgroundImage: `url(${images[currentImageIndex]})`,
    backgroundSize: 'cover',
    backgroundRepeat: 'no-repeat',
    backgroundPosition: 'center',
    backgroundAttachment: 'fixed',
  };

  return (
    <>
      <PokemonProvider>
        <div className="relative" style={backgroundImageStyle}>
          <FilterBar />
          <div className=" p-6  mx-auto bg-[#53535398]">
            <Navigation />
            <CardPokemon />
          </div>
          <DetailPokemon className="absolute bottom-0 left-0 right-0" />
        </div>
      </PokemonProvider>
    </>
  );
};

export default Home;
