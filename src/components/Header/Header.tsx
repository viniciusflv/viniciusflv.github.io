import { Svg } from '@svjson/react';

import styles from './Header.module.css';

import { glasses } from '../../assets/svg';

export const Header = () => {
  return (
    <header className={styles.header}>
      <nav className={styles.nav}>
        <a href="/">
          <Svg
            className="
            cursor-pointer
            active:text-inherit
            hover:text-dark-purple
            transition-colors
            delay-75
            ease-in-out
            "
            alt=""
            src={glasses}
            height="30px"
          />
        </a>
        <a href="/">Home</a>
        <a href="/blog">Blog</a>
        <a href="/about">About</a>
      </nav>
    </header>
  );
};
