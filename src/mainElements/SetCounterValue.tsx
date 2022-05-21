import React from "react";
import style from "../App.module.css";
import {Button} from "../components/Button/Button";
import {SetScoreBoard} from "../components/ScoreBoard/SetScoreBoard/SetScoreBoard";

type SetCounterValueType = {
    setScoreValue: () => void
    maxValue: number
    startValue: number
    setMaxValueHandler: (value: number) => void
    setStartValueHandler: (value: number) => void
    isDisabled: boolean

}

export const SetCounterValue: React.FC<SetCounterValueType> = ({ startValue, setScoreValue, maxValue, setMaxValueHandler, setStartValueHandler, isDisabled}) => {
    return (
        <div>
            <div className={style.counterContainer}>
                <div className={style.counterScoreBoard}>
                    <SetScoreBoard setMaxValueHandler={setMaxValueHandler} setStartValueHandler={setStartValueHandler} maxValue={maxValue} startValue={startValue}/>
                </div>
                <div className={style.counterButtonSection}>
                    <Button onClickHandler={setScoreValue} title={'Set'} isDisabled={!isDisabled || startValue < 0 || startValue >= maxValue} />
                </div>
            </div>
        </div>
    )
}