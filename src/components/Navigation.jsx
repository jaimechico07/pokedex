import React, { useEffect, useState, useContext } from 'react';
import { FiSearch } from 'react-icons/fi';
import { PokemonContext } from '../context/PokemonContext';
import { BsArrowBarRight } from 'react-icons/bs';

const Navigation = () => {
  const { searchPokemon,handleFilterGeneration, handleBarVisible } = useContext(PokemonContext);

  const handleInputChange = event => {
    const value = event.target.value;
    searchPokemon(value); // Ejecuta la búsqueda directamente aquí
  };

  const handleShowBar = () => {
    handleBarVisible(prev => !prev); // Cambia la visibilidad de la barra de filtros
  };

  return (
    <>
      <header className="max-w-7xl mx-auto">
        <div className="flex flex-col sm:flex-row items-center gap-3 justify-around py-5">
          <button onClick={handleShowBar} data-text="Awesome" className="btn-filter">
            <span className="actual-text">Filtrar</span>
            <span className="hover-text">Filtrar</span>
            <BsArrowBarRight className="text-white btn-icon absolute top-0 bottom-0 my-auto -right-16" />
          </button>
          <div className="flex gap-3 ">
            <button className='bg-white rounded-md px-4 py-2' onClick={() => handleFilterGeneration(1)}>I</button>
            <button className='bg-white rounded-md px-4 py-2' onClick={() => handleFilterGeneration(2)}>II</button>
            <button className='bg-white rounded-md px-4 py-2' onClick={() => handleFilterGeneration(3)}>III</button>
            <button className='bg-white rounded-md px-4 py-2' onClick={() => handleFilterGeneration(4)}>IV</button>
            <button className='bg-white rounded-md px-4 py-2' onClick={() => handleFilterGeneration(5)}>V</button>
          </div>
          <div className="flex items-center gap-5">
            <div className="input-wrapper">
              <button className="icon">
                <FiSearch className="text-white text-2xl"></FiSearch>
              </button>
              <input className="input" placeholder="search.." name="text" type="text" onChange={handleInputChange} />
            </div>
          </div>
        </div>
      </header>
    </>
  );
};

export default Navigation;
