const order = (pokemons, sortOrder, getTypes, searchQuery, pokeBuscado) => {
    let filteredPokemons = pokemons;
    if (getTypes.length > 0) {
        filteredPokemons = pokemons?.filter((poke) =>
        poke?.Tipos?.some((tipo) => tipo.nombre === getTypes)
      );
    }
  
    if (searchQuery?.length > 0) {
      const query = searchQuery.toLowerCase();
      filteredPokemons = filteredPokemons.filter((poke) =>
      poke.name.toLowerCase().includes(query)
      );
    }

    const sortedPokemons = filteredPokemons.sort((a, b) => {
      switch (sortOrder) {
        case "AtoZ":
          return a.name.localeCompare(b.name);
        case "ZtoA":
          return b.name.localeCompare(a.name);
        case "AtkAsc":
          return a.ataque - b.ataque;
        case "AtkDesc":
          return b.ataque - a.ataque;
        case "DefAsc":
          return a.defensa - b.defensa;
        case "DefDesc":
          return b.defensa - a.defensa;
        default:
          return 0;
      }
    });
    console.log(pokeBuscado);
    return sortedPokemons;
  };
  
  export { order };
  