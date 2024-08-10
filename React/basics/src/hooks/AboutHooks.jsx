import React from 'react'

const AboutHooks = () => {
  return (
    <div className='container mt-4'>
      <div className='row mt-4'>
      <h2>History of Hooks</h2>
          <p>ReactJS hooks were introduced in React 16.8, 
            released in February-6 2019. Hooks were added to solve several issues in the React ecosystem, 
            such as code reuse, complex component logic, 
            and the difficulties of working with class components.</p>
      </div>
        <div className='row mt-4'>
          <h2>Why Hooks were Introduced</h2>
          <h4>Hooks were introduced to address the following issues:</h4>
          <p>(1) Difficulty in managing state and side effects in functional components.</p>
          <p>(2) Challenges in code reuse and logic sharing.</p>
          <p>(3) Complexities of working with lifecycle methods in class components.</p>
          <p>(4) Enabling the use of state and other React features without writing a class.</p>
        </div>
        <div className='row mt-4'>
          <h2>Advantages of Hooks</h2>
          <h4>Hooks offer several advantages:</h4>
          <p>(1) Simplified and cleaner code structure.</p>
          <p>(2) Enhanced code reuse through custom hooks.</p>
          <p>(3) Better separation of concerns.</p>
          <p>(4) Easier to understand and debug.</p>
        </div>
        <div className='row mt-4'>
          <h2>Commonly Used Hooks</h2>
          <h4>Some of the most commonly used React hooks are:</h4>
          <p>(1) useState: Manages state in functional components.</p>
          <p>(2) useEffect: Handles side effects in functional components.</p>
          <p>(3) useContext: Accesses the context API.</p>
          <p>(4) useReducer: Manages complex state logic.</p>
          <p>(5) useRef: Accesses DOM elements and persists mutable values.</p>
        </div>
        <div className='row mt-4'>
          <h2>Conclusion</h2>
          <p>(1) ReactJS hooks have revolutionized the way developers manage state and side effects in React applications.</p>
          <p>(2) Hooks provide a simpler and more powerful way to write functional components, enhancing code readability and maintainability.</p>
          <p>(3) Using hooks can lead to more efficient and effective React development.</p>
        </div>
      
    </div>
  )
}

export default AboutHooks
