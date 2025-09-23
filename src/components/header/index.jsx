import styles from "./header.module.css";

export default function Header() {
  return (
    <header className={styles.header}>
        <h1 className={styles.title}>🔥🌊Avatar - API front-End🌱💨</h1>

        <nav>
            <div className={styles.navItem}></div>
        </nav>
    </header>
  );
}
