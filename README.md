
Built by https://www.blackbox.ai

---

# 3D Fighting Arena

## Project Overview
The **3D Fighting Arena** is an immersive web-based fighting game built with HTML, CSS, and JavaScript. Players engage in battles using their chosen fighters in a dynamic 3D environment created with Three.js. The game features smooth animations, health bars, and responsive controls for an exciting gameplay experience.

## Installation
To run the 3D Fighting Arena locally, follow these steps:

1. Clone the repository or download the project files.
   ```bash
   git clone https://github.com/yourusername/3d-fighting-arena.git
   cd 3d-fighting-arena
   ```

2. (Optional) If you wish to modify CSS or other build files, make sure you have Node.js installed, then install the required dependencies:
   ```bash
   npm install
   ```

## Usage
- Open `index.html` in your web browser to start the game.
- Use the following controls to play:
  - For Player 1:
    - Move: **W** (Forward), **A** (Left), **S** (Backward), **D** (Right)
    - Attack: **Q**
    - Block: **SPACE**

  - For Player 2:
    - Move: **Arrow Keys**
    - Attack: **E**
    - Block: **Enter**

### Starting the Game
1. Click on the "Start Battle" button on the main page to enter the battle arena.
2. Select your desired controls via the settings page accessible from the main menu.
3. Engage in combat with your opponent until one player’s health runs out.

## Features
- Beautifully designed 3D arena environment using Three.js.
- Responsive UI with health bars displaying both players' health.
- Customizable controls via settings.
- Smooth animations and interactions during gameplay.
- WebGL support for advanced graphics rendering.

## Dependencies
The project uses the following libraries and tools:
- **Three.js** for 3D graphics rendering.
- **Tailwind CSS** for styling and layout.
- **Font Awesome** for icons.
- **Local Storage** for game settings persistence.

`package.json` includes the following dependencies:
```json
  "devDependencies": {
    "autoprefixer": "^10.4.21",
    "postcss": "^8.5.3",
    "tailwindcss": "^4.1.3"
  }
```

## Project Structure
The project follows a simple structure:
```
/3D-Fighting-Arena
├── index.html          # Main menu for starting the game
├── game.html           # Game play area
├── settings.html       # Player controls and settings
├── package.json        # Project meta information and dependencies
├── package-lock.json   # Dependency versions
├── tailwind.config.js   # Tailwind CSS configuration
└── /dist               # Compiled CSS and JavaScript (if built)
```
- **index.html**: The entry point of the game, where players can start battles or change settings.
- **game.html**: The core game file, rendering the arena and handling player actions.
- **settings.html**: Allows players to customize controls and graphics settings.

## Conclusion
The 3D Fighting Arena offers a blend of 3D graphics and engaging combat mechanics, creating a fun and adrenaline-pumping experience for players. Feel free to contribute or explore and enhance the game further!