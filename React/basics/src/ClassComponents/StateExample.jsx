import React, { Component } from 'react'

class StateExample extends Component {
    constructor(){
        super();
        this.state = {
            count:0
        }
    }
    handleIncrement = () => {
        this.setState({count:this.state.count+1});
    }
    handleDecrement = () => {
        this.setState({count:this.state.count-1});
    }
    handleReset = () => {
        this.setState({count:0});
    }
  render() {
    return (
      <div>
        <h2>Count : {this.state.count}</h2>
        <button className='btn btn-primary' onClick={this.handleIncrement}>Incremenmt</button>
        <button className='btn btn-danger ms-1' onClick={this.handleDecrement}>Decremenmt</button>
        <button className='btn btn-success ms-1' onClick={this.handleReset}>Reset</button>
      </div>
    )
  }
}

export default StateExample


/*
    => State is an variable which will hold the value.
    => In class component state will be defined with keyword "state".
    => When state need to updated it will updated with keyword "setState".
    => Never touch RealDOM insted always use state and setState to update the value in UI.
*/
