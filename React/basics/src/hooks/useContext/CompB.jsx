import React, { useContext } from 'react'
import CompC from './CompC'
import { courseContext } from './CompA'

const CompB = () => {
  const myCourse = useContext(courseContext)
  return (
    <div>
      {/* <CompC name={props.name}/> */}
      <h2>I'm learning {myCourse}</h2>
      <CompC/>
    </div>
  )
}

export default CompB
