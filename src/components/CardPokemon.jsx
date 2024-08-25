import React, { useState, useContext } from 'react';
import { PokemonContext } from '../context/PokemonContext';
import Loaders from './Loaders';
import PagePokemon from './PagePokemon';
import DetailPokemon from './DetailPokemon';

const CardPokemon = () => {
  const { pokemonList, loading } = useContext(PokemonContext);
  const [selectedPokemon, setSelectedPokemon] = useState(null);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const handleMoreInfo = pokemon => {
    setSelectedPokemon(pokemon);
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
  };

  return (
    <div className="">
      {loading ? (
        <Loaders />
      ) : (
        <div className="max-w-7xl mx-auto h-screen">
          <div className="custom-scroll-container my-8">
            <div className="custom-scroll-content h-full grid grid-cols-[repeat(auto-fit,_minmax(200px,_1fr))] place-content-start justify-items-center gap-6">
              {pokemonList?.map(pokemon => (
                <div
                  key={pokemon.id}
                  className={`rounded-2xl card h-max  bg-black/50 relative p-6 border-2 border-transparent transition duration-[0.5s] ease-out  `}
                >
                  <div className="h-auto  gap-2 grid place-content-center ">
                    <div className="h-auto">
                      <img
                        src={pokemon.sprites.other.dream_world.front_default}
                        alt={`Pokemon ${pokemon.name}`}
                        className="w-44 h-44"
                      />
                    </div>
                    <div className="flex flex-col gap-4">
                      <span className="absolute right-0 top-0 font-lexend-deca text-primary-timberwolf text-3xl mt-2 mr-2"></span>
                      <h3 className="text-center first-letter:uppercase text-2xl font-arima font-semibold text-white">
                        {pokemon.name.split('-')[0]}
                      </h3>
                      <div className="flex flex-wrap justify-center gap-4">
                        {pokemon.types.map(type => (
                          <div key={type.type.name} className="flex flex-col items-center justify-center gap-2">
                            <img
                              src={`/assets/types/${type.type.name}.png`}
                              alt={type.type.name}
                              width={200}
                              height={200}
                              className="h-10 w-10 cursor-pointer"
                            />
                            <span className={` text-white font-lexend-deca ${type.type.name}`}>
                              {type.type.name.toUpperCase()}
                            </span>
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>
                  <button
                    onClick={() => handleMoreInfo(pokemon)}
                    className="w-[60%] card-button rounded-2xl  border-none bg-[#008bf8] text-white text-2xl absolute left-1/2 bottom-0 opacity-0 transition ease-out duration-[0.5s] overflow-hidden "
                  >
                    More info
                  </button>
                </div>
              ))}
            </div>
          </div>
          <PagePokemon />
        </div>
      )}
      <DetailPokemon pokemon={selectedPokemon} isOpen={isModalOpen} onClose={closeModal} />
    </div>
  );
};

export default CardPokemon;
