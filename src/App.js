import './Assets/css/style.css';
import './Assets/css/bootstrap.min.css'
import Navbar from './Components/Navbar';
import Home from './Components/Home';
import Skils from './Components/Skils';
import Project from './Components/Project';
import Contact from './Components/Contact';
import Footer from './Components/Footer';
import Certif from './Components/Certif';

function App() {
  return (
    <>
    <Navbar/>
    <Home/>
    <Skils/>
    <Certif/>
    <Project/>
    <Contact/>
    <Footer/>
    </>
  );
}

export default App;
