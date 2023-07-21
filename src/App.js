import './Styles/App.css';
import './Styles/AppMobile.css'
import './Styles/AppTablet.css'
import Home from "./Components/Home";
import { Routes, Route } from 'react-router-dom';
import Navbar from './Components/Navbar';
import Footer from './Components/Footer';
import Treatment from './Components/Treatments/Treatment';

function App() {
  return (   
    <div className="App">
      <Navbar />
      <Routes>
        <Route path="/" element={ <Home />} />
        <Route path="treatments" element={ <Treatment />} />
        <Route path="treatments/:treatmentCategory" element={ <Treatment />} />

        <Route path="/VanityEsteticaLandingPage" element={ <Home />} />
        <Route path="/VanityEsteticaLandingPage/treatments" element={ <Treatment /> } />
        <Route path="/VanityEsteticaLandingPage/treatments/:treatmentCategory" element={ <Treatment />} />
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
