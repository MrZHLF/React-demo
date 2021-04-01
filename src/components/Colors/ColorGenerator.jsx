import React, {useState} from 'react'
import Values from 'values.js'
import SingleColor from './SingleColor'

import './index.css';

const ColorGenerator = () => {
  const [color,setColor] = useState('')
  const [list,setList] = useState([])
  const [error,setError] = useState(false)
  const handleSubmit = (e) => {
    e.preventDefault()
    try {
      let colors = new Values(color).all(10)
      setList(colors)
      setError(false)
    } catch (error) {
      setError(true)
    }
  }
  return (
    <div>
      <section className="container">
        <h3>颜色生成器</h3>
        <form onSubmit={handleSubmit}>
            <input type="text" 
            className={`${error ? 'error' : null}`} 
            placeholder="#f15025" 
            onChange={(e) => setColor(e.target.value)} />
            <button type="submit" className="btn">提交</button>
        </form>
      </section>
      <section className="colors">
        {list.map((color,index) => {
          return (
            <SingleColor key={index} color={color} index={index}/>
          )
        })}
      </section>
    </div>
  )
}

export default ColorGenerator
