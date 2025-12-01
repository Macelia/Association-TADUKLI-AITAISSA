// src/pages/Ateliers.jsx

import React, { useState} from 'react';


// 1. Importation du JSON : Remonte d'un niveau (à src/), puis descend dans Data/
// Chemin corrigé pour la nouvelle structure (src/pages/ -> src/Data/)
import { default as ateliersData } from '../data/ateliers.json'; 

// 2. Importation de Card : Remonte d'un niveau (à src/), puis descend dans components/shared/
// Chemin corrigé pour la nouvelle structure (src/pages/ -> src/components/shared/)
import Card from '../shared/Card.jsx'; 

const Ateliers = () => {
  const [selectedAtelier,setSelectedAtelier]=useState(null);
  const [isModalOpen, setIsModalOpen]=useState(false);

  const openModal=(atelier)=>{
    setSelectedAtelier(atelier);
    setIsModalOpen(true);
  }
  const closeModal=()=>{
    setSelectedAtelier(null);
    setIsModalOpen(false);

  }
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
            linkTo="#"
            onDetails={()=> openModal(atelier)} 
          />
        ))}

        {/* Modal */}
        
      </div>
       {/* Modal */}
      {isModalOpen && selectedAtelier && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
          <div className="bg-white rounded-lg shadow-lg max-w-xl w-full p-6 relative">
            <button
              onClick={closeModal}
              className="absolute top-2 right-2 text-gray-500 hover:text-gray-800 text-xl font-bold"
            >
              ×
            </button>
            <h2 className="text-2xl font-bold mb-4">{selectedAtelier.title}</h2>
            <img
              src={selectedAtelier.imageUrl}
              alt={selectedAtelier.title}
              className="w-full mb-4 rounded"
            />
            <p className="mb-2"><strong>Description :</strong> {selectedAtelier.description}</p>
            <p className="mb-2"><strong>Détails :</strong> {selectedAtelier.details}</p>
            <p className="mb-2"><strong>Horaires :</strong> {selectedAtelier.schedule}</p>
            <p className="mb-2"><strong>Tarif :</strong> {selectedAtelier.fee}</p>
          </div>
        </div>
      )}
    </div>
  );
};

export default Ateliers;