# React Calculator

A simple calculator web application built with React and Decimal.js for precise calculations. It supports basic arithmetic operations, decimal numbers, operator precedence, and more.

---

## Features

*   Basic arithmetic operations (+, -, \*, /)
*   Accurate decimal calculations using Decimal.js
*   Correct operator precedence (e.g., `2 + 3 * 4`)
*   Clear button to reset the calculator
*   Error handling for invalid expressions
*   Leading zero prevention (e.g., "0005" becomes "5")
*   Handling of consecutive operators and negative signs (e.g., `5 + - 5 = 0`)
*   Intuitive display behavior (shows current operand after operator input)

---

## Technologies Used

*   React
*   Decimal.js
*   Vite
*   TypeScript (Optional)
*   React Testing Library (Optional)
*   Testing Library User Event (Optional)

---

## Installation

1.  Clone the repository:
```
git clone [https://github.com/rkadlick/FCC-Projects/FE_Libraries/my-react-calculator.git](https://github.com/rkadlick/FCC-Projects/FE_Libraries/my-react-calculator.git)  # Replace with your repo URL
```
2.  Navigate to the project directory:
```
cd react-calculator
```
3.  Install dependencies:
```
npm install  # or yarn install
```
---

## Running the Application

```
npm run dev  # or yarn dev
```

## How to Use

1.  **Number buttons**: Enter digits.
2.  **Operator buttons (+, -, \*, /):** Perform calculations.
3.  **"." button**: Enter decimal points.
4.  **"=" button**: Evaluate the expression.
5.  **"C" button**: Clear the display.

---

## Live  Demo

[Live Demo](https://fcc-projects-f2ht.vercel.app/)

---

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