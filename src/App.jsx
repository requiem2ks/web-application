// src/App.jsx
import { HashRouter as Router, Routes, Route } from 'react-router-dom';
import Header from './components/Header';
import MainContent from './components/MainContent';
import FormPage from './components/FormPage';
import Footer from './components/Footer';
import StringReverser from './components/StringReverser';

export default function App() {
  return (
    <Router>
      <div style={styles.appContainer}>
        <Header />
        <main style={styles.main}>
          <Routes>
            <Route path="/" element={<MainContent />} />
            <Route path="/form" element={<FormPage />} />
            <Route path="/form1" element={<StringReverser />} />
          </Routes>
        </main>
        <Footer />
      </div>
    </Router>
  );
}

const styles = {
  appContainer: {
    display: 'flex',
    flexDirection: 'column',
    minHeight: '100vh',
    width: '100%',
    backgroundColor: '#f9f9f9',
  },
  main: {
    flex: 1,
    padding: '2rem',
    maxWidth: '1200px',   // Ограничение по ширине (опционально)
    width: '100%',         // ← Ключевое: занимает всю ширину родителя
    margin: '0 auto',      // Центрирование
    boxSizing: 'border-box',
    backgroundColor: '#ffffff',
    borderRadius: '8px',
    boxShadow: '0 2px 10px rgba(0,0,0,0.05)',
    marginTop: '1rem',
    marginBottom: '1rem',
  },
};