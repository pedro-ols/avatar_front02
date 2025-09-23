import styles from "./header.module.css";
import Link from "next/link"

export default function Header() {
  return (
    <header className={styles.header}>
        <h1 className={styles.title}>🔥🌊Avatar - API front-End🌱💨</h1>

        <nav className={styles.navBar}>
            <div className={styles.navItem}>
                <Link href="/get" className={styles.navLink}>
                    Personagens
                </Link>
            </div>
            <div className={styles.navItem}>
                <Link href="/getById" className={styles.navLink}>
                    Buscar Personagens por Id
                </Link>
            </div>
            <div  className={styles.navItem}>
                <Link href="/create" className={styles.navLink}>
                    Criar Personagem
                </Link>
            </div>
            <div className={styles.navItem}>
                <Link href="/api" className={styles.navLink}>
                    API
                </Link>
            </div>
        </nav>
    </header>
  );
}
