"use client";

import styles from "./characters.module.css";

import { useState, useEffect } from "react";
import { Spin, Pagination } from "antd";
import axios from "axios";

import CharacterCard from "../../components/characterCard";

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
  
  const startIndex = (currentPage - 1) * pageSize;
  const endIndex = startIndex + pageSize;
  const currentCharacters = characters.slice(startIndex, endIndex);

  const handlePageChange = (page) => {
    setCurrentPage(page);
  };

  const handlePageSizeChange = (current, size) => {
    setPageSize(size);
    setCurrentPage(1);
  };

  return (
    <div className={styles.container}>
      
      <section className={styles.paginationSection}>
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
      </section>
      <section className={styles.buttonSection}>
        <button
          onClick={fetchCharacters}
          className={styles.button}
        >
          {loading ? "Carregando..." : "Buscar Personagens"}
        </button>
      </section>
      <section>
        <div className={styles.grid}>
          {currentCharacters.map((character) => (
            <CharacterCard key={character._id} character={character}/>
          ))}
        </div>
      </section>
    </div>
  );
}
