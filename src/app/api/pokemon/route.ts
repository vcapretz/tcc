export const GET = async () => {
  const response = await fetch("https://api.pokemontcg.io/v2/cards", {
    headers: { "X-Api-Key": process.env.POKEMON_KEY! },
  });
  const { data } = await response.json();

  return Response.json({ data }, { status: 200 });
};
