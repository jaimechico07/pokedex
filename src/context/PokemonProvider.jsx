import React, { useEffect, useState } from 'react';
import { PokemonContext } from './PokemonContext';
import { getPokemonList } from '../api/Pokeapi';

export const PokemonProvider = ({ children }) => {
  const [pokemonList, setPokemonList] = useState([]);
  const [displayedPokemons, setDisplayedPokemons] = useState([]);
  const [loading, setLoading] = useState(true);
  const [originalList, setOriginalList] = useState([]);
  const [filterBarVisible, setFilterBarVisible] = useState(true);
  const [selectedTypes, setSelectedTypes] = useState([]);
  const [selectedGeneration, setSelectedGeneration] = useState(null);
  const [currentPage, setCurrentPage] = useState(1);
  const [pokemonPerPage] = useState(10);
  const [editablePage, setEditablePage] = useState(currentPage);
  const [maxPage, setMaxPage] = useState(1);
  const [searchResults, setSearchResults] = useState([]);

  const generations = {
    1: { start: 1, end: 151 },
    2: { start: 152, end: 251 },
    3: { start: 252, end: 386 },
    4: { start: 387, end: 493 },
    5: { start: 494, end: 649 },
  };

  const handleBarVisible = () => {
    setFilterBarVisible(!filterBarVisible);
  };

  const fetchAllPokemons = async () => {
    try {
      const totalPokemons = 649; // Número total de Pokémon para las cinco generaciones
      const data = await getPokemonList(totalPokemons, 0);

      const promises = data.results.map(async pokemon => {
        const res = await fetch(pokemon.url);
        const data = await res.json();
        return data;
      });
      const results = await Promise.all(promises);
      console.log(results);

      setOriginalList(results);
      setPokemonList(results);
      setLoading(false);

      // Aplicar filtros y paginación inicial
      applyFiltersAndPagination();
    } catch (error) {
      console.error('Error fetching Pokemon list:', error);
    }
  };

  const applyFiltersAndPagination = (pokemonToFilter = originalList) => {
    let filteredResults = [...pokemonToFilter];
  
    // Aplicar filtros si hay generación seleccionada
    if (selectedGeneration) {
      const { start, end } = generations[selectedGeneration];
      filteredResults = filteredResults.filter(pokemon => pokemon.id >= start && pokemon.id <= end);
    }
  
    // Aplicar filtros si hay tipos seleccionados
    if (selectedTypes.length > 0) {
      filteredResults = filteredResults.filter(pokemon => 
        pokemon.types.some(t => selectedTypes.includes(t.type.name))
      );
    }
  
    // Si no hay filtros, muestra todos los Pokémon o los resultados de búsqueda si están presentes
    if (!selectedGeneration && selectedTypes.length === 0 && searchResults.length === 0) {
      filteredResults = [...originalList]; // Muestra todos los Pokémon
    } else if (searchResults.length > 0) {
      filteredResults = [...searchResults]; // Muestra resultados de búsqueda
    }
  
    setMaxPage(Math.ceil(filteredResults.length / pokemonPerPage));
  
    const startIndex = (currentPage - 1) * pokemonPerPage;
    const endIndex = startIndex + pokemonPerPage;
    setDisplayedPokemons(filteredResults.slice(startIndex, endIndex));
  };

  const searchPokemon = name => {
    if (name.trim() === '') {
      setSearchResults([]); // Restablece los resultados de búsqueda
      applyFiltersAndPagination(originalList);
    } else {
      const filteredPokemon = originalList.filter(pokemon => 
        pokemon.name.toLowerCase().includes(name.toLowerCase())
      );
      setSearchResults(filteredPokemon);
      applyFiltersAndPagination(filteredPokemon);
    }
  };

  const handleFilterGeneration = generation => {
    setSelectedGeneration(generation);
    setCurrentPage(1); // Reiniciar la página a 1
    setInputPage(1); // Asegurar que el input de la página también se actualice
    applyFiltersAndPagination();
  };

  const handleFilterType = type => {
    let updatedTypes;

    if (selectedTypes.includes(type)) {
      updatedTypes = selectedTypes.filter(t => t !== type);
    } else {
      updatedTypes = [...selectedTypes, type];
    }
    setSelectedTypes(updatedTypes);
    applyFiltersAndPagination();
  };

  const changePage = page => {
    if (page >= 1 && page <= maxPage) {
      setCurrentPage(page);
      setEditablePage(page);
      applyFiltersAndPagination();
    }
  };

  const handlePageChange = e => {
    const value = e.target.value;
    setEditablePage(value);
  };

  const goToPage = () => {
    const page = Number(editablePage);
    if (page >= 1 && page <= maxPage) {
      setCurrentPage(page);
    } else {
      setEditablePage(currentPage); // Restablecer al valor válido actual
    }
  };

  const clearFilters = () => {
    setSelectedGeneration(null);
    setSelectedTypes([]);
    setCurrentPage(1);
    setEditablePage(1);
    applyFiltersAndPagination(originalList); // Muestra la lista completa de Pokémon
  };

  useEffect(() => {
    fetchAllPokemons();
  }, []);

  useEffect(() => {
    if (originalList.length > 0) {
      applyFiltersAndPagination();
    }
  }, [originalList, currentPage, selectedGeneration, selectedTypes]);

  return (
    <PokemonContext.Provider
      value={{
        pokemonList: displayedPokemons,
        searchPokemon,
        loading,
        handleBarVisible,
        filterBarVisible,
        handleFilterType,
        selectedTypes,
        handleFilterGeneration,
        selectedGeneration,
        changePage,
        currentPage,
        editablePage,
        handlePageChange,
        goToPage,
        maxPage,
        clearFilters
      }}
    >
      {children}
    </PokemonContext.Provider>
  );
};
