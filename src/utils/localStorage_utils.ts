import {StateType} from "../redux/store";

// load state from local storage
export const loadState = ()=> {
    try {
        const savedStartValue = localStorage.getItem('state')
        console.log(localStorage.getItem('state'))
        if(savedStartValue === null) {
            return undefined
        }
        return JSON.parse(savedStartValue)
    } catch (err) {
        return undefined
    }
}

// automatically save to localStorage on every change
export const saveState = (state: StateType) => {
    try {
        localStorage.setItem('state', JSON.stringify(state))
    } catch {
        // ignore with errors
    }
}
