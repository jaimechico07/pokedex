import React from 'react';

const DetailPokemon = ({ pokemon, isOpen, onClose }) => {
  if (!isOpen) return null;
  const heightInMeters = pokemon.height / 10; // Convertir decímetros a metros
  const weightInKilograms = pokemon.weight / 10; // Convertir hectogramos a kilogramos
  console.log(pokemon);
  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-50">
      <div className="bg-white rounded-2xl shadow-lg w-11/12 md:w-2/3 lg:w-1/2 relative">
        <div style={{ backgroundColor: `var(--color-${pokemon.types[0].type.name})` }} className={`p-4  rounded-t-2xl`}>
          <h2 className="text-2xl font-bold capitalize text-white">
            {pokemon.name} #{String(pokemon.id).padStart(3, '0')}
          </h2>
        </div>
        <div className="grid grid-cols-[repeat(auto-fit,_minmax(250px,_1fr))]">
          <figure className="p-4">
            <img
              src={pokemon.sprites.other.dream_world.front_default}
              alt={`Pokemon ${pokemon.name}`}
              className="w-64 h-64 mx-auto"
            />
          </figure>
          <div className="p-4">
            <div className="flex flex-wrap justify-center gap-4">
              {pokemon.types.map(type => (
                <div key={type.type.name} className="flex  items-center justify-center gap-2">
                  <img src={`/assets/types/${type.type.name}.png`} alt={type.type.name} className="h-4 w-4" />
                  <span className="text-black capitalize">{type.type.name}</span>
                </div>
              ))}
            </div>
            <div>
              <div className="flex flex-col items-start justify-center ">
                <h2 className={`uppercase ${pokemon.types[0].type.name}`}>Estadisticas</h2>
                {pokemon.stats.map(stat => (
                  <div key={stat.stat.name} className="flex items-center justify-between gap-2 w-full">
                    <span className="text-black  capitalize">{stat.stat.name}:</span>
                    <span className="text-black ">{stat.base_stat}</span>
                  </div>
                ))}
              </div>

              <div className="flex flex-col items-start justify-center ">
                <h2 className={`uppercase ${pokemon.types[0].type.name}`}>Habilidades</h2>
                <div className="flex justify-between w-full">
                  <div>
                    {pokemon.abilities.map(ability => (
                      <div key={ability.ability.name} className="flex items-center  gap-2 w-full">
                        <span className="text-black  capitalize">{ability.ability.name}</span>
                      </div>
                    ))}
                  </div>
                  <div>
                    <p>Altura: {heightInMeters} m</p>
                    <p>Peso: {weightInKilograms} kg</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <hr />
        <button onClick={onClose} className={`text-end w-full p-4 ${pokemon.types[0].type.name}`}>
          cerrar
        </button>
      </div>
    </div>
  );
};

export default DetailPokemon;
