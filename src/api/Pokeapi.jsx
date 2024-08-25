const API_BASE_URL = 'https://pokeapi.co/api/v2';

export async function getPokemonData(endPoint) {
  const response = await fetch(`${API_BASE_URL}/${endPoint}`);
  if (!response.ok) {
    throw new Error(`Failed to fetch: ${response.status} ${response.statusText}`);
  }
  return response.json();
}

export async function getPokemonList(limit, offset) {
  return getPokemonData(`pokemon?limit=${limit}&offset=${offset}`);
}

// export async function getPokemonByType(type) {
//   return getPokemonData(`type/${type}`);
// }

// export async function getPokemonDetails(name) {
//   return getPokemonData(`pokemon/${name}`);
// }