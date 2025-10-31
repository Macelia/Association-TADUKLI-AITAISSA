// src/pages/Soutenir.jsx
import React from 'react';
// Importation du CTA pour le bouton de don
// Le chemin remonte d'un niveau (pages) puis descend dans components/shared/
import CTA from '../shared/CTA.jsx'; 

const Soutenir = () => {
  return (
    <div className="container mx-auto p-8 max-w-4xl">
      <h1 className="text-4xl font-extrabold text-blue-900 mb-6 text-center">
        Soutenez notre Association Culturelle
      </h1>
      
      <div className="bg-white p-6 rounded-xl shadow-2xl space-y-6">
        
        <p className="text-lg text-gray-700 leading-relaxed">
          Votre soutien est essentiel pour nous permettre de continuer à offrir des ateliers gratuits, d'organiser des événements culturels variés et de maintenir nos espaces ouverts à la communauté. Chaque contribution, petite ou grande, fait une réelle différence dans la vie de nos membres.
        </p>

        {/* Section Don Financier */}
        <div className="border-t pt-4">
          <h2 className="text-2xl font-bold text-indigo-700 mb-3">Faire un Don</h2>
          <p className="text-gray-600 mb-4">
            Vous pouvez effectuer un don sécurisé en ligne via notre plateforme partenaire (par exemple, HelloAsso).
          </p>
          
          {/* Utilisation du CTA pour le lien externe */}
          <CTA
            text="Faire un Don Sécurisé"
            // REMPLACER par votre véritable lien de don
            to="https://www.helloasso.com/votre-association" 
            isExternal={true} // Lien externe
            color="bg-pink-600 text-white"
          />
        </div>

        {/* Section Bénévolat */}
        <div className="border-t pt-4">
          <h2 className="text-2xl font-bold text-indigo-700 mb-3">Devenir Bénévole</h2>
          <p className="text-gray-600">
            Si vous préférez donner de votre temps, nous recherchons toujours des bénévoles pour aider à l'organisation des ateliers et des événements. Contactez-nous pour en savoir plus sur les opportunités.
          </p>
          
          {/* Lien vers la page contact */}
          <CTA
            text="Nous Contacter pour le Bénévolat"
            to="/contact" 
            isExternal={false} // Lien interne
            color="bg-teal-500 text-white"
          />
        </div>
        
      </div>

    </div>
  );
};

export default Soutenir;