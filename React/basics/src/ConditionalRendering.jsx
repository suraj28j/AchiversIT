import React from 'react'

const ConditionalRendering = () => {

    // [ Method 1 Type-1 ]
    // let age = 18;
    // if (age >= 18) {
    //     return (
    //         <div>
    //             <h2>Hello Student</h2>
    //             <h3>You can vote</h3>
    //         </div>
    //     )
    // }
    // else {
    //     return <h2>You can not vote</h2>
    // }

    // [ Method 1 Type-2 ]
    // let age = 18;
    // let content;
    // if(age>=18){
    //     content  =  <h2>You can vote</h2>
    // }
    // else{
    //     content = <h2>You can not vote</h2>
    // }
    // return content;

    // [ Method 2 ]
    // Example - 1
    // let age = 18;
    // return (age>=18) ? (<h2>You can vote</h2>) : (<h2>You can not vote</h2>)

    // Example - 2
    let data = [];
    return (data.length>0) ? (<h2>Some data in array</h2>) : (<h2>No data in array</h2>)

}

export default ConditionalRendering
