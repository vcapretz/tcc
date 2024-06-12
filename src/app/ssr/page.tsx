export default async function Page() {
  const response = await fetch("https://api.pokemontcg.io/v2/cards", {
    headers: { "X-Api-Key": process.env.POKEMON_KEY! },
  });
  const { data: results } = await response.json();

  return (
    <div className="p-8">
      <h1 className="text-xl font-bold">Olá mundo, SSR!</h1>

      <ul className="grid grid-cols-1 gap-4 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 mt-4">
        {results.map((pokemon: any) => (
          <li key={pokemon.name}>
            <h2 className="capitalize">{pokemon.name}</h2>
            <img src={pokemon.images.small} alt={pokemon.name} />
          </li>
        ))}
      </ul>
    </div>
  );
}
