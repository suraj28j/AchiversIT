import React from 'react'

const ExampleProps = (props) => {
    console.log(props);
    console.log(props.user);
  return (
    <div>
      <h3>User Name is {props.user.fname}</h3>
    </div>
  )
}

export default ExampleProps
