import { Svg } from '@svjson/react';

import styles from './Hero.module.css';

export const Hero = ({ children, clip }: any) => {
  return (
    <div className={styles.hero}>
      <Svg
        className="absolute"
        alt="clip"
        src={clip}
        clipPathId="hero-clip-path"
      />
      <div className="container flex flex-col mx-auto p-8 pb-32 gap-16">
        {children}
      </div>
    </div>
  );
};
