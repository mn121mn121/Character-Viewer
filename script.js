let mode = 'starwars'; // Initial mode is Star Wars
const toggleBtn = document.getElementById('toggle-btn');
const headingText = document.getElementById('heading-text');
const nameDiv = document.querySelector('.name');
const extraInfoDiv = document.querySelector('.extra-info');
const image = document.querySelector('.character-image');
const extraAttribute = document.getElementById('extra-attribute');
const randomBtn = document.querySelector('.randomly');
const body = document.getElementById('body'); // Body element for background change

// Event listener for the toggle button
toggleBtn.addEventListener('click', () => {
    if (mode === 'starwars') {
        mode = 'pokemon';
        headingText.textContent = 'Pokémon';
        toggleBtn.textContent = 'Switch to Star Wars Mode';
        extraAttribute.textContent = 'Height:';
        randomBtn.textContent = 'Random Pokémon';
        body.style.backgroundImage = "url('./pokemonbg.jpg')"; // Change to Pokémon background
        fetchPokemon();
    } else {
        mode = 'starwars';
        headingText.textContent = 'Star Wars';
        toggleBtn.textContent = 'Switch to Pokémon Mode';
        extraAttribute.textContent = 'Birth Year:';
        randomBtn.textContent = 'Random Star Wars Character';
        body.style.backgroundImage = "url('./starwarbg.jpeg')"; // Revert to Star Wars background
        fetchStarWars();
    }
});

// Fetch Star Wars Character Data
function fetchStarWars() {
    nameDiv.innerHTML = `<em>Loading...</em>`;
    extraInfoDiv.innerHTML = `<em>Loading...</em>`;
    image.src = ''; // Reset image

    fetch('https://akabab.github.io/starwars-api/api/all.json')
        .then(response => response.json())
        .then(data => {
            const randNum = Math.floor(Math.random() * data.length);
            const character = data[randNum];
            image.src = character.image;
            nameDiv.textContent = character.name;
            extraInfoDiv.textContent = character.born;
        })
        .catch(error => {
            nameDiv.textContent = 'Error loading character';
            extraInfoDiv.textContent = '';
        });
}

// Fetch Pokémon Data
function fetchPokemon() {
    nameDiv.innerHTML = `<em>Loading...</em>`;
    extraInfoDiv.innerHTML = `<em>Loading...</em>`;
    image.src = ''; // Reset image

    fetch('https://pokeapi.co/api/v2/pokemon?limit=151')
        .then(response => response.json())
        .then(data => {
            const randNum = Math.floor(Math.random() * data.results.length);
            const pokemonName = data.results[randNum].name;

            fetch(`https://pokeapi.co/api/v2/pokemon/${pokemonName}`)
                .then(response => response.json())
                .then(pokemonData => {
                    image.src = pokemonData.sprites.front_default;
                    nameDiv.textContent = pokemonData.name;
                    extraInfoDiv.textContent = pokemonData.height;
                });
        })
        .catch(error => {
            nameDiv.textContent = 'Error loading Pokémon';
            extraInfoDiv.textContent = '';
        });
}

// Initial fetch for Star Wars mode
fetchStarWars();

// Event listener for the "Random" button
randomBtn.addEventListener('click', () => {
    if (mode === 'starwars') {
        fetchStarWars();
    } else {
        fetchPokemon();
    }
});
