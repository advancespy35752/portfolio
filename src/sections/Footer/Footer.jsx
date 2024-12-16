import styles from './FooterStyles.module.css';

function Footer() {
  return (
    <section id="footer" className={styles.container}>
      <p>
        &copy; 2024 Anish Agarwal <br />
        All rights reserved.
      </p>
    </section>
  );
}

export default Footer;
