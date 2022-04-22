import React, {useState} from 'react';
import style from './App.module.css';
import {Button} from "./components/Button/Button";
import {ScoreBoard} from "./components/ScoreBoard/ScoreBoard";

function App() {

    const maxValue = 5
    const startValue = 0

    let [value, setValue] = useState<number>(startValue)

    const increaseValue = () => {
        value += 1
        setValue(value)
    }
    const resetValue = () => {
        setValue(startValue)
    }

    return (
        <div className={style.appContainer}>
            <div className={style.counterContainer}>
                <div className={style.counterScoreBoard}>
                    <ScoreBoard value={value}/>
                </div>
                <div className={style.counterButtonSection}>
                    <Button onClickHandler={increaseValue} title={'Inc'} isDisabled={value === maxValue} />
                    <Button onClickHandler={resetValue} title={'Reset'} isDisabled={value === startValue} />
                </div>
            </div>
        </div>
    );
}

export default App;
