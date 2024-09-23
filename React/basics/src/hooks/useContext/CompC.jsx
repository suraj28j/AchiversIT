import React from 'react'
import { courseContext } from './CompA'

const CompC = () => {
  return (
    <div>
      {/* <h2>Course Name is {props.name}</h2> */}
      <courseContext.Consumer>
      {(value) => <h2>Course Name is {value}</h2>}
      </courseContext.Consumer>
    </div>
  )
}

export default CompC
