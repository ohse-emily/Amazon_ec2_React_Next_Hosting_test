import {createContext} from 'react'

export const initialState = {
    IsLogin: false,
}
const Store = createContext(initialState)

export default Store