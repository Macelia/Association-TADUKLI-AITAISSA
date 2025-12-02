import React from "react";


export default function Apropos() {
  return (
    <main className="max-w-5xl mx-auto px-4 py-10">
      {/* Hero */}
      <section 
  className="relative bg-cover bg-center rounded-2xl shadow-md p-8 mb-8 before:absolute before:inset-0 before:bg-black/40 before:rounded-2xl" 
  style={{ backgroundImage: `url(/images/theatre-verdure.jpg)` }}
>
        <div className="md:flex md:items-center md:gap-8">
          <div className="flex-1">
            <h1 className="text-3xl md:text-4xl font-extrabold mb-3">Qui sommes‑nous — Tadukli Aït Aissa</h1>
            <p className="text-gray-700 leading-relaxed">
              Tadukli Aït Aissa est une association culturelle et de volontariat basée à Aokas (Aït Aissa),
              Wilayah de Béjaïa. Nous avons pour objectif de promouvoir la culture locale, de soutenir la
              jeunesse et de préserver notre patrimoine à travers des activités artistiques, sociales et
              environnementales.
            </p>
            <div className="mt-6 flex flex-wrap gap-3">
              <a
                href="/evenements"
                className="inline-block px-4 py-2 rounded-lg bg-yellow-600 text-white font-semibold hover:bg-yellow-500"
              >
                Voir nos événements
              </a>
              <a href="/adhesion" className="inline-block px-4 py-2 rounded-lg border border-gray-200 hover:bg-gray-50">
                Devenir membre
              </a>
            </div>
          </div>

          <div className="mt-6 md:mt-0 md:w-48 md:flex-shrink-0">
            {/* Placeholder image - remplace par un <img src={...} alt="..." /> réel */}
            <div className="w-48 h-32 bg-gray-100 rounded-lg flex items-center justify-center text-gray-400">
              Logo / Photo
            </div>
          </div>
        </div>
      </section>

      {/* Mission & Valeurs */}
      <section className="bg-white rounded-2xl shadow-md p-8 mb-8">
        <h2 className="text-2xl font-bold mb-4">Notre mission & nos valeurs</h2>
        <ul className="space-y-3 text-gray-700">
          <li>• Promouvoir et préserver la culture et le patrimoine local.</li>
          <li>• Encourager l’expression artistique et l’engagement des jeunes.</li>
          <li>• Favoriser la solidarité, le bénévolat et les actions communautaires.</li>
          <li>• Agir pour l’environnement et le cadre de vie local.</li>
        </ul>
      </section>

      {/* Actions & Réalisations */}
      <section className="bg-white rounded-2xl shadow-md p-8 mb-8">
        <h2 className="text-2xl font-bold mb-4">Nos actions & réalisations</h2>
        <div className="grid md:grid-cols-3 gap-6 text-gray-700">
          <div className="p-4 border rounded-lg">
            <h3 className="font-semibold mb-2">Spectacles & ateliers</h3>
            <p className="text-sm">Organisation de spectacles, pièces de théâtre, ateliers artistiques et formations.</p>
          </div>

          <div className="p-4 border rounded-lg">
            <h3 className="font-semibold mb-2">Projets communautaires</h3>
            <p className="text-sm">Journées citoyennes, reboisement, nettoyage et amélioration des espaces publics.</p>
          </div>

          <div className="p-4 border rounded-lg">
            <h3 className="font-semibold mb-2">Espace culturel</h3>
            <p className="text-sm">Création et animation d’un théâtre de plein air et d’espaces d’exposition.</p>
          </div>
        </div>
      </section>

      {/* Équipe */}
      <section className="bg-white rounded-2xl shadow-md p-8 mb-8">
        <h2 className="text-2xl font-bold mb-4">L'équipe</h2>
        <p className="text-gray-700 mb-4">Nous sommes une équipe de bénévoles passionnés — artistes, parents, jeunes et habitants locaux — qui consacrent leur temps à faire vivre la culture locale.</p>

        <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-4">
          {/* Exemples de cartes équipe - remplacer par données réelles */}
          <div className="p-4 border rounded-lg text-center">
            <div className="w-20 h-20 bg-gray-100 rounded-full mx-auto mb-3 flex items-center justify-center text-gray-400">Photo</div>
            <div className="font-semibold">Nom Prénom</div>
            <div className="text-sm text-gray-500">Président / Coordinateur</div>
          </div>

          <div className="p-4 border rounded-lg text-center">
            <div className="w-20 h-20 bg-gray-100 rounded-full mx-auto mb-3 flex items-center justify-center text-gray-400">Photo</div>
            <div className="font-semibold">Nom Prénom</div>
            <div className="text-sm text-gray-500">Trésorier / Logistique</div>
          </div>

          <div className="p-4 border rounded-lg text-center">
            <div className="w-20 h-20 bg-gray-100 rounded-full mx-auto mb-3 flex items-center justify-center text-gray-400">Photo</div>
            <div className="font-semibold">Nom Prénom</div>
            <div className="text-sm text-gray-500">Chargé des événements</div>
          </div>
        </div>
      </section>

      {/* Rejoindre & Soutenir */}
      <section className="bg-gradient-to-r from-yellow-50 to-white rounded-2xl p-8 shadow-md">
        <h2 className="text-2xl font-bold mb-4">Rejoignez-nous</h2>
        <p className="text-gray-700 mb-4">Que vous souhaitiez devenir membre, soutenir financièrement ou simplement participer à une activité, votre présence compte.</p>

        <div className="flex flex-wrap gap-3">
          <a href="/adhesion" className="inline-block px-4 py-2 rounded-lg border border-gray-200 hover:bg-gray-50">Devenir membre</a>
          <a href="/soutenir" className="inline-block px-4 py-2 rounded-lg bg-yellow-600 text-white font-semibold hover:bg-yellow-500">Soutenir</a>
          <a href="/contact" className="inline-block px-4 py-2 rounded-lg border border-gray-200 hover:bg-gray-50">Nous contacter</a>
        </div>
      </section>

      <footer className="text-center text-sm text-gray-500 mt-8">© {new Date().getFullYear()} Tadukli Aït Aissa — Tous droits réservés</footer>
    </main>
  );
}
