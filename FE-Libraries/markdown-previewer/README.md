# Markdown Previewer

A simple and interactive Markdown Previewer built using React, Redux, and TypeScript. This project allows you to type GitHub Flavored Markdown (GFM) in the editor and instantly see the rendered HTML in the preview panel.

## Features
- **Live Markdown Preview**: See your Markdown rendered as HTML in real-time.
- **GitHub Flavored Markdown (GFM)**: Supports features like headings, links, lists, code blocks, images, and more.
- **Carriage Return Support**: Automatically converts newlines into `<br>` elements.
- **Responsive Design**: Works seamlessly across desktop and smaller screens.
- **Google Font Integration**: Styled using the "Lato" font for a clean and modern appearance.

## Technologies Used
- **Frontend Framework**: React with TypeScript.
- **State Management**: Redux Toolkit.
- **Markdown Parsing**: Marked.js library.
- **Styling**: CSS with media queries for responsiveness.

## Installation

1. Clone the repository:
   ```
   git clone https://github.com/rkadlick/FCC-Projects/FE_Libraries/markdown-previewer.git
   cd markdown-previewer
   ```

2. Install dependencies:
    ```
    npm install
    ```
3. Start the development server:
    ```
    npm run dev
    ```
4. Open the app in your browser:
    ```
    http://localhost:3000
    ```


## Project Structure
- **src/components/MarkdownEditor.tsx**: The textarea where users input Markdown.
- **src/components/MarkdownPreview.tsx**: Displays the rendered HTML preview.
- **src/redux/store.ts**: Configures Redux store to manage application state.
- **src/redux/editorSlice.ts**: Handles text updates in the Redux store.

## Usage
1. Type Markdown into the editor (left panel).
2. See the rendered HTML in the preview (right panel).
3. Use Markdown features such as:
   - Headings: `# Heading 1`
   - Links: `[Example](https://example.com)`
   - Lists: `- Item`
   - Code: `` `inline code` `` or fenced code blocks.

## Live Demo

[Live Demo](https://fcc-projects-markdown.vercel.app/)

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