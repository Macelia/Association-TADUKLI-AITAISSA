// src/pages/Evenements.jsx

import React from 'react';

// 1. Importation du JSON : Remonte d'un niveau (à src/), puis descend dans Data/
// Chemin corrigé pour la nouvelle structure (src/pages/ -> src/Data/)
import { default as evenementsData } from '../data/evenements.json'; 

// 2. Importation de Card : Remonte d'un niveau (à src/), puis descend dans components/shared/
// Chemin corrigé pour la nouvelle structure (src/pages/ -> src/components/shared/)
import Card from '../shared/Card.jsx'; 

const Evenements = () => {
  return (
    <div className="container mx-auto p-6">
      
      {/* Titre et description de la page */}
      <h1 className="text-4xl font-extrabold text-indigo-800 mb-4 text-center">
        Nos Événements Culturels
      </h1>
      <p className="text-lg text-gray-600 mb-10 text-center max-w-3xl mx-auto">
        Découvrez nos spectacles, projections et rencontres artistiques à venir.
      </p>

      {/* Grille d'affichage des cartes */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        
        {/* Itération sur les données */}
        {evenementsData.map(event => (
          <Card
            key={event.id} // Clé unique
            title={event.title}
            content={`${event.date} à ${event.time} - ${event.location}`} // Combine date, heure, et lieu
            imageUrl={event.imageUrl}
            type={event.type} 
            linkTo={event.ticketsLink} // Utilise le lien de billetterie
            linkText={event.ticketsLink === 'Entrée Gratuite' ? 'Entrée Gratuite' : 'Réserver votre place'}
          />
        ))}
        
      </div>
    </div>
  );
};

export default Evenements;