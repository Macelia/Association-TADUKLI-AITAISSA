// src/components/shared/Card.jsx

import React from 'react';
// IMPORTER LINK pour la navigation React Router
import { Link } from 'react-router-dom'; 

const Card = ({ title, content, imageUrl, linkTo, type }) => {
  
  // Définit une couleur de fond en fonction du type d'activité pour une distinction visuelle
  const bgColor = type === 'atelier' ? 'bg-indigo-100' : 'bg-red-100';
  
  return (
    // Utilisez les classes Tailwind : shadow-lg, rounded-lg, transition, hover:shadow-xl
    <div className={`shadow-lg rounded-lg overflow-hidden transition duration-300 hover:shadow-xl ${bgColor}`}>
      
      {/* Image de l'événement ou de l'atelier */}
      {imageUrl && (
        <img 
          className="w-full h-48 object-cover" 
          src={imageUrl} 
          alt={title} 
        />
      )}

      <div className="p-4">
        {/* Étiquette d'activité */}
        <span className={`inline-block text-xs font-semibold uppercase px-2 py-1 rounded-full mb-2 ${type === 'atelier' ? 'bg-indigo-600 text-white' : 'bg-red-600 text-white'}`}>
          {type === 'atelier' ? 'Atelier' : 'Spectacle'}
        </span>
        
        {/* Titre */}
        <h3 className="text-xl font-bold text-gray-800 mb-2">{title}</h3>
        
        {/* Description */}
        <p className="text-gray-600 text-sm mb-4">{content}</p>
        
        {/* Lien/Bouton d'action - Utilise <Link> pour React Router */}
        {linkTo && (
          <Link 
            to={linkTo} // Utilise l'attribut 'to'
            className="inline-block bg-blue-500 text-white font-medium py-2 px-4 rounded hover:bg-blue-600 transition duration-300"
          >
            Voir les détails
          </Link>
        )}
      </div>
    </div>
  );
};

export default Card;