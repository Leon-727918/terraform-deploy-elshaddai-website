import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import GeminiAssistant from './components/GeminiAssistant';
import Home from './src/pages/Home';
import AgenticAI from './src/pages/AgenticAI';
import AboutUs from './src/pages/AboutUs';
import CloudSolutions from './src/pages/CloudSolutions';

const App: React.FC = () => {
  return (
    <Router>
      <div className="min-h-screen">
        <Navbar />

        <main>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/agentic-ai" element={<AgenticAI />} />
            <Route path="/cloud-solutions" element={<CloudSolutions />} />
            <Route path="/about-us" element={<AboutUs />} />
          </Routes>
        </main>

        <Footer />
        <GeminiAssistant />
      </div>
    </Router>
  );
};

export default App;
