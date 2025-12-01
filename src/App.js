// src/App.jsx
import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';


// Les composants de layout sont dans 'components/layout'
import Header from './components/layout/Header.jsx';
import Footer from './components/layout/Footer.jsx';

// Correction : Les pages sont dans './components/pages/'
import Home from './components/pages/Home.jsx'; 
import Ateliers from './components/pages/Ateliers.jsx';
import Evenements from './components/pages/Evenements.jsx';
import Soutenir from './components/pages/Soutenir.jsx';
import Contact from './components/pages/Contact.jsx';

import MentionsLegales from "./components/pages/MentionsLegales";
import PolitiqueConfidentialite from "./components/pages/PolitiqueConfidentialite";


function App() {
  return (
    <BrowserRouter>
      <div className="flex flex-col min-h-screen">
        <Header />
        <main className="flex-grow pt-8 bg-gray-50">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/ateliers" element={<Ateliers />} />
            <Route path="/evenements" element={<Evenements />} />
            <Route path="/soutenir" element={<Soutenir />} />
            <Route path="/contact" element={<Contact />} />

            {/* ⭐ Ajoute-les ici */}
            <Route path="/mentions-legales" element={<MentionsLegales />} />
            <Route path="/politique-confidentialite" element={<PolitiqueConfidentialite />} />
            

          </Routes>
        </main>
        <Footer />
      </div>
    </BrowserRouter>
  );
}

export default App;
