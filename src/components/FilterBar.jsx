import React, { useContext, useState } from 'react';
import { PokemonContext } from '../context/PokemonContext';

const FilterBar = () => {
  const { filterBarVisible, handleFilterType } = useContext(PokemonContext);


  const handleTypeSelected = event => {
    const type = event.target.name;
    handleFilterType(type);
  };

  return (
    <div
      className={`h-[100vh] fixed z-50 ${
        filterBarVisible ? '-translate-x-44 duration-1000' : 'translate-x-0 duration-1000'
      }`}
    >
      <div id="checklist" className="h-full rounded-r-3xl bg-white sm:text-white/80 duration-300 text-black/50  sm:bg-black/50">
        <input type="checkbox" name="grass" id="grass" onChange={handleTypeSelected} />
        <label htmlFor="grass">Planta</label>
        <input type="checkbox" name="fire" id="fire" onClick={handleTypeSelected} />
        <label htmlFor="fire">Fuego</label>
        <input type="checkbox" name="bug" id="bug" onClick={handleTypeSelected} />
        <label htmlFor="bug">Bicho</label>
        <input type="checkbox" name="fairy" id="fairy" onClick={handleTypeSelected} />
        <label htmlFor="fairy">Hada</label>
        <input type="checkbox" name="dragon" id="dragon" onChange={handleTypeSelected} />
        <label htmlFor="dragon">Dragón</label>
        <input type="checkbox" name="shadow" id="shadow" onClick={handleTypeSelected} />
        <label htmlFor="shadow">Fantasma</label>
        <input type="checkbox" name="ground" id="ground" onClick={handleTypeSelected} />
        <label htmlFor="ground">Tierra</label>
        <input type="checkbox" name="normal" id="normal" onClick={handleTypeSelected} />
        <label htmlFor="normal">Normal</label>
        <input type="checkbox" name="psychic" id="psychic" onClick={handleTypeSelected} />
        <label htmlFor="psychic">Psíquico</label>
        <input type="checkbox" name="steel" id="steel" onClick={handleTypeSelected} />
        <label htmlFor="steel">Acero</label>
        <input type="checkbox" name="dark" id="dark" onClick={handleTypeSelected} />
        <label htmlFor="dark">Siniestro</label>
        <input type="checkbox" name="electric" id="electric" onClick={handleTypeSelected} />
        <label htmlFor="electric">Eléctrico</label>
        <input type="checkbox" name="fighting" id="fighting" onClick={handleTypeSelected} />
        <label htmlFor="fighting">Lucha</label>
        <input type="checkbox" name="flying" id="flying" onClick={handleTypeSelected} />
        <label htmlFor="flying">Volador</label>
        <input type="checkbox" name="ice" id="ice" onClick={handleTypeSelected} />
        <label htmlFor="ice">Hielo</label>
        <input type="checkbox" name="poison" id="poison" onClick={handleTypeSelected} />
        <label htmlFor="poison">Veneno</label>
        <input type="checkbox" name="rock" id="rock" onClick={handleTypeSelected} />
        <label htmlFor="rock">Roca</label>
        <input type="checkbox" name="water" id="water" onClick={handleTypeSelected} />
        <label htmlFor="water">Agua</label>
      </div>
    </div>
  );
};

export default FilterBar;
