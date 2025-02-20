function consultarPokemons() {
    const count = document.getElementById('pokemonCount').value;
    const url = `https://pokeapi.co/api/v2/pokemon?limit=${count}`;

    fetch(url)
        .then(response => response.json())
        .then(data => {
            const list = document.getElementById('pokemonList');
            list.innerHTML = '';
            data.results.forEach(pokemon => {
                const li = document.createElement('li');
                li.textContent = pokemon.name;
                list.appendChild(li);
            });
        })
        .catch(error => console.error('Erro ao carregar pokémons:', error));}