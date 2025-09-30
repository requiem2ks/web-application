// src/components/MainContent.jsx
export default function MainContent() {
  return (
    <>
      <section style={styles.intro}>
        <h1 style={styles.title}>Подача документов абитуриентами</h1>
        <p style={styles.description}>
          Добро пожаловать на официальный портал приёмной комиссии!
          Здесь вы можете ознакомиться с правилами приёма, необходимыми документами
          и подать заявку онлайн. Мы поможем вам поступить в лучший университет страны.
        </p>
      </section>

      <section style={styles.media}>
        <div style={styles.photo}>
          <img
            src="https://avatars.mds.yandex.net/get-altay/236825/2a0000015e61442a926490d96754ac529723/orig"
            style={styles.image}
          />
          <p style={styles.caption}>РГРТУ — место, где начинается будущее</p>
        </div>

        <div style={styles.video}>
          <h3>Видео: Как подать документы?</h3>
          <iframe
            width="100%"
            height="315"
            src="https://www.youtube.com/embed/4xrlbdosH60"
            title="Инструкция для абитуриентов"
            frameBorder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
            style={styles.iframe}
          ></iframe>
        </div>
      </section>
    </>
  );
}

const styles = {
  main: {
    padding: '2rem',
    maxWidth: '1200px',
    margin: '0 auto',
  },
  intro: {
    textAlign: 'center',
    marginBottom: '3rem',
  },
  title: {
    fontSize: '2.5rem',
    color: '#003366',
    marginBottom: '1rem',
  },
  description: {
    fontSize: '1.2rem',
    lineHeight: '1.6',
    color: '#333',
  },
  media: {
    display: 'flex',
    flexDirection: 'column',
    gap: '3rem',
    marginTop: '3rem',
  },
  photo: {
    textAlign: 'center',
  },
  image: {
    borderRadius: '8px',
    boxShadow: '0 4px 10px rgba(0,0,0,0.1)',
    maxWidth: '100%',  
    height: 'auto',    
    width: '600px',    
  },
  caption: {
    fontSize: '0.9rem',
    color: '#666',
    marginTop: '0.5rem',
  },
  video: {
    textAlign: 'center',
  },
  iframe: {
    borderRadius: '8px',
    marginTop: '1rem',
  },
};