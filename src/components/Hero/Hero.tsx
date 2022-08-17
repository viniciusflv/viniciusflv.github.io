import { Svg } from '@svjson/react';

import styles from './Hero.module.css';

import { hero } from '../../assets/svg';
import { Avatar } from '../Avatar';

export const Hero = () => {
  return (
    <div className={styles.hero}>
      <Svg
        className="absolute"
        alt="clip"
        src={hero}
        clipPathId="hero-clip-path"
      />
      <div className="container mx-auto p-8">
        <div
          className="
            flex
            items-center
            gap-8
            bg-[color:#282a36]
            rounded-full
          "
        >
          <Avatar />
          <div>
            <h1 className="md:text-5xl text-4xl">Vinícius Victorino</h1>
          </div>
        </div>
      </div>
    </div>
  );
};
