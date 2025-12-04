import React, { useState } from "react";
import * as XLSX from "xlsx";

const Bibliotheque = () => {
  const [books, setBooks] = useState([]);

  const handleFileUpload = (e) => {
    const file = e.target.files[0];
    if (!file) return;

    const reader = new FileReader();

    reader.onload = (evt) => {
      const data = new Uint8Array(evt.target.result);
      const workbook = XLSX.read(data, { type: "array" });
      const sheetName = workbook.SheetNames[0];
      const sheet = workbook.Sheets[sheetName];
      const jsonData = XLSX.utils.sheet_to_json(sheet);

      setBooks(jsonData);
    };

    reader.readAsArrayBuffer(file);
  };

  return (
    <div className="max-w-5xl mx-auto p-6">

      {/* TITLE */}
      <h1 className="text-4xl font-bold text-blue-800 mb-6">
        📚 Bibliothèque Tadukli
      </h1>

      {/* INTRO */}
      <div className="bg-yellow-100 p-5 rounded-xl shadow-md border-l-4 border-yellow-600 mb-8">
        <p className="text-gray-800 text-lg leading-relaxed">
          La bibliothèque de l’association <span className="font-semibold">Tadukli</span> 
          est un espace culturel ouvert à tous.  
          Ici, on partage, on découvre, on apprend, on transmet.  
        </p>
        <p className="mt-3 text-gray-900 font-medium">
          📖 “Un livre est un compagnon qui éclaire tes pas.”
        </p>
        <p className="mt-3 text-gray-700">
          Nous invitons chaque membre, chaque jeune, chaque visiteur à venir lire, 
          explorer, et enrichir son esprit.  
          Parce qu’un peuple qui lit est un peuple qui avance.
        </p>
      </div>

      {/* ADHESION À LA BIBLIOTHÈQUE */}
      <div className="bg-green-100 p-5 rounded-xl shadow-md border-l-4 border-green-600 mb-10">
        <h2 className="text-2xl font-semibold text-green-700 mb-2">
          📗 Adhésion à la Bibliothèque
        </h2>
        <p>
          L’adhésion à la bibliothèque est incluse automatiquement dans 
          l’adhésion à l’association.  
          Elle permet d’emprunter des livres, participer à des cercles 
          de lecture, et accéder aux nouveautés.
        </p>
        <a
          href="/adhesion"
          className="inline-block mt-4 bg-green-600 text-white px-4 py-2 rounded-lg 
            hover:bg-green-700 transition duration-300"
        >
          ➤ Je deviens membre
        </a>
      </div>

      {/* UPLOAD EXCEL */}
      <div className="mb-6">
        <label className="block font-semibold text-lg mb-2">
          🔼 Importer la liste des livres (Excel)
        </label>
        <input
          type="file"
          accept=".xlsx, .xls"
          onChange={handleFileUpload}
          className="block border p-2 rounded-md cursor-pointer hover:border-blue-600"
        />
      </div>

      {/* TABLE */}
      {books.length > 0 && (
        <div className="overflow-x-auto">
          <table className="w-full border-collapse shadow-lg">
            <thead>
              <tr className="bg-blue-800 text-white">
                {Object.keys(books[0]).map((header) => (
                  <th key={header} className="p-3 border">
                    {header}
                  </th>
                ))}
              </tr>
            </thead>
            <tbody>
              {books.map((row, index) => (
                <tr key={index} className="hover:bg-blue-50 transition">
                  {Object.values(row).map((value, i) => (
                    <td key={i} className="p-3 border">
                      {value}
                    </td>
                  ))}
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      )}
    </div>
  );
};

export default Bibliotheque;
