import './App.css';
import About from './component/About';
import Contact from './component/Contact';
import Home from './component/Home';
import Navbar from './component/Navbar';
import Skills from './component/Skills';
import Work from './component/Work';


function App() {
  return (
    <div className="">
      <Navbar/>
      <Home/>
      <Work/>
      <About/>
      <Skills/>
      <Contact/>
    </div>
  );
}

export default App;
