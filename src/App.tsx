import React from 'react';
import style from './App.module.css';
import {Counter} from "./mainElements/Counter";
import {SetCounterValue} from "./mainElements/SetCounterValue";
import {useDispatch, useSelector} from "react-redux";
import {StateType} from "./redux/store";
import {
    resetValueAC,
    setDisabledAC,
    setMaxValueCounterAC,
    setStartValueCounterAC,
    setValueAC
} from "./redux/counter_Reducer";

function App() {

    let value = useSelector<StateType, number>(state => state.counter.value)
    let maxValue = useSelector<StateType, number>(state => state.counter.maxValue)
    let startValue = useSelector<StateType, number>(state => state.counter.startValue)
    let isDisabled = useSelector<StateType, boolean>(state => state.counter.isDisabled)

    const dispatch = useDispatch()

    const increaseValue = () => {
        dispatch(setValueAC(value))
    }
    const resetValue = () => {
        dispatch(resetValueAC(startValue))
    }

    const setScoreValue = () => {
        if(startValue < maxValue) {
            dispatch(resetValueAC(startValue))
            dispatch(setDisabledAC(false))
        }
    }

    const setMaxValueCounter = (value: number) => {
        dispatch(setDisabledAC(true))
        dispatch(setMaxValueCounterAC(value))

    }
    const setStartValueCounter = (value: number) => {
        dispatch(setDisabledAC(true))
        dispatch(setStartValueCounterAC(value))

    }

    return (
        <div className={style.appContainer}>
            <SetCounterValue setScoreValue={setScoreValue} maxValue={maxValue} startValue={startValue} setMaxValueHandler={setMaxValueCounter} setStartValueHandler={setStartValueCounter} isDisabled={isDisabled}/>
            <Counter value={value} increaseValue={increaseValue} resetValue={resetValue} maxValue={maxValue} startValue={startValue} isDisabled={isDisabled} />
        </div>
    );
}

export default App;
