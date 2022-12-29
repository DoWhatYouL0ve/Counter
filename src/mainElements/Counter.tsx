import style from "../App.module.css";
import {ScoreBoard} from "../components/ScoreBoard/ScoreBoard";
import {Button} from "../components/Button/Button";
import React, {memo} from "react";

type CounterType = {
    value: number
    increaseValue: () => void
    resetValue: () => void
    maxValue: number
    startValue: number
    isDisabled: boolean
}

export const Counter: React.FC<CounterType> = memo(({value, resetValue, increaseValue, startValue, maxValue, isDisabled}) => {
    return (
        <div>
            <div className={style.counterContainer}>
                <div className={style.counterScoreBoard}>
                    <ScoreBoard value={value} maxValue={maxValue} isDisabled={isDisabled} startValue={startValue}/>
                </div>
                <div className={style.counterButtonSection}>
                    <Button onClickHandler={increaseValue} title={'Inc'} isDisabled={value === maxValue || isDisabled} />
                    <Button onClickHandler={resetValue} title={'Reset'} isDisabled={value === startValue || isDisabled} />
                </div>
            </div>
        </div>
    )
})