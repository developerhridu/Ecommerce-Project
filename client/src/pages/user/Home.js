import React, { useState, useEffect } from "react";
import axios from "axios";
import './QuoteGenerator.css';


function Home() {
    const [currentValue, setCurrentValue] = useState('0');
    const [previousValue, setPreviousValue] = useState(null);
    const [operator, setOperator] = useState(null);

    const handleNumberClick = (e) => {
        const value = e.target.value;
        setCurrentValue(currentValue === '0' ? value : currentValue + value);
    };

    const handleOperatorClick = (e) => {
        const value = e.target.value;
        setOperator(value);
        setPreviousValue(currentValue);
        setCurrentValue('0');
    };

    const handleEqualClick = () => {
        const current = parseFloat(currentValue);
        const previous = parseFloat(previousValue);
        switch (operator) {
            case '+':
                setCurrentValue(previous + current);
                break;
            case '-':
                setCurrentValue(previous - current);
                break;
            case '*':
                setCurrentValue(previous * current);
                break;
            case '/':
                setCurrentValue(previous / current);
                break;
            default:
                break;
        }
        setOperator(null);
        setPreviousValue(null);
    };

    const handleClearClick = () => {
        setCurrentValue('0');
        setPreviousValue(null);
        setOperator(null);
    };

    return (
        <div className="calculator">
            <div className="display">{currentValue}</div>
            <div className="keypad">
                <button className="operator" onClick={handleOperatorClick} value="+">+</button>
                <button className="operator" onClick={handleOperatorClick} value="-">-</button>
                <button className="operator" onClick={handleOperatorClick} value="*">&times;</button>
                <button className="operator" onClick={handleOperatorClick} value="/">&divide;</button>
                <button onClick={handleNumberClick} value="7">7</button>
                <button onClick={handleNumberClick} value="8">8</button>
                <button onClick={handleNumberClick} value="9">9</button>
                <button onClick={handleNumberClick} value="4">4</button>
                <button onClick={handleNumberClick} value="5">5</button>
                <button onClick={handleNumberClick} value="6">6</button>
                <button onClick={handleNumberClick} value="1">1</button>
                <button onClick={handleNumberClick} value="2">2</button>
                <button onClick={handleNumberClick} value="3">3</button>
                <button onClick={handleNumberClick} value="0">0</button>
                <button onClick={handleNumberClick} value=".">.</button>
                <button className="operator" onClick={handleEqualClick}>=</button>
                <button className="clear" onClick={handleClearClick}>AC</button>
            </div>
        </div>
    );
}

export default Home;
