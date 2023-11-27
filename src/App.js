
import './App.css';
import Navbar from './Components/Navbar';
import SecondPage from './Components/Highlight';
import Third from './Components/Menu'
import ImageGrid from './Components/ImageGrid';
import Testimonials from './Components/Testimonials';
import NewsEvents from './Components/Events';
import ReservationContact from './Components/Contact';

function App() {
  return (
    <div className="App">
     <Navbar/>
     <SecondPage/>
     <Third/>
     <ImageGrid/>
     <Testimonials/>
     <NewsEvents/>
     <ReservationContact/>
    </div>
  );
}

export default App;
