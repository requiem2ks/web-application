// src/components/Footer.jsx
export default function Footer() {
  return (
    <footer style={styles.footer}>
      <div style={styles.container}>
        <p style={styles.text}>
          © {new Date().getFullYear()} Приёмная комиссия РГРТУ. Все права защищены.
        </p>
        <p style={styles.textSmall}>
          Сайт разработан для учебных целей. Информация может не соответствовать актуальным правилам приёма.
        </p>
      </div>
    </footer>
  );
}

const styles = {
  footer: {
    backgroundColor: '#003366',
    color: '#ffffff',
    padding: '1.5rem 0',
    width: '100%',
    boxShadow: '0 -2px 5px rgba(0,0,0,0.1)',
  },
  container: {
    maxWidth: '1200px',
    margin: '0 auto',
    textAlign: 'center',
    padding: '0 2rem',
    boxSizing: 'border-box',
  },
  text: {
    margin: '0.25rem 0',
    fontSize: '1rem',
    fontWeight: '500',
  },
  textSmall: {
    margin: '0.25rem 0',
    fontSize: '0.875rem',
    opacity: 0.9,
  },
};