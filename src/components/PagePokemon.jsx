import React, { useContext } from 'react';
import { PokemonContext } from '../context/PokemonContext';

const PagePokemon = () => {
  const { changePage, currentPage, editablePage, handlePageChange, goToPage, maxPage, clearFilters } =
    useContext(PokemonContext);

  return (
    <div className="flex flex-col gap-4 sm:flex-row">
      <button
        className="h-8 rounded-md border-2 border-transparent bg-black/50 px-3 py-1 leading-none text-white/70  duration-500 ease-out hover:border-[#008bf8]"
        onClick={() => changePage(currentPage - 1)}
        disabled={currentPage === 1}
      >
        Previous
      </button>

      <button
        className="h-8 rounded-md border-2 border-transparent bg-black/50 px-3 py-1 leading-none text-white/70 duration-500 ease-out hover:border-[#008bf8]"
        onClick={() => changePage(currentPage + 1)}
        disabled={currentPage === maxPage}
      >
        Next
      </button>
      <input
        className="h-8 rounded-md text-center leading-none outline-none sm:max-w-[50px]"
        type="text"
        value={editablePage}
        onChange={handlePageChange}
        min={1}
        max={maxPage}
      />
      <div className="flex items-center justify-center rounded-full border-2 border-transparent bg-black/50 text-white/70 duration-500 ease-out hover:border-[#008bf8]">
        <button className="w-8 h-8" onClick={goToPage}>
          Go
        </button>
      </div>
      <button
        onClick={clearFilters}
        className="h-8 px-3 py-1 leading-none text-black duration-500 ease-out border-2 border-transparent rounded-md bg-white/50 hover:border-black"
      >
        Clear All Filters
      </button>
    </div>
  );
};

export default PagePokemon;
