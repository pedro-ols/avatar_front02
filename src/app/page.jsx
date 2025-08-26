"use client";

import { useState } from "react";
import axios from "axios";

import Image from "next/image";  

export default function Home() {
  const [characters, setCharacters] = useState([]);
  const [loading, setLoading] = useState(false);
  
  const fetchCharacters = async () => {
    setLoading(true);
    try {
      const url = "https://last-airbender-api.fly.dev/api/v1/characters?perPage=NUMBER&page=NUMBER";
      const response = await axios.get(url);
      const data = response.data;
      setCharacters(data);
    } catch (error) {
      setLoading(false);
      console.error(
        "Falha ao buscar personagens, tente novamente mais tarde:",
        error
      );
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen bg-blue-100">
      <div className="max-w-4xl mx-auto">
        <h1 className="text-center font-bold mb-8">pedroteupai</h1>
        <div className="mb-6">
          <div>
            <button
              onClick={fetchCharacters}
              class="bg-blue-500text-white px-4 py-2 rounded hover:bg-blue-600 disable:opacity-50"
            >
              {loading ? "Carregando..." : "Buscar Personagens"}
            </button>
          </div>
        </div>
        <div>
          {characters.map((character) => {
            return (
              <div key={character._id} className="mb-8">
                <div>
                  <Image src={character.photoUrl} width={500} height={300}/>
                </div>
                <h2 className="text-xl font-semibold mb-2">{character.name}</h2>
                <h3 className="text-l font-semibold mb-2">
                  {character.affiliation}
                </h3>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}
