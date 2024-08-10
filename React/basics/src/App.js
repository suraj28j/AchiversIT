import './App.css';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css'
// import Suraj from './Suraj';
// import Style from './Style'
// import ExampleProps from './ExampleProps'
// import ExampleListAndKeys from './ExampleListAndKeys'
// import ConditionalRendering from './ConditionalRendering'
// import EventHandling from './EventHandling'

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

      <Header/>
      <Routing/>


    </div>
  );
}

export default App;
