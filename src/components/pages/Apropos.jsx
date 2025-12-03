import React from "react";

export default function Apropos() {
  return (
    <main className="max-w-6xl mx-auto px-4 py-12">

      {/* HERO — Qui sommes-nous */}
      <section
        className="relative bg-cover bg-center rounded-2xl shadow-lg overflow-hidden p-10 mb-12 hover:shadow-9xl hover:scale-105 transition-transform duration-100"
        style={{ backgroundImage: "url('/images/theatre-verdure.jpg')" }}
      >
        {/* Overlay sombre semi-transparent */}
        <div className="absolute inset-0 bg-black/40 rounded-2xl"></div>

        {/* Contenu texte */}
        <div className="relative z-10 max-w-3xl text-white space-y-6">
          <h1 className="text-4xl md:text-5xl font-extrabold leading-tight">
            Qui sommes-nous — Tadukli Aït Aissa
          </h1>
          <p className="text-lg md:text-xl leading-relaxed">
            Tadukli Aït Aissa est une association culturelle et de volontariat basée à Aokas (Aït Aissa),
            Wilayah de Béjaïa. Nous avons pour objectif de promouvoir la culture locale, de soutenir la
            jeunesse et de préserver notre patrimoine à travers des activités artistiques, sociales et
            environnementales.
          </p>

          <div className="flex flex-wrap gap-4 mt-4">
            <a
              href="/evenements"
              className="px-6 py-3 rounded-lg bg-yellow-600 text-white font-semibold shadow hover:bg-yellow-500 transition"
            >
              Voir nos événements
            </a>
            <a
              href="/adhesion"
              className="px-6 py-3 rounded-lg border border-white/60 text-white font-semibold hover:bg-white/20 transition"
            >
              Devenir membre
            </a>
          </div>
        </div>

        {/* Collage de 3 photos supplémentaires */}
        <div className="absolute top-10 right-10 hidden md:flex flex-col gap-4">
          <div
            className="w-36 h-24 rounded-lg shadow-lg bg-cover bg-center hover:shadow-9xl hover:scale-105 transition-transform duration-100"
            style={{ backgroundImage: "url('/images/theatre-verdure.jpg')" }}
          />
          <div
            className="w-36 h-24 rounded-lg shadow-lg bg-cover bg-center hover:shadow-2xl hover:scale-105 transition-transform duration-300"
            style={{ backgroundImage: "url('/images/theatre-verdure-1.jpg')" }}
          />
          <div
            className="w-36 h-24 rounded-lg shadow-lg bg-cover bg-center hover:shadow-2xl hover:scale-105 transition-transform duration-300"
            style={{ backgroundImage: "url('/images/theatre-verdure-2.jpg')" }}
          />
        </div>
      </section>

      {/* Mission & Valeurs */}
      <section className="bg-white rounded-2xl shadow-md p-8 mb-8 hover:shadow-9xl hover:scale-105 transition-transform duration-100">
        <h2 className="text-2xl font-bold mb-4">Notre mission & nos valeurs</h2>
        <ul className="space-y-3 text-gray-700">
          <li>• Promouvoir et préserver la culture et le patrimoine local.</li>
          <li>• Encourager l’expression artistique et l’engagement des jeunes.</li>
          <li>• Favoriser la solidarité, le bénévolat et les actions communautaires.</li>
          <li>• Agir pour l’environnement et le cadre de vie local.</li>
        </ul>
      </section>

      {/* Actions & Réalisations */}
      <section className="bg-white rounded-2xl shadow-md p-8 mb-8 hover:shadow-9xl hover:scale-105 transition-transform duration-100">
        <h2 className="text-2xl font-bold mb-4">Nos actions & réalisations</h2>
        <div className="grid md:grid-cols-3 gap-6 text-gray-700">
          <div className="p-4 border rounded-lg hover:shadow-9xl hover:scale-105 transition-transform duration-100">
            <h3 className="font-semibold mb-2">Spectacles & ateliers</h3>
            <p className="text-sm">Organisation de spectacles, pièces de théâtre, ateliers artistiques et formations.</p>
          </div>

          <div className="p-4 border rounded-lg hover:shadow-9xl hover:scale-105 transition-transform duration-100">
            <h3 className="font-semibold mb-2">Projets communautaires</h3>
            <p className="text-sm">Journées citoyennes, reboisement, nettoyage et amélioration des espaces publics.</p>
          </div>

          <div className="p-4 border rounded-lg hover:shadow-9xl hover:scale-105 transition-transform duration-100">
            <h3 className="font-semibold mb-2">Espace culturel</h3>
            <p className="text-sm">Création et animation d’un théâtre de plein air et d'espaces d'exposition.</p>
          </div>
        </div>
      </section>

      {/* Équipe */}
      <section className="bg-white rounded-2xl shadow-md p-8 mb-8 hover:shadow-9xl hover:scale-105 transition-transform duration-100">
        <h2 className="text-2xl font-bold mb-4">L'équipe</h2>
        <p className="text-gray-700 mb-6">
          Nous sommes une équipe de bénévoles passionnés — artistes, parents, jeunes et habitants locaux — qui consacrent leur temps à faire vivre la culture locale.
        </p>
        <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-6 ">
          <div className="p-4 border rounded-lg text-center hover:shadow-9xl hover:scale-105 transition-transform duration-100">
            <div className="w-24 h-24 bg-gray-100 rounded-full mx-auto mb-3 flex items-center justify-center text-gray-400">
              Photo
            </div>
            <div className="font-semibold">Nom Prénom</div>
            <div className="text-sm text-gray-500">Président / Coordinateur</div>
          </div>

          <div className="p-4 border rounded-lg text-center hover:shadow-9xl hover:scale-105 transition-transform duration-100">
            <div className="w-24 h-24 bg-gray-100 rounded-full mx-auto mb-3 flex items-center justify-center text-gray-400">
              Photo
            </div>
            <div className="font-semibold">Nom Prénom</div>
            <div className="text-sm text-gray-500">Trésorier / Logistique</div>
          </div>

          <div className="p-4 border rounded-lg text-center hover:shadow-9xl hover:scale-105 transition-transform duration-100">
            <div className="w-24 h-24 bg-gray-100 rounded-full mx-auto mb-3 flex items-center justify-center text-gray-400">
              Photo
            </div>
            <div className="font-semibold">Nom Prénom</div>
            <div className="text-sm text-gray-500">Chargé des événements</div>
          </div>
        </div>
      </section>

      {/* Rejoignez-nous / Soutenir */}
      <section className="bg-gradient-to-r from-yellow-50 to-white rounded-2xl p-8 shadow-md mb-8 hover:shadow-9xl hover:scale-105 transition-transform duration-100">
        <h2 className="text-2xl font-bold mb-4">Rejoignez-nous</h2>
        <p className="text-gray-700 mb-6">
          Que vous souhaitiez devenir membre, soutenir financièrement ou simplement participer à une activité, votre présence compte.
        </p>

        <div className="flex flex-wrap gap-4">
          <a href="/adhesion" className="inline-block px-6 py-3 rounded-lg border border-gray-200 hover:bg-gray-50 transition">
            Devenir membre
          </a>
          <a href="/soutenir" className="inline-block px-6 py-3 rounded-lg bg-yellow-600 text-white font-semibold hover:bg-yellow-500 transition">
            Soutenir
          </a>
          <a href="/contact" className="inline-block px-6 py-3 rounded-lg border border-gray-200 hover:bg-gray-50 transition">
            Nous contacter
          </a>
        </div>
      </section>

    

    </main>
  );
}
