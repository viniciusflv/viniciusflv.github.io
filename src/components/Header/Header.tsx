import { Svg } from '@svjson/react';

import styles from './Header.module.css';

import { github, glasses, linkedin } from '../../assets/svg';

export const Header = ({ lang }: any) => {
  return (
    <header className={styles.header}>
      <nav className={styles.nav}>
        <a className={styles.link} href="/">
          <Svg alt="logo" src={glasses} width="75px" height="30px" />
        </a>
        <div className={styles.internal}>
          <a className={styles.link} href={`/${lang}`}>
            Home
          </a>
          <a className={styles.link} href={`/${lang}/posts`}>
            Blog
          </a>
          <a className={styles.link} href={`/${lang}/about`}>
            About
          </a>
        </div>
        <div className={styles.external}>
          <button title={lang}>{lang?.toUpperCase()}</button>
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
