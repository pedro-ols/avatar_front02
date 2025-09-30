import styles from './page.module.css';
import Image from 'next/image';

export default function Home() {
  return (
    <div className={styles.container}>
      <section className={styles.hero}>
        <div className={styles.heroContent}>
          <div className={styles.avatarContainer}>
            <Image
              src="/donodosite.png" 
              alt="Foto do aluno"
              width={150}
              height={150}
              className={styles.avatar}
              priority
            />
          </div>

          <h1 className={styles.heroTitle}>Pedro de Oliveira Santos</h1>
          <div className={styles.infoCard}>
            <div className={styles.infoItem}>
              <span className={styles.infoLabel}>🏫 Escola:</span>
              <span className={styles.infoValue}>SENAI Valinhos</span>
            </div>
            <div className={styles.infoItem}>
              <span className={styles.infoLabel}>📚 Turma:</span>
              <span className={styles.infoValue}>2tds2</span>
            </div>
          </div>

          <blockquote className={styles.quote}>
            <p className={styles.quoteText}>
              "A vida é como andar de bicicleta. Para manter o equilíbrio, você deve continuar se movendo."
            </p>
            <cite className={styles.quoteAuthor}>- Albert Einstein</cite>
          </blockquote>
        </div>
      </section>
    </div>
  );
}