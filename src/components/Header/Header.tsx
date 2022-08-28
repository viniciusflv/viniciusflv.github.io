import { Svg } from '@svjson/react';

import styles from './Header.module.css';

import { github, glasses, linkedin } from '../../assets/svg';

export const Header = () => {
  return (
    <header className={styles.header}>
      <nav className={styles.nav}>
        <a className={styles.link} href="/">
          <Svg alt="logo" src={glasses} width="75px" height="30px" />
        </a>
        <div className={styles.internal}>
          <a className={styles.link} href="/">
            Home
          </a>
          <a className={styles.link} href="/blog">
            Blog
          </a>
          <a className={styles.link} href="/about">
            About
          </a>
        </div>
        <div className={styles.external}>
          <a
            className={styles.link}
            target="__blank"
            href="https://github.com/viniciusflv/"
          >
            <Svg alt="github" src={github} width="30px" height="30px" />
          </a>
          <a
            className={styles.link}
            target="__blank"
            href="https://www.linkedin.com/in/viniciusflv/"
          >
            <Svg alt="linkedin" src={linkedin} width="30px" height="30px" />
          </a>
        </div>
      </nav>
    </header>
  );
};
