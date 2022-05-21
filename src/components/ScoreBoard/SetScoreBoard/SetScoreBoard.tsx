import React, {ChangeEvent} from "react";
import style from '../SetScoreBoard/SetScoreBoard.module.css'

type SetScoreBoardPropsType = {
    setMaxValueHandler: (value: number) => void
    setStartValueHandler: (value: number) => void
    maxValue: number
    startValue: number
}

export const SetScoreBoard = (props: SetScoreBoardPropsType) => {

    const setMaxValueHandler = (e: ChangeEvent<HTMLInputElement>) => {
        props.setMaxValueHandler(+e.currentTarget.value)
    }
    const setStartValueHandler = (e: ChangeEvent<HTMLInputElement>) => {
        props.setStartValueHandler(+e.currentTarget.value)
    }

    return (
        <div className={style.containerValueHolder}>
            <div className={style.valueHolder}>
                <span>Max Value: </span>
                <input type="number" min={props.startValue + 1} onChange={setMaxValueHandler} className={props.maxValue <= props.startValue ? style.error : ''} value={props.maxValue}/>
            </div>
            <div className={style.valueHolder}>
                <span>Start Value: </span>
                <input type="number" onChange={setStartValueHandler} max={props.maxValue - 1} className={props.startValue >= props.maxValue || props.startValue < 0 ? style.error : ''} value={props.startValue}/>
            </div>
        </div>
    )
}