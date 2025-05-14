import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { Shield, Satellite, Layout, BookOpen } from 'lucide-react';
import Navigation from './components/Navigation';
import Home from './pages/Home';
import Resources from './pages/Resources';
import Foundations from './pages/Foundations';
import About from './pages/About';

const navigation = [
  { name: 'Satellite', href: '/satellite', icon: Satellite },
  { name: 'Station', href: '/station', icon: Layout },
  { name: 'Emerald Tablets', href: '/tablets', icon: BookOpen },
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
          <Route path="/about" element={<About />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;