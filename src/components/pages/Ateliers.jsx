// src/pages/Ateliers.jsx

import React from 'react';

// 1. Importation du JSON : Remonte d'un niveau (à src/), puis descend dans Data/
// Chemin corrigé pour la nouvelle structure (src/pages/ -> src/Data/)
import { default as ateliersData } from '../data/ateliers.json'; 

// 2. Importation de Card : Remonte d'un niveau (à src/), puis descend dans components/shared/
// Chemin corrigé pour la nouvelle structure (src/pages/ -> src/components/shared/)
import Card from '../shared/Card.jsx'; 

const Ateliers = () => {
  return (
    <div className="container mx-auto p-6">
      
      {/* Titre et description de la page */}
      <h1 className="text-4xl font-extrabold text-indigo-800 mb-4 text-center">
        Nos Ateliers Culturels
      </h1>
      <p className="text-lg text-gray-600 mb-10 text-center max-w-3xl mx-auto">
        Découvrez notre programme d'ateliers créatifs et éducatifs pour tous les âges.
      </p>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        
        {/* Itération sur les données */}
        {ateliersData.map(atelier => (
          <Card
            key={atelier.id} 
            title={atelier.title}
            content={atelier.description}
            imageUrl={atelier.imageUrl}
            type={atelier.type} 
            linkTo="/contact" 
          />
        ))}
        
      </div>
    </div>
  );
};

export default Ateliers;