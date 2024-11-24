import './App.css';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css'

// import Suraj from './Suraj';
// import Style from './Style'
// import ExampleProps from './ExampleProps'
// import ExampleListAndKeys from './ExampleListAndKeys'
// import ConditionalRendering from './ConditionalRendering'
// import EventHandling from './EventHandling'

// import ClassCompExample from './ClassComponents/ClassCompExample';
// import StateExample from './ClassComponents/StateExample';
// import MountingPhaseComp from './ClassComponents/MountingPhaseComp';
// import UpdatingPhase from './ClassComponents/UpdatingPhase';

import Header from './Header';
import Routing from './Routing';
import { useState } from 'react';

// import CompA from './hooks/useContext/CompA';

function App() {
  const [isDarkMode, setIsDarkMode] = useState(false);

  const toggleBackgroundColor = () => {
    setIsDarkMode(!isDarkMode);
  }

  const backgroundClass = isDarkMode ? "bg-dark text-light" : "bg-light text-dark";

  // let user = {
  //   fname:"Suraj",
  //   lnane:"Kumar",
  //   age:33,
  //   city:"Bangalore",
  //   isLogin:true
  // }
  // let nums = [2,5,7,10]

  return (
    <div className={backgroundClass} style={{ minHeight: "100vh" }}>

      {/* <Suraj/>
      <Style/>
      <ExampleProps name = "Suraj" user = {user} nums = {nums} />
      <ExampleListAndKeys/>
      <ConditionalRendering/>
      <EventHandling/> */}

      {/* <ClassCompExample name = 'React'/> */}
      {/* <StateExample/> */}
      {/* <MountingPhaseComp/> */}
      {/* <UpdatingPhase/> */}

      <Header isDarkMode={isDarkMode} toggleBackgroundColor = {toggleBackgroundColor}/>
      <Routing />

      {/* <CompA name="React JS"/> */}

    </div>
  );
}

export default App;
