import styles from './Avatar.module.css';

export const Avatar = () => {
  return (
    <figure className="max-w-32 md:max-w-64">
      <img
        alt=""
        className={styles.avatar}
        src="https://avatars.githubusercontent.com/u/31109854"
      />
    </figure>
  );
};
