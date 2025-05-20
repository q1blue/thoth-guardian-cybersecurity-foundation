import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { Shield, BookOpen, Layout, FileText, FlaskRound as Flask } from 'lucide-react';
import Navigation from './components/Navigation';
import Home from './pages/Home';
import Resources from './pages/Resources';
import Foundations from './pages/Foundations';
import About from './pages/About';
import Labs from './pages/Labs';

const navigation = [
  { name: 'Resources', href: '/resources', icon: BookOpen },
  { name: 'Foundations', href: '/foundations', icon: Layout },
  { name: 'Labs', href: '/labs', icon: Flask },
  { name: 'About', href: '/about', icon: FileText },
];

function App() {
  return (
    <Router>
      <div className="min-h-screen bg-slate-50">
        <Navigation navigation={navigation} />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/resources" element={<Resources />} />
          <Route path="/foundations" element={<Foundations />} />
          <Route path="/labs" element={<Labs />} />
          <Route path="/about" element={<About />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;