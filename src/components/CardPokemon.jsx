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
        <div className="p-4 mx-auto max-w-7xl">
          <div className="my-8 custom-scroll-container">
            <div className="custom-scroll-content grid h-full grid-cols-[repeat(auto-fit,_minmax(200px,_1fr))] place-content-start justify-items-center gap-6">
              {pokemonList?.map(pokemon => (
                <div
                  key={pokemon.id}
                  className={`card relative h-max  rounded-2xl border-2 border-transparent bg-black/50 p-6 transition duration-[0.5s] ease-out  `}
                >
                  <div className="grid h-auto gap-2 place-content-center ">
                    <div className="h-auto">
                      <img
                        src={pokemon.sprites.other.dream_world.front_default}
                        alt={`Pokemon ${pokemon.name}`}
                        className="h-44 w-44"
                      />
                    </div>
                    <div className="flex flex-col gap-4">
                      <span className="absolute top-0 right-0 mt-2 mr-2 text-3xl font-lexend-deca text-primary-timberwolf"></span>
                      <h3 className="text-2xl font-semibold text-center text-white font-arima first-letter:uppercase">
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
                              className="w-10 h-10 cursor-pointer"
                            />
                            <span className={` font-lexend-deca text-white ${type.type.name}`}>
                              {type.type.name.toUpperCase()}
                            </span>
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>
                  <button
                    onClick={() => handleMoreInfo(pokemon)}
                    className="card-button absolute bottom-0 left-1/2 w-[60%] overflow-hidden rounded-2xl border-none bg-[#008bf8] text-2xl text-white opacity-0 transition duration-[0.5s] ease-out "
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
