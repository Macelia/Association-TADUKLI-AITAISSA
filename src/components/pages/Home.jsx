// src/pages/Home.jsx
import React from 'react';
// CORRECTION D'IMPORTATION : Remonte d'un niveau (à src/), puis descend dans components/shared/
import CTA from '../shared/CTA.jsx'; 

const Home = () => {
  return (
    <div className="text-center p-10 max-w-4xl mx-auto">
      <h1 className="text-4xl font-extrabold text-blue-800 mb-4">
        Bienvenue à notre Association Culturelle !
      </h1>
      <p className="text-xl text-gray-600 mb-8">
        Promouvoir la lecture, le dessin, la musique et les jeux stratégiques pour tous.
      </p>
      
      {/* Utilisation de deux CTA pour diriger les utilisateurs */}
      <div className="space-x-4">
        <CTA 
          text="Découvrir les Ateliers" 
          to="/ateliers" 
          color="bg-green-500 text-white" // Changement de couleur pour varier
        />
        <CTA 
          text="Je soutiens l'Association (Don)" 
          to="/soutenir" 
          isExternal={false} // Lien interne vers la page /soutenir
        />
      </div>
      
    </div>
  );
};

export default Home;