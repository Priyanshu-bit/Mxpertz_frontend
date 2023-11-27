
import './App.css';
import Navbar from './Components/Navbar';
import Highlight from './Components/Highlight';
import Menu from './Components/Menu'
import ImageGrid from './Components/ImageGrid';
import Testimonials from './Components/Testimonials';
import Events from './Components/Events';
import Contact from './Components/Contact';

function App() {
  return (
    <div className="App">
     <Navbar/>
     <Highlight/>
     <Menu/>
     <ImageGrid/>
     <Testimonials/>
     <Events/>
     <Contact/>
    </div>
  );
}

export default App;
