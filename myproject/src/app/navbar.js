// Navbar.js
import Link from 'next/link';
import styles from './page.module.css';

const Navbar = () => {
  return (
    <nav className={styles.navbar}>
      <ul className={styles.navList}>
        <li className={styles.navItem}>
          <Link href="/">
            Home
          </Link>
        </li>
        <li className={styles.navItem}>
          <Link href="/about">
            About Us
          </Link>
        </li>
        <li className={styles.navItem}>
          <Link href="/services">
            Services
          </Link>
        </li>
        <li className={styles.navItem}>
          <Link href="/contact">
            Contact
          </Link>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
