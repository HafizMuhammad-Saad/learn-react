import React from 'react'
import { useState } from 'react'


const PracticeCode = () => {
    
    const [count, setCount] = useState(0)
    const [text, setText] = useState(true)
    const [showText, setShowText] = useState('')
    const [bgColor, setBgColor] = useState({
    backgroundColor: 'linear-gradient(135deg, #89f7fe 0%, #66a6ff 100%)',
    color: 'black'
    })
    
    
    
    
    const changeStyle = () => {
    setBgColor(prev => ({
      backgroundColor: prev.backgroundColor.includes('89f7fe') 
        ? 'linear-gradient(135deg, #ff9a9e 0%, #fad0c4 100%)' 
        : 'linear-gradient(135deg, #89f7fe 0%, #66a6ff 100%)',
      color: prev.color === 'black' ? 'white' : 'black'
    }))
    
    }
    const [array, setArray] = useState([])
    
    
    
    function handleIncrease() {
      if (count < 20) {
        setCount(count + 1)
        
      } else {
        console.log('limit reached');

        
      }
    }

    function handleDecrease() {
      if (count > 0) {
        setCount(count - 1)
      } else {
        console.log('limit reached');
        
      }
    }
    
    
    function handleAdd() {
      setCount(count + 1)
      setArray([...array, {text :'item added', id: count}])
    }
  return (
    


<div className="app" style={{ background: bgColor.backgroundColor, color: bgColor.color }}>
      <div className="container">
        <h1 className="title">React useState Practice 🚀</h1>

        <div className="button-group">
          <button className="btn" onClick={handleAdd}>➕ Add Text</button>
          <button className="btn" onClick={handleIncrease}>⬆️ Increase Count</button>
          <button className="btn" onClick={handleDecrease}>⬇ Decrease Count</button>
          <button className="btn" onClick={() => setText(!text)}>{text ? '🔛 ON' : '🔴 OFF'}</button>
          <button className="btn" onClick={changeStyle}>🎨 Change BG Color</button>
        </div>

        <p className="count">Current Count: <strong>{count}</strong></p>

        <input 
          className="input"
          type="text"
          onChange={(e) => setShowText(e.target.value)}
          placeholder="Type something awesome..."
        />
        <p className="live-text">{showText}</p>

        <ul className="list">
          {array.map((item) => (
            <li key={item.id} className="list-item">
              {item.text} <span className="item-id">#{item.id}</span>
            </li>
          ))}
        </ul>
      </div>
    </div>
  )
}

export default PracticeCode

