fetch('https://pokeapi.co/api/v2/pokemon?limit=10')
            .then(response => response.json())
            .then(data => {
                const list = document.getElementById('pokemonList');
                data.results.forEach(pokemon => {
                    const li = document.createElement('li');
                    li.textContent = pokemon.name;
                    list.appendChild(li);
                });
            })
            .catch(error => console.error('Erro ao carregar pokémons:', error));