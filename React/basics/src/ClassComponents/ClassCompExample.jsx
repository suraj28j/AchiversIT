import React, { Component } from 'react'

class ClassCompExample extends Component {
    constructor(props){
        super(props)
    }
   
  render() {
    // console.log(this);
    
    return (
      <div>
        <h2>Class Component Example</h2>
        <h2>Learning {this.props.name}</h2>
      </div>
    )
  }
}

export default ClassCompExample
