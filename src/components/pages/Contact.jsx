// src/pages/Contact.jsx
import React from 'react';
// Importation du CTA pour le bouton de don
// Le chemin remonte d'un niveau (pages) puis descend dans components/shared/
import CTA from '../shared/CTA.jsx'; 

const Contact = () => {
  // Informations de contact fictives
  const association = {
    email: 'tadukliaitaissaaokas@gmail.com',
    telephone: '',
    adresse: 'Buteghwa/Ait Aissa/Aokas/Bejaia, Algérie',
  };

  return (
    <div className="container mx-auto p-8 max-w-3xl">
      <h1 className="text-4xl font-extrabold text-green-700 mb-6 text-center">
        Contactez-Nous
      </h1>
      
      <div className="bg-white p-6 rounded-xl shadow-2xl space-y-6">
        
        <p className="text-lg text-gray-700 leading-relaxed text-center">
          Nous sommes à votre disposition pour répondre à toutes vos questions concernant les ateliers, les événements, ou le bénévolat.
        </p>

        {/* Bloc d'informations */}
        <div className="space-y-4">
          
          <div className="flex items-center space-x-3 p-3 bg-gray-50 rounded-lg">
            <span className="text-xl text-green-600">📧</span>
            <div>
              <p className="font-semibold text-gray-800">Email</p>
              <p className="text-blue-500 hover:underline">{association.email}</p>
            </div>
          </div>

          <div className="flex items-center space-x-3 p-3 bg-gray-50 rounded-lg">
            <span className="text-xl text-green-600">📞</span>
            <div>
              <p className="font-semibold text-gray-800">Téléphone</p>
              <p className="text-gray-600">{association.telephone}</p>
            </div>
          </div>

          <div className="flex items-center space-x-3 p-3 bg-gray-50 rounded-lg">
            <span className="text-xl text-green-600">📍</span>
            <div>
              <p className="font-semibold text-gray-800">Adresse</p>
              <p className="text-gray-600">{association.adresse}</p>
            </div>
          </div>
          
        </div>

        {/* Bouton d'action pour envoyer un email */}
        <div className="pt-6 text-center">
          <CTA
            text="Envoyer un Email"
            to={`mailto:${association.email}`} 
            isExternal={true} // Lien externe pour l'email
            color="bg-green-500 text-white"
          />
        </div>
        
      </div>
    </div>
  );
};

export default Contact;