import React, { Component } from 'react'

class MountingPhaseComp extends Component {
    constructor(){
        super()
        // console.log("Constructor executed");
    }
    state = {
        productName : "Samsung M14",
        price : '14k',
        userData:[]
    }
    static getDerivedStateFromProps(){
        // console.log("static getDerivedStateFromProps called");
        return null;
    }

    componentDidMount(){
        // console.log('componentDidMount executed');
        this.getData();
    }
    getData = async() => {
        let data = await fetch(`https://jsonplaceholder.typicode.com/users`);
        let res = await data.json();
        // console.log(res);
        this.setState({userData:res});
    }
  render() {
    // console.log('Running method render');
    console.log(this.state.userData);
    
    return (
      <div>
        <table class="table table-striped table-hover">
            <thead>
                <tr>
                    <td>Id</td>
                    <td>Name</td>
                    <td>User Name</td>
                    <td>Email</td>
                    <td>City</td>
                    <td>Phone</td>
                </tr>
            </thead>
            <tbody>
        {
            this.state.userData.map((curElm)=>(
                <tr>
                    <td>{curElm.id}</td>
                    <td>{curElm.name}</td>
                    <td>{curElm.username}</td>
                    <td>{curElm.email}</td>
                    <td>{curElm.address.city}</td>
                    <td>{curElm.phone}</td>
                </tr>
            ))
        }
        </tbody>
        </table>
      </div>
    )
  }
}

export default MountingPhaseComp


/*
Mounting phase=> When an instence of an component is created and it is instered into DOM node.
In mounting phase we have 4 methods/steps 
-> constructor
-> static getDerivedStateFromProps
-> render
-> componentDidMount


=> In static getDerivedStateFromProps method we will recive state from parent component.
=> In static getDerivedStateFromProps method we must always define one state.
=> In static getDerivedStateFromPro method we should return some object else return null.
*/
