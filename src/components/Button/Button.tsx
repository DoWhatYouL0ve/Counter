import React from "react";
import style from './Button.module.css'

type ButtonPropsType = {
    onClickHandler: () => void
    title: string
    isDisabled: boolean
}

export const Button = (props: ButtonPropsType) => {

    return (
        <div>
            <button
                className={style.button}
                onClick={props.onClickHandler}
                disabled={props.isDisabled}
            >
                {props.title}
            </button>
        </div>
    )
}