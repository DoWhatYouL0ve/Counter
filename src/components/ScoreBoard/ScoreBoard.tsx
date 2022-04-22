import React from "react";
import style from './ScoreBoard.module.css'

type ScoreBoardPropsType = {
    value: number
}

export const ScoreBoard = (props: ScoreBoardPropsType) => {
    return (
        <div className={style.valueHolder}>
            <span className={props.value === 5 ? `${style.red}` : ''}>{props.value}</span>
        </div>
    )
}