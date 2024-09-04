import React, { useReducer } from 'react'


const UseReducer = () => {

    /* Method 1 passing only Type */
    // const reducer = (currentState, action) => {
    //     console.log(action);
    //     console.log(currentState);
    //     switch(action){
    //         case "INCREMENT":
    //         return currentState+1;
    //         case "DECREMENT":
    //         return currentState-1;
    //         default :
    //         return currentState;
    //     }
    // }

    /* Method 2 passing both Type and Payload */
    const reducer = (currentState, action) => {
        // console.log(action);
        switch (action.type) {
            case "INCREMENT":
                return currentState + action.payload;
            case "DECREMENT":
                return currentState - action.payload;
            case "RESET":
                return currentState = action.payload;
            default:
                return currentState;
        }
    }
    const [initState, dispatch] = useReducer(reducer, 0);

    const resetFunction = () => {
        dispatch({ type: "RESET", payload: 0 });
    }
    return (
        <div className='container'>
            <div className='row mt-4'>
                <div className='col-md-4'></div>
                <div className='col-md-4'>
                    <h1>UseReducer Hook</h1>
                    <h2>Counter : {initState}</h2>
                    {/* Method 1 passing only Type */}
                    {/* <button className='btn btn-primary' onClick={()=>dispatch("INCREMENT")}>Increment</button>
                    <button className='btn btn-danger ms-2' onClick={()=>dispatch("DECREMENT")}>Decrement</button> */}

                    {/* Method 2 passing both Type and Payload */}
                    <button className='btn btn-primary' onClick={() => dispatch({ type: "INCREMENT", payload: 5 })}>Increment</button>
                    <button className='btn btn-danger ms-2' onClick={() => dispatch({ type: "DECREMENT", payload: 3 })}>Decrement</button>
                    <button className='btn btn-success ms-2' onClick={resetFunction}>Reset</button>
                </div>
                <div className='col-md-4'></div>
            </div>
        </div>
    )
}

export default UseReducer

// Use reducer hook is same as useState hook, Which is used to update the state in functional component. But when it comes to use state it will handle more easier state but useReducr is used to handle more complex state. (User Auth)
/*
    Synatx: 
    const reducerFunction = (currentState, action)=>{}

    const [State, dispatch] = useReducer(reducerFunction, initialStateValue);

    currentState = AT present what value is stored in state that is current state.
    Action = > Action will get value from dispatch => You will be getting type and payload as an value for ACtion.
    Type => What action we are performing that is Type. (Type of Action).
    Payload => Based on type if we want specific value that will be payload.
    State => It is an variable that holds the value.
    Dispatch => When any action triggers we will dispatch type and payload to reducer function.
    reducerFunction=> Its JS function which will be knowing "what to do".
    initialStateValue => 0,[],{},null,undefined.
    */
