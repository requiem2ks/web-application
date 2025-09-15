import { FaGraduationCap } from 'react-icons/fa'; // Иконка "Шапка выпускника"
import { Link } from 'react-router-dom';

export default function Header() {
  return (
    <header style={styles.header}>
      <div style={styles.logoContainer}>
        <FaGraduationCap size={40} color="#fff" />
        <span style={styles.logoText}>Приёмная комиссия</span>
      </div>
      <nav>
        <ul style={styles.menu}>
          <li><Link to="/" style={styles.link}>Главная</Link></li>
          <li><Link to="/form" style={styles.link}>Работа №1</Link></li>
        </ul>
      </nav>
    </header>
  );
}

const styles = {
  header: {
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    padding: '1rem 2rem',
    backgroundColor: '#003366',
    color: 'white',
  },
  logoContainer: {
    display: 'flex',
    alignItems: 'center',
    gap: '0.5rem',
  },
  logoText: {
    fontSize: '1.5rem',
    fontWeight: 'bold',
  },
  menu: {
    listStyle: 'none',
    display: 'flex',
    gap: '1.5rem',
    margin: 0,
    padding: 0,
  },
  link: {
    color: 'white',
    textDecoration: 'none',
    fontWeight: 'bold',
  },
};