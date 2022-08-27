import { Svg } from '@svjson/react';

import styles from './Hero.module.css';

import { glasses } from '../../assets/svg';

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
        <Svg alt="glasses" src={glasses} isCurrentColor />
      </div>
    </div>
  );
};
