import React, { useContext } from 'react'
import { GlobalContext } from "../../contexts/Globaltate";
import Transaction from "./Transction";

export const TransactionList = () => {
    const {transactions} =  useContext(GlobalContext)
    return (
        <div>
            <h3>历史记录</h3>
            <ul className="list">
                {transactions.map(transaction => (
                    <Transaction transaction={transaction} key={transaction.id}/>
                ) )}
                </ul>
        </div>
    )
}
