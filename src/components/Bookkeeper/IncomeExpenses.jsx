import React, { useContext } from 'react'
import { GlobalContext } from "../../contexts/Globaltate";

export const IncomeExpenses = () => {
  const { transactions }  = useContext(GlobalContext)
    const amount = transactions.map(transaction => transaction.amount)
    const income = amount.filter(amount => amount > 0).reduce((acc,amount) => (acc += amount),0).toFixed(2)
    const expense = amount.filter(amount => amount < 0).reduce((acc,amount) => (acc += amount),0) * (-1).toFixed(2)
    return (
        <div className="inc-exp-container">
        <div>
          <h4>收入</h4>
          <p className="money plus">+{income}</p>
        </div>
        <div>
          <h4>支出</h4>
          <p className="money minus">-{expense}</p>
        </div>
      </div>
    )
}
