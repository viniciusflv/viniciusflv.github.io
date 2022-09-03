import styles from './Card.module.css';

export const Card = ({ title, description, url }: any) => {
  return title ? (
    <a title={title} href={url}>
      <section className={styles.card}>
        <header>
          <h2>{title}</h2>
          <p>{description}</p>
        </header>
      </section>
    </a>
  ) : null;
};
