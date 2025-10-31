import React from 'react';
import { Link } from 'react-router-dom';

const CTA = ({ text, to, isExternal = false, color = 'bg-yellow-500' }) => {
  const baseClasses = `font-bold py-3 px-6 rounded-full text-lg shadow-lg 
                       hover:shadow-xl transition duration-300 transform 
                       hover:scale-105 text-white inline-block`;

  // Si le lien est un email, on ouvre directement le client mail
  if (to.startsWith('mailto:')) {
    return (
      <a
        href={to}
        className={`${baseClasses} ${color}`}
      >
        {text}
      </a>
    );
  }

  // Lien externe classique
  if (isExternal) {
    return (
      <a
        href={to}
        target="_blank"
        rel="noopener noreferrer"
        className={`${baseClasses} ${color}`}
      >
        {text}
      </a>
    );
  }

  // Lien interne React Router
  return (
    <Link
      to={to}
      className={`${baseClasses} ${color}`}
    >
      {text}
    </Link>
  );
};

export default CTA;
