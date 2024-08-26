import './App.css';
import {ToastContainer} from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css';
import Header from './Header/Header';
import Routing from './Routing/Routing';

function App() {
  return (
    <div>
      <Header/>
      <Routing/>
      <ToastContainer autoClose={1000}/>
    </div>
  );
}

export default App;
