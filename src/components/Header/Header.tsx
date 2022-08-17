import styles from './Header.module.css';

export const Header = () => {
  return (
    <header className={styles.header}>
      <nav className={styles.nav}>
        <a href="/">Home</a>
        <a href="/blog">Blog</a>
      </nav>
    </header>
  );
};
