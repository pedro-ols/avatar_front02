import styles from './page.module.css';

export default function Home() {
  return (
    <div className={styles.container}>
      <header className={styles.header}>
        <nav className={styles.nav}>
          <div className={styles.logo}>
            <h2>Logo</h2>
          </div>
          <ul className={styles.navList}>
            <li><a href="#home" className={styles.navLink}>Home</a></li>
            <li><a href="#about" className={styles.navLink}>Sobre</a></li>
            <li><a href="#services" className={styles.navLink}>Serviços</a></li>
            <li><a href="#contact" className={styles.navLink}>Contato</a></li>
          </ul>
        </nav>
      </header>

      <section className={styles.hero}>
        <div className={styles.heroContent}>
          <h1 className={styles.heroTitle}>Bem-vindo ao nosso site</h1>
          <p className={styles.heroSubtitle}>
            Descubra soluções incríveis para o seu negócio
          </p>
          <button className={styles.heroButton}>Começar Agora</button>
        </div>
      </section>
    </div>
  );
}