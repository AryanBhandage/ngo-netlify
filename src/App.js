import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Header from './components/Header';
import Footer from './components/Footer';
import Home from './pages/Home';
import About from './pages/About';
import Donate from './pages/donate';
import ThankYou from './pages/Thankyou';

function App() {
  return (
    <Router>
      <div className="flex flex-col min-h-screen">
        <Header />
        <div className="pt-12 sm:pt-14 md:pt-20 flex-grow"> {/* Added responsive top padding */}
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/donate" element={<Donate />} />
            <Route path="/thank-you" element={<ThankYou />} />
          </Routes>
        </div>
        <Footer />
      </div>
    </Router>
  );
}

export default App;