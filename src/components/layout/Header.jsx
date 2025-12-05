import { Link } from 'react-router-dom';

const Header = () => {
  return (
    // bg-blue-800: fond bleu foncé | text-white: texte blanc | p-4: padding | shadow-lg: ombre
    <header className="bg-blue-800 text-white p-4 shadow-lg">
      <nav className="flex justify-between items-center max-w-6xl mx-auto">
        
        {/* Logo/Nom de l'Association */}
        <Link
        to="/"
        className="text-2xl font-bold hover:text-yellow-300 transition duration-300"
        >
          <span className="block">ⵜⴰⴷⵓⴽⵍⵉ ⴰⵜ ⵄⵉⵙⵙⴰ </span>
          <span className="block text-xl opacity-90">
              Association "Tadukli" Ait Aissa-Aokas
          </span>
        </Link>


        <div className="space-x-4">
  <Link
    to="/apropos"
    className="relative inline-block hover:text-yellow-300 transition-all duration-300 hover:-translate-y-1 hover:scale-105
    after:content-[''] after:absolute after:left-0 after:-bottom-1 after:h-[2px] after:w-0 after:bg-yellow-300 after:transition-all after:duration-300 hover:after:w-full"
  >
    Qui sommes-nous
  </Link>

  <Link
    to="/ateliers"
    className="relative inline-block hover:text-yellow-300 transition-all duration-300 hover:-translate-y-1 hover:scale-105
    after:content-[''] after:absolute after:left-0 after:-bottom-1 after:h-[2px] after:w-0 after:bg-yellow-300 after:transition-all after:duration-300 hover:after:w-full"
  >
    Ateliers
  </Link>

  <Link
    to="/evenements"
    className="relative inline-block hover:text-yellow-300 transition-all duration-300 hover:-translate-y-1 hover:scale-105
    after:content-[''] after:absolute after:left-0 after:-bottom-1 after:h-[2px] after:w-0 after:bg-yellow-300 after:transition-all after:duration-300 hover:after:w-full"
  >
    Événements
  </Link>

  <Link
    to="/galerie"
    className="relative inline-block hover:text-yellow-300 transition-all duration-300 hover:-translate-y-1 hover:scale-105
    after:content-[''] after:absolute after:left-0 after:-bottom-1 after:h-[2px] after:w-0 after:bg-yellow-300 after:transition-all after:duration-300 hover:after:w-full"
  >
    Galerie
  </Link>

  <Link
    to="/adhesion"
    className="relative inline-block hover:text-yellow-300 transition-all duration-300 hover:-translate-y-1 hover:scale-105
    after:content-[''] after:absolute after:left-0 after:-bottom-1 after:h-[2px] after:w-0 after:bg-yellow-300 after:transition-all after:duration-300 hover:after:w-full"
  >
    Devenir membre
  </Link>

  <Link
    to="/bibliothèque"
    className="relative inline-block hover:text-yellow-300 transition-all duration-300 hover:-translate-y-1 hover:scale-105
    after:content-[''] after:absolute after:left-0 after:-bottom-1 after:h-[2px] after:w-0 after:bg-yellow-300 after:transition-all after:duration-300 hover:after:w-full"
  >
    Bibliothèque
  </Link>

  <Link
    to="/soutenir"
    className="font-semibold bg-yellow-600 px-3 py-1 rounded text-white
    transition-all duration-300 hover:bg-yellow-500 hover:shadow-lg hover:-translate-y-1 hover:scale-105"
  >
    Soutenir
  </Link>

  <Link
    to="/contact"
    className="relative inline-block hover:text-yellow-300 transition-all duration-300 hover:-translate-y-1 hover:scale-105
    after:content-[''] after:absolute after:left-0 after:-bottom-1 after:h-[2px] after:w-0 after:bg-yellow-300 after:transition-all after:duration-300 hover:after:w-full"
  >
    Contact
  </Link>
</div>

      </nav>
    </header>
  );
};

export default Header;