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

function App() {

  // let user = {
  //   fname:"Suraj",
  //   lnane:"Kumar",
  //   age:33,
  //   city:"Bangalore",
  //   isLogin:true
  // }
  // let nums = [2,5,7,10]

  return (
    <div>

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

      <Header/>
      <Routing/>
      
    </div>
  );
}

export default App;
