import React, { useState } from 'react';

const Contact = () => {
  // ... (Informations de contact inchangées) ...

  return (
    <div className="container mx-auto p-8 max-w-4xl">
      {/* ... (Titre inchangé) ... */}
      
      <div className="bg-white p-6 rounded-xl shadow-2xl space-y-8">
        
        <section>
            <h2 className="text-2xl font-bold text-gray-800 mb-4 border-b pb-2">
                Envoyer un Message Direct
            </h2>
            {/* ATTENTION : Le FORMULAIRE EST MODIFIÉ POUR NETLIFY */}
            <form 
                name="contact" 
                method="POST" 
                data-netlify="true" 
                onSubmit={(e) => { 
                    // Pour le développement local, ceci peut rediriger ou alerter
                    e.preventDefault(); 
                    alert("Le formulaire est prêt pour l'envoi via Netlify !");
                    // En production, Netlify gère l'envoi réel.
                }} 
                className="space-y-4"
            >
                {/* Champ caché requis par Netlify pour son identification */}
                <input type="hidden" name="form-name" value="contact" />

                {/* Champ Nom (inchangé) */}
                <div>
                    <label htmlFor="name" className="block text-sm font-medium text-gray-700">Nom</label>
                    <input type="text" name="name" id="name" required className="mt-1 block w-full rounded-md border-gray-300 shadow-sm p-2 border focus:border-green-500 focus:ring-green-500" placeholder='Entrez votre Nom Complet Prenom/Nom' />
                </div>
                
                {/* Champ Email (inchangé) */}
                <div>
                    <label htmlFor="email" className="block text-sm font-medium text-gray-700">Email</label>
                    <input type="email" name="email" id="email" required className="mt-1 block w-full rounded-md border-gray-300 shadow-sm p-2 border focus:border-green-500 focus:ring-green-500" />
                </div>
                
                {/* Champ Message (inchangé) */}
                <div>
                    <label htmlFor="message" className="block text-sm font-medium text-gray-700">Message</label>
                    <textarea name="message" id="message" rows="4" required className="mt-1 block w-full rounded-md border-gray-300 shadow-sm p-2 border focus:border-green-500 focus:ring-green-500"></textarea>
                </div>
                
                {/* Bouton d'envoi (inchangé) */}
                <div className="pt-2">
                    <button type="submit" className="w-full bg-green-600 text-white font-bold py-3 px-6 rounded-md shadow-lg hover:bg-green-700 transition duration-300">
                        Envoyer le Message
                    </button>
                </div>
            </form>
        </section>

        {/* ... (SECTION 2: Autres Moyens de Contact inchangée) ... */}
        
      </div>
    </div>
  );
};

export default Contact;