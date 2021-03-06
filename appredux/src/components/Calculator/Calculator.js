import React, { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { sum } from '../../store/calculator/Calculator.actions';
import { subtract } from '../../store/calculator/Calculator.actions';
import { multiply } from '../../store/calculator/Calculator.actions';


// import { Container } from './styles';

function Calculator() {
    const dispatch = useDispatch()
    const result = useSelector(state => state.calculator)

    const [inputA, setInputA] = useState(0)
    const [inputB, setInputB] = useState(0)

    //dispatch(sum)

    return (
        <>
            <input type="text" placeholder="a" value={inputA} onChange={(e) => setInputA(Number(e.target.value))} />
            <input type="text" placeholder="b" value={inputB} onChange={(e) => setInputB(Number(e.target.value))} />
            <div>
                <button
                    onClick={() => {
                        dispatch(sum(inputA, inputB))
                    }}
                > + </button>
                <button
                    onClick={() => {
                        dispatch(subtract(inputA, inputB))
                    }}
                > - </button>
                <button
                    onClick={() => {
                        dispatch(multiply(inputA, inputB))
                    }}
                > x </button>
                <div>{result}</div>
            </div>
        </>
    );
}

export default Calculator;