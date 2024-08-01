import React from 'react'

const ExampleProps = (props) => {
    // console.log(props);
    // console.log(props.user);
  return (
    <div>
      <h2>This is Props Example :- User Name is {props.user.fname}</h2>
    </div>
  )
}

export default ExampleProps
