import './Styles/App.css';
import './Styles/AppMobile.css'
import './Styles/AppTablet.css'
import Home from "./Components/Home";
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import Navbar from './Components/Navbar';
import Footer from './Components/Footer';
import Treatment from './Components/Treatments/Treatment';

function App() {
  return (
    <Router>
      <div className="App">
        <Navbar />
        <Routes>
          <Route path="/home" element={<Home />} />
          <Route path="/:section" element={<Home />} />
          <Route path="/treatments" element={<Treatment />} />
          <Route path="/treatments/:treatmentCategory" element={<Treatment />} />
        </Routes>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
