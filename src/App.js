import logo from './logo.svg';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Navbar } from 'react-bootstrap';
import NavbarComponent from './components/Navbar';
import Homepage from './components/Homepage';
import Profile from './components/Profile';

function App() {
  return (
    <div className="App">
      <NavbarComponent/>
      <Homepage/>
      <Profile/>
      <h1>I am the contact card app</h1>
    </div>
  );
}

export default App;
