import React from "react";

export default function Adhesion() {
  return (
    <main className="max-w-6xl mx-auto px-4 py-12 space-y-12">

      {/* Hero lumineux */}
      <section className="relative bg-yellow-50 rounded-2xl shadow-lg p-10">
        <div className="text-center space-y-4">
          <h1 className="text-4xl md:text-5xl font-bold text-blue-800">
            Rejoignez Tadukli Aït Aissa
          </h1>
          <p className="text-gray-700 text-lg md:text-xl">
            Participez à nos activités culturelles, ateliers, et soutenez notre bibliothèque.
          </p>
        </div>
      </section>

      {/* Types d'adhésion */}
      <section className="grid md:grid-cols-3 gap-6">
        {/* Membre */}
        <div className="p-6 rounded-xl shadow-lg bg-green-50 hover:scale-105 hover:shadow-2xl transition transform cursor-pointer">
          <h2 className="text-xl font-bold text-green-800 mb-2">Membre</h2>
          <p className="text-gray-700 mb-4">Accès aux activités régulières, ateliers et bibliothèque.</p>
          <button className="bg-green-600 text-white px-4 py-2 rounded hover:bg-green-500 transition">Adhérer</button>
        </div>

        {/* Bienfaiteur */}
        <div className="p-6 rounded-xl shadow-lg bg-yellow-50 hover:scale-105 hover:shadow-2xl transition transform cursor-pointer">
          <h2 className="text-xl font-bold text-yellow-800 mb-2">Bienfaiteur</h2>
          <p className="text-gray-700 mb-4">Soutenez généreusement et bénéficiez d’avantages exclusifs.</p>
          <button className="bg-yellow-600 text-white px-4 py-2 rounded hover:bg-yellow-500 transition">Devenir bienfaiteur</button>
        </div>

        {/* Partenaire */}
        <div className="p-6 rounded-xl shadow-lg bg-blue-50 hover:scale-105 hover:shadow-2xl transition transform cursor-pointer">
          <h2 className="text-xl font-bold text-blue-800 mb-2">Partenaire</h2>
          <p className="text-gray-700 mb-4">Visibilité pour entreprises ou institutions sur nos événements.</p>
          <button className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-500 transition">Devenir partenaire</button>
        </div>
      </section>

      {/* Bibliothèque intégrée */}
      <section className="bg-red-50 rounded-2xl shadow-md p-8 flex flex-col md:flex-row items-center gap-6">
        <div className="md:w-1/2">
          <h2 className="text-2xl font-bold text-red-800 mb-4">Bibliothèque</h2>
          <p className="text-gray-700 mb-4">
            Découvrez notre bibliothèque kabyle riche en ouvrages culturels, historiques et éducatifs. 
            En devenant membre, vous pourrez lire, explorer et participer à des ateliers de lecture, 
            pour mieux connaître notre patrimoine et partager la passion de la culture avec la communauté.
          </p>
          <a href="/bibliotheque" className="inline-block bg-red-600 text-white px-4 py-2 rounded hover:bg-red-500 transition">
            Voir la bibliothèque
          </a>
        </div>
        <div className="md:w-1/2">
          <img
            src="/images/bibliotheque.jpg"
            alt="Bibliothèque Tadukli"
            className="w-full h-64 object-cover rounded-lg shadow-lg"
          />
        </div>
      </section>

    </main>
  );
}
