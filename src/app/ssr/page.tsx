export default async function Page() {
  const response = await fetch("https://pokeapi.co/api/v2/pokemon");
  const { results } = await response.json();

  return (
    <div className="p-8">
      <h1 className="text-xl font-bold">Olá mundo, SSR!</h1>

      <ul className="grid grid-cols-1 gap-4 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 mt-4">
        {results.map((pokemon: any) => (
          <li key={pokemon.name}>
            <h2 className="capitalize">{pokemon.name}</h2>
          </li>
        ))}
      </ul>
    </div>
  );
}
