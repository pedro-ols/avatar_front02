"use client";

import { useState, useEffect } from "react";
import { Card, Spin, Pagination } from "antd";
import axios from "axios";

import Image from "next/image";

export default function Home() {
  const [characters, setCharacters] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [loading, setLoading] = useState(false);
  const [pageSize, setPageSize] = useState(5);

  const fetchCharacters = async () => {
    setLoading(true);
    try {
      const url =
       ` https://last-airbender-api.fly.dev/api/v1/characters?perPage=500`;
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

  useEffect(() => {
    fetchCharacters();
}, [currentPage]);


  // Calcula quais usuários mostrar na página atual
  const startIndex = (currentPage - 1) * pageSize;
  const endIndex = startIndex + pageSize;
  const currentCharacters = characters.slice(startIndex, endIndex);

  // Função para mudar de página
  const handlePageChange = (page) => {
    setCurrentPage(page);
  };

  // Função para mudar quantidade de itens por página
  const handlePageSizeChange = (current, size) => {
    setPageSize(size);
    setCurrentPage(1);
  };

  return (
    <div className="min-h-screen bg-blue-100">
      <div className="max-w-4xl mx-auto">
        <h1 className="text-center font-bold mb-8">pedroteupai</h1>
        <Pagination
          total={characters.length}
          showTotal={(total) => `Total ${total} personagens`}
          pageSize={pageSize}
          current={currentPage}
          showSizeChanger={true}
          pageSizeOptions={["5", "20", "50", "100", "200", "500"]}
          onChange={handlePageChange}
          onShowSizeChange={handlePageSizeChange}
        />
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
            for(let i=0; i<currentCharacters.length; i++){
              return (
                <div key={character._id} className="mb-8">
                  <div>
                    <Image
                      src={
                        character.photoUrl
                          ? character.photoUrl
                          : "data:image/png;base64,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"
                      }
                      width={500}
                      height={300}
                    />
                  </div>
                  <h2 className="text-xl font-semibold mb-2">{character.name}</h2>
                  <h3 className="text-l font-semibold mb-2">
                    {character.affiliation}
                  </h3>
                </div>
              );
            }
            
          })}
        </div>
      </div>
    </div>
  );
}
