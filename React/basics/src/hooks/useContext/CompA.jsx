import React from 'react';
import CompB from './CompB';

export const courseContext = React.createContext();

const CompA = () => {
    // console.log(props);
  return (
    <div>
        <courseContext.Provider value = {"React JS"}>
        {/* <CompB name={props.name}/> */}
        <CompB/>
        </courseContext.Provider>
    </div>
  )
}

export default CompA
