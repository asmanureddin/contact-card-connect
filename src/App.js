import logo from './logo.svg';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Navbar } from 'react-bootstrap';
import NavbarComponent from './components/Navbar';
import Homepage from './components/Homepage';
import ProfileMain from './components/ProfileMain';
import Footer from './components/Footer';

function App() {
  return (
    <div className="App">
      <NavbarComponent/>
      <Homepage/>
      <ProfileMain/>
      <Footer/>
    </div>
  );
}

export default App;
