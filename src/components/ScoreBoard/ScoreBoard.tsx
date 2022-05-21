import React from "react";
import style from './ScoreBoard.module.css'

type ScoreBoardPropsType = {
    value: number
    maxValue: number
    startValue: number
    isDisabled: boolean
}

export const ScoreBoard = (props: ScoreBoardPropsType) => {
    return (
    <div className={style.valueHolder}>
        {props.isDisabled ? (props.startValue < props.maxValue ? <span className={style.prompt}>Enter value and press "Set"</span> : <span className={`${style.prompt} ${style.red}`}>Value is incorrect</span>) :
            <span className={props.value === props.maxValue ? `${style.red}` : ''}>{props.value}</span>}
    </div>
    )
}