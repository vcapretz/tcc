import { useEffect, useState } from "react";

export default function Page() {
  const [pokemons, setPokemons] = useState([]);

  useEffect(() => {
    async function fetchData() {
      const response = await fetch("https://pokeapi.co/api/v2/pokemon");
      const { results } = await response.json();
      setPokemons(results);
    }

    fetchData();
  }, []);

  if (!pokemons) {
    return <p>Carregando...</p>;
  }

  return (
    <div className="p-8">
      <h1 className="text-xl font-bold">Olá mundo, Client Side Rendering!</h1>

      <ul className="grid grid-cols-1 gap-4 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 mt-4">
        {pokemons.map((pokemon: any) => (
          <li key={pokemon.name}>
            <h2 className="capitalize">{pokemon.name}</h2>
          </li>
        ))}
      </ul>
    </div>
  );
}
