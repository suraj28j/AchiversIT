import React from 'react'
import "./style.css"
import moduleStyle from "./style.module.css"

const Style = () => {
  let styleObj = {
    bgcolor:{
      backgroundColor:'greenyellow',
      padding:'10px'
    }
  }
  return (
    <div>
      <h2 style={{backgroundColor:'Red',padding:'10px'}}>This is Inline CSS</h2>
      <h2 style={styleObj.bgcolor}>This is Internal CSS</h2>
      <h2 className='bgColor' >This is External CSS</h2>
      <h2 className={moduleStyle.bgColor}>This is Module CSS</h2>

    </div>
  )
}

export default Style
