import React from 'react'

import './index.css'
import Header from './Header'
import { Balance } from './Balance'
import { IncomeExpenses } from './IncomeExpenses'
import { TransactionList } from './TransactionList'
import { AddTransaction } from './AddTransaction'
import GlobalProvider from '../../contexts/Globaltate'

const  Money = () =>{
    return (
    <GlobalProvider>
        <Header/>
        <div className="container">
            <Balance/>
            <IncomeExpenses/>
            <TransactionList/>
            <AddTransaction/>
        </div>
    </GlobalProvider>
    )
}
export default Money;