import { Svg } from '@svjson/react';

import styles from './Hero.module.css';

import { meRicknmorty } from '../../assets/svg';

export const Hero = ({ children, clip }: any) => {
  return (
    <div className={styles.hero}>
      <Svg
        className="absolute"
        alt="clip"
        src={clip}
        clipPathId="hero-clip-path"
      />
      <div className={styles.content}>
        <header className={styles.header}>{children}</header>
        <Svg
          className="relative lg:mb-[-50vh]"
          alt="Me as a Rick and Morty Character"
          src={meRicknmorty}
        />
      </div>
    </div>
  );
};
