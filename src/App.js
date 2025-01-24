import './input.css'
import logo from './logo.svg';
import './App.css';
import HeroSection from './components/HeroSection';
import Section1 from './components/Section1';
import Section2 from './components/Section2';
import Home from './pages/Home';
import JobOfferPage from './pages/JobOfferPage';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";


function App() {
  return (
        <Router>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/Job-Offer" element={<JobOfferPage />} />
        </Routes>
      </Router>
  );
}



export default App;
