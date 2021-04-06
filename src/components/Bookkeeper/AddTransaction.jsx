import React,{ useState,useContext } from 'react'
import { GlobalContext } from "../../contexts/Globaltate";
export const AddTransaction = () => {
    const [text,setText] = useState('')
    const [amount,setAmount] = useState(0)
    const { dispatch }  = useContext(GlobalContext)

    const handleSubmit = (e) => {
        e.preventDefault()
        let newTransaction = {
            id:Math.random(),
            text,
            amount: + amount
        }
        dispatch({
            type:'ADD_TRANSACTION',
            transaction:newTransaction
        })
        setText('')
        setAmount(0)
    }
    return (
        <div>
            <h3>添加新交易</h3>
            <form onSubmit={handleSubmit}>
                <div className="form-control">
                <label htmlFor="text">交易名称</label>
                <input type="text" onChange={(e) => setText(e.target.value)} value={text} placeholder="输入名称..." />
                </div>
                <div className="form-control">
                <label htmlFor="amount">金额 <br />（支出-负数，收入-正数）</label>
                <input type="number" onChange={(e) => setAmount(e.target.value)} value={amount} placeholder="输入金额..." />
                </div>
                <button className="btn">添加新交易</button>
            </form>
        </div>
    )
}
