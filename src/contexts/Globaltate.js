import React,{ createContext, useReducer } from 'react'
import { AppReducer } from '../resucers/AppReducer'

const initialState = {
    transactions: [
        { id: 1, text: "鲜花", amount: -20 },
        { id: 2, text: "薪酬", amount: 300 },
        { id: 3, text: "书籍", amount: -10 },
        { id: 4, text: "相机", amount: 150 }
    ]
}

export const GlobalContext = createContext(initialState)

const GlobalProvider = ({children}) => {
    const [state,dispatch] =  useReducer(AppReducer,initialState)
    return (
        <GlobalContext.Provider value={{transactions:state.transactions,dispatch}}>
            {children }
        </GlobalContext.Provider>
    )
}

export default GlobalProvider
