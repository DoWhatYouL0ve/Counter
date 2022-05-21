import React, {useEffect, useState} from 'react';
import style from './App.module.css';
import {Counter} from "./mainElements/Counter";
import {SetCounterValue} from "./mainElements/SetCounterValue";

function App() {

    useEffect(() => {
        let savedStartValue = localStorage.getItem('startValue')
        if(savedStartValue) {
            let newStartValue = JSON.parse(savedStartValue)
            setStartValue(newStartValue)
            setValue(newStartValue)
        }
        let savedMaxValue = localStorage.getItem('maxValue')
        if(savedMaxValue) {
            let newMaxValue = JSON.parse(savedMaxValue)
            setMaxValue(newMaxValue)
        }
    },[])

    let [maxValue, setMaxValue] = useState<number>(1)
    let [startValue, setStartValue] = useState<number>(0)
    let [value, setValue] = useState<number>(startValue)
    let [isDisabled, setDisabled] = useState<boolean>(false)



    const increaseValue = () => {
        value += 1
        setValue(value)
    }
    const resetValue = () => {
        setValue(startValue)
    }

    const setScoreValue = () => {
        if(startValue < maxValue) {
            localStorage.setItem('startValue', JSON.stringify(startValue))
            localStorage.setItem('maxValue', JSON.stringify(maxValue))
            setValue(startValue)
            setDisabled(false)
        }
    }

    const setMaxValueCounter = (value: number) => {
        setDisabled(true)
        setMaxValue(value)

    }
    const setStartValueCounter = (value: number) => {
        setDisabled(true)
        setStartValue(value)

    }

    return (
        <div className={style.appContainer}>
            <SetCounterValue setScoreValue={setScoreValue} maxValue={maxValue} startValue={startValue} setMaxValueHandler={setMaxValueCounter} setStartValueHandler={setStartValueCounter} isDisabled={isDisabled}/>
            <Counter value={value} increaseValue={increaseValue} resetValue={resetValue} maxValue={maxValue} startValue={startValue} isDisabled={isDisabled} />
        </div>
    );
}

export default App;
