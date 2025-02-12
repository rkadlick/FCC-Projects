# Drum Machine

This project is a simple drum machine built using React, TypeScript, and Vite. It allows users to trigger drum sounds by clicking on drum pads or pressing corresponding keys on the keyboard.

## Features

*   Nine clickable drum pads, each associated with a unique sound.
*   Displays the name of the triggered sound.
*   Keyboard support for triggering sounds.
*   Modern React functional components with TypeScript for type safety.
*   Fast development server with Vite.

## Technologies Used

*   React
*   TypeScript
*   Vite
*   HTML
*   CSS

## Getting Started

1. **Clone the repository:**
```
git clone [https://github.com/](https://github.com/)/rkadlick/FCC-Projects/FE_Libraries/drum-machine.git  # Replace with your repo URL
```
2. **Navigate to the project directory:**
```
cd drum-machine
```
3.  **Install dependencies:**
```
npm install
```
4. **Run the development server:**
```
npm run dev
```
5. **Open your browser and navigate to http://localhost:5173/ (or the URL displayed in the console).**


## How to Use

*   **Click the drum pads:** Click on any of the nine drum pads to trigger the associated sound.
*   **Press the keys:** Press the keys `Q`, `W`, `E`, `A`, `S`, `D`, `Z`, `X`, and `C` to trigger the corresponding sounds.
*   **Display:** The `#display` element will show the name of the currently playing sound.

## Audio Samples

The project uses audio samples from FreeCodeCamp:

*   Heater-1
*   Heater-2
*   Heater-3
*   Heater-4
*   Heater-6
*   Drums-01
*   Kick_n_Hat
*   RP4\_KICK\_1
*   Cymbal\_1

You can replace these with your own audio samples if you wish.  Just update the `sounds` object in `App.tsx` with the new file paths and descriptions.  Remember to host your audio files somewhere or include them in the `public` directory if you are using local files.

## Live Demo

[Live Demo](https://fcc-projects-one.vercel.app/)

## License

MIT License

Copyright (c) [2025]

Permission is hereby granted, free of charge, to any person obtaining a copy
of this software and associated documentation files (the "Software"), to deal
in the Software without restriction, including without limitation the rights
to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
copies of the Software, and to permit persons to whom the Software is
furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all
copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
SOFTWARE.