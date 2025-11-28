// src/pages/Home.jsx
import React from 'react';
// CORRECTION D'IMPORTATION : Remonte d'un niveau (à src/), puis descend dans components/shared/
import CTA from '../shared/CTA.jsx'; 

const Home = () => {
  return (
    <div className="text-center p-10 max-w-4xl mx-auto">
      <h1 className="text-4xl font-extrabold text-blue-800 mb-4
             transition-transform duration-200 ease-out
             hover:scale-105 hover:-rotate-1">
        Ansuf yis-wen ɣer Tdukli n AT 3issa 
      </h1>
      <h2 className="mt-4 text-lg sm:text-xl font-medium text-slate-700 dark:text-slate-300">
        Bienvenue à notre Association Culturelle !
      </h2>
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

      {/*evenements à venir */}
      {/* Bandeau d'information animé */}
<div className="overflow-hidden mb-10 ">
  <p className="whitespace-nowrap text-lg font-semibold text-red-600
                animate-marquee">
    🎭 Aucun spectacle prévu pour le moment — nous vous tiendrons informés très bientôt !
  </p>
</div>
      
    </div>
  );
};

export default Home;