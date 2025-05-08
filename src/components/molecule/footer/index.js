import React from 'react';
import styles from './index.module.css'; // Importing CSS Module for styling

const Footer = () => {
  return (
    <footer className={styles.footer}>
      <div className={styles.footerContent}>
        <div className={styles.links}>
          <a href="/about" className={styles.link}>About Us</a>
          <a href="/terms-and-conditions" className={styles.link} target="_blank" rel="noopener noreferrer">Terms & Conditions</a>
          <a href="/faq" className={styles.link}>FAQs</a>
          <a href="/contact" className={styles.link}>Contact Us</a>
        </div>
        <div className={styles.socialMedia}>
            <a href="https://facebook.com" target="_blank" rel="noopener noreferrer" className={styles.socialLink}>
                <i className="fab fa-facebook" />
                <span className={styles.username}>/mova_fb</span> {/* Dummy username */}
            </a>
            <a href="https://twitter.com" target="_blank" rel="noopener noreferrer" className={styles.socialLink}>
                <i className="fab fa-twitter" />
                <span className={styles.username}>/mova_x</span> {/* Dummy username */}
            </a>
                <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" className={styles.socialLink}>
                <i className="fab fa-instagram" />
            <span className={styles.username}>/mova_insta</span> {/* Dummy username */}
            </a>
        </div>
      </div>
      <div className={styles.footerBottom}>
        <p>&copy; {new Date().getFullYear()} Mova Car Rental. All Rights Reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;
