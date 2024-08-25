import React ,{ useContext } from 'react';
import { PokemonContext } from '../context/PokemonContext';


const PagePokemon = () => {

  const {
    changePage,
    currentPage,
    editablePage,
    handlePageChange,
    goToPage,
    maxPage,
    clearFilters,
  } = useContext(PokemonContext);


  return (
    <div className="flex flex-col sm:flex-row gap-4">
    <button
      className="bg-[#008bf8] px-4 py-2 rounded-md text-white/70"
      onClick={() => changePage(currentPage - 1)}
      disabled={currentPage === 1}
    >
      Previous
    </button>
    <button
      className="bg-[#008bf8] px-4 py-2 rounded-md text-white/70"
      onClick={() => changePage(currentPage + 1)}
      disabled={currentPage === maxPage}
    >
      Next
    </button>
    <input
      className="text-center rounded-md outline-none sm:max-w-[50px]"
      type="text"
      value={editablePage}
      onChange={handlePageChange}
      min={1}
      max={maxPage}
    />
    <div className="rounded-full flex items-center justify-center bg-[#008bf8] text-white/70    ">
      <button className="p-3 " onClick={goToPage}>
        Go
      </button>
    </div>
    <button onClick={clearFilters} className="bg-red-500 px-4 py-2 rounded-md text-white">
      Clear All Filters
    </button>
  </div>
  );
};

export default PagePokemon;