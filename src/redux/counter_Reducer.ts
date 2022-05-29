export const INCREASE_VALUE = 'INCREASE_VALUE'
export const RESET_VALUE = 'RESET_VALUE'
export const SET_MAX_VALUE_COUNTER = 'SET_MAX_VALUE_COUNTER'
export const SET_START_VALUE_COUNTER = 'SET_START_VALUE_COUNTER'
export const SET_DISABLED = 'SET_DISABLED'

const initialState = {
    value: 0,
    maxValue: 1,
    startValue: 0,
    isDisabled: false
}

type SetValueACType = ReturnType<typeof setValueAC>
type ResetValueACType = ReturnType<typeof resetValueAC>
type SetDisabledACType = ReturnType<typeof setDisabledAC>
type SetMaxValueCounterACType = ReturnType<typeof setMaxValueCounterAC>
type SetStartValueCounterACType = ReturnType<typeof setStartValueCounterAC>

type initialStateType = typeof initialState

export type ActionType = SetValueACType | ResetValueACType | SetDisabledACType | SetMaxValueCounterACType | SetStartValueCounterACType

export const counterReducer = (state: initialStateType = initialState, action: ActionType): initialStateType => {
    switch (action.type) {
        case INCREASE_VALUE:
            return {...state, value: action.value + 1}
        case RESET_VALUE:
            return {...state, value: action.startValue}
        case SET_MAX_VALUE_COUNTER:
            return {...state, maxValue: action.value}
        case SET_START_VALUE_COUNTER:
            return {...state, startValue: action.value}
        case SET_DISABLED:
            return {...state, isDisabled: action.isDisabled}
        default:
            return state
    }
}

export const setValueAC = (value: number) => {
    return {type: INCREASE_VALUE, value } as const
}
export const resetValueAC = (startValue: number) => {
    return {type: RESET_VALUE, startValue } as const
}
export const setDisabledAC = (isDisabled: boolean) => {
    return {type: SET_DISABLED, isDisabled } as const
}
export const setMaxValueCounterAC = (value: number) => {
    return {type: SET_MAX_VALUE_COUNTER, value } as const
}
export const setStartValueCounterAC = (value: number) => {
    return {type: SET_START_VALUE_COUNTER, value } as const
}
