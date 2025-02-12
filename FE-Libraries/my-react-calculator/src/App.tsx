import { useEffect, useState } from "react";
import "./App.css";
import Button from "./components/Button";
import Decimal from "decimal.js";

interface CalculatorState {
  displayValue: string;
  expression: string;
  operator: string | null; // Keep track of the last operator
  evaluated: boolean; // Flag to indicate if the expression has been evaluated
}

interface ButtonLabels {
  [key: string]: string;
  "0": string;
  "1": string;
  "2": string;
  "3": string;
  "4": string;
  "5": string;
  "6": string;
  "7": string;
  "8": string;
  "9": string;
  ".": string;
  "=": string;
  "+": string;
  "-": string;
  "*": string;
  "/": string;
  "C": string;
};

function App() {
  const [calculatorState, setCalculatorState] = useState<CalculatorState>({
    displayValue: '0',
    expression: '0',
    operator: null,
    evaluated: false,
  });

  useEffect(() => {
    console.log("Calculator State Updated:", calculatorState); 
  }, [calculatorState]); // Correct dependencies


  const handleButtonClick = (value: string) => {
    const { displayValue, expression, evaluated, operator } = calculatorState;

    switch (value) {
        case 'C':
          console.log(value)
            setCalculatorState({
                displayValue: '0',
                expression: '0',
                operator: null,
                evaluated: false,
            });
            break;

        case '.':
          console.log(value)
            if (!displayValue.includes('.')) {
                setCalculatorState({
                    ...calculatorState,
                    displayValue: displayValue + '.',
                    expression: evaluated ? '0.' : expression + '.', // Corrected: Start new if evaluated
                    evaluated: false,
                });
            }
            break;

        case '+': case '-': case '*': case '/':
          console.log(value)
            handleOperator(value);
            break;

        case '=':
          console.log(value)
            try {
                const result = evaluateExpression(expression);
                setCalculatorState({
                    displayValue: result.toString(),
                    expression: result.toString(),
                    operator: null,
                    evaluated: true,
                });
            // eslint-disable-next-line @typescript-eslint/no-unused-vars
            } catch (error) {
                setCalculatorState({ ...calculatorState, displayValue: 'Error', evaluated: false });
            }
            break;

        default: // Number
        { console.log(value)
        console.log(calculatorState)
        const newValue = operator ? value : (evaluated && value !== '0' ? value : (displayValue === '0' && value !== '0' ? value : (displayValue === '0' && value === '0' ? '0' : displayValue + value)));// Corrected
        const newExpression = evaluated ? value : (expression === '0' && value !== '0' ? value : (expression === '0' && value === '0' ? '0' : expression + value));

        setCalculatorState({
            ...calculatorState,
            displayValue: newValue, // Corrected
            expression: newExpression,
            operator: null,
            evaluated: false,
        }); }
    }
};

  const handleOperator = (nextOperator: string) => {
    const { displayValue, expression, evaluated } = calculatorState;

    let newExpression = expression;

    if (evaluated) {
        newExpression = displayValue + nextOperator;
    } else if (/[+\-*/]$/.test(expression)) { // Check if the last char is an operator
        const lastChar = expression.slice(-1);
        if (nextOperator === '-') {
            newExpression += nextOperator; // Keep the negative sign
        } else if (lastChar === '-') { // Handle cases like 5 * - + 5
            newExpression = expression.slice(0, -2) + nextOperator; // Remove last two chars (- and operator before it)
        } else {
            newExpression = expression.slice(0, -1) + nextOperator; // Replace last operator
        }
    } else {
        newExpression += nextOperator;
    }

    setCalculatorState({
        displayValue: displayValue,
        expression: newExpression,
        operator: nextOperator,
        evaluated: false,
    });
};

  const evaluateExpression = (expression: string): Decimal => {
    try {
        const tokens = expression.match(/(\d+(\.\d+)?)|[+\-*/]/g) || [];

        const decimalTokens = [];
        let expectingOperand = true; // Flag to track if we expect an operand

        for (const token of tokens) {
         
            if (!isNaN(Number(token))) {
                decimalTokens.push(new Decimal(token));
                expectingOperand = false;
            } else if (/[+\-*/]/.test(token)) {
                if (token === '-' && expectingOperand) {
                    // Treat '-' as negative sign
                    decimalTokens.push(new Decimal('-1')); // Push -1 for multiplication
                    decimalTokens.push('*'); // Push * for multiplication
                } else {
                    decimalTokens.push(token);
                    expectingOperand = true;
                }
            }
        }


        let result: Decimal | null = null;
        let i = 0;

        if (decimalTokens.length > 0 && decimalTokens[0] instanceof Decimal) {
            result = decimalTokens[0];
            i = 1;
        } else {
            throw new Error("Invalid expression: First token must be a number.");
        }

        for (; i < decimalTokens.length; i += 2) {
            const operator = decimalTokens[i];
            const operand = decimalTokens[i + 1] as Decimal;

            switch (operator) {
                case '+':
                    result = result!.plus(operand);
                    break;
                case '-':
                    result = result!.minus(operand);
                    break;
                case '*':
                    result = result!.mul(operand);
                    break;
                case '/':
                    result = result!.div(operand);
                    break;
            }
        }

        if (result === null) {
            throw new Error("Invalid Expression");
        }

        return result;
    } catch (error) {
        console.error("Evaluation error:", error);
        throw new Error("Invalid expression");
    }
};

  const buttons = [
    "C",
    "/",
    "*",
    "7",
    "8",
    "9",
    "-",
    "4",
    "5",
    "6",
    "+",
    "1",
    "2",
    "3",
    "=",
    "0",
    ".",

  ];

  const buttonIds : ButtonLabels = {
    "0": "zero",
    "1": "one",
    "2": "two",
    "3": "three",
    "4": "four",
    "5": "five",
    "6": "six",
    "7": "seven",
    "8": "eight",
    "9": "nine",
    ".": "decimal",
    "=": "equals",
    "+": "add",
    "-": "subtract",
    "*": "multiply",
    "/": "divide",
    C: "clear",
  };

  return (
    <div className="calculator">
      <h1>FCC: Javascript Calculator</h1>
      <div id="expression">{calculatorState.expression}</div>
      <div id="display">{calculatorState.displayValue}</div>
      <div className="buttons">
        {buttons.map((button) => (
          <Button
            key={button}
            id={buttonIds[button]} // Use the lookup object
            value={button}
            onClick={() => handleButtonClick(button)}
          />
        ))}
      </div>
    </div>
  );
}

export default App;
