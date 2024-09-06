# **Star Wars & Pokémon Character Viewer**

This project is a web-based character viewer that allows users to switch between **Star Wars** and **Pokémon** characters. The user can randomly generate a character from either franchise by clicking the "Random" button and toggle between the two modes using a switch button.

## Features

- **Star Wars Mode:** Displays a random character from the Star Wars universe, including their name, image, and birth year.
- **Pokémon Mode:** Displays a random Pokémon, including its name, image, and height.
- **Dynamic Backgrounds:** The background changes depending on the selected mode (Star Wars or Pokémon).
- **Toggle Button:** A toggle button at the bottom of the page switches between Star Wars and Pokémon modes.

## Project Structure

```bash
├── index.html        # Main HTML file
├── style.css         # Styles for the project
├── script.js         # JavaScript functionality for fetching and displaying characters
├── assets/           # Folder for background images and other assets
│   ├── starwarbg.jpeg       # Background image for Star Wars mode
│   ├── pokemonbg.jpg      # Background image for Pokémon mode
└── README.md         # This file

```

## How It Works

- Upon loading the webpage, the viewer defaults to **StarWars Mode**.
- The **toggle button** present at the bottom of the screen can be clicked to switch between StarWars and Pokémon modes.
- In each mode, clicking **Random** button will display a random character from that mode with relevant attributes such as name, image, and either birth year (for StarWars) or height (for Pokémon).

## API Used

- **StarWar Charcters** : https://akabab.github.io/starwars-api/api/all.json
- **Pokémon Characters**: https://pokeapi.co/api/v2/pokemon?limit=151
