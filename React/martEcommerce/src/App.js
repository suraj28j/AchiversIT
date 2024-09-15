import './App.css';
import Header from './Header/Header';
import Router from './Routing/Router';
import Footer from './Footer/Footer';
import { ToastContainer} from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

function App() {
  return (
    <div>
      <Header/>
      <Router/>
      <Footer/>
      <ToastContainer autoClose={1000}/>
    </div>
  );
}

export default App;
