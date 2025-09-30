// src/components/FormPage.jsx
import { Link } from 'react-router-dom';
import { useState } from 'react';

export default function FormPage() {
  const [formData, setFormData] = useState({
    surname: '',
    name: '',
    patronymic: '',
    birthDate: '',
    gender: '',
    passportSeries: '',
    passportNumber: '',
    passportIssueDate: '',
    passportIssuedBy: '',
    snils: '',
    inn: '',
    email: '',
    phone: '',
    educationType: '',
    schoolName: '',
    graduationYear: '',
    diplomaSeries: '',
    diplomaNumber: '',
    examSubject1: '',
    examScore1: '',
    examSubject2: '',
    examScore2: '',
    examSubject3: '',
    examScore3: '',
    specialty: '',
    consentGiven: false,
  });

  const handleInputChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData({
      ...formData,
      [name]: type === 'checkbox' ? checked : value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    alert('Форма успешно отправлена! Данные:\n' + JSON.stringify(formData, null, 2));
    // Здесь можно отправить formData на сервер
  };

  return (
    <>

      {/* ТОЧНОЕ ВОССОЗДАНИЕ ФИГУРЫ С ДОПОЛНИТЕЛЬНЫМИ ЛИНИЯМИ */}
      <div style={styles.figureContainer}>
        {/* Красный */}
        <div style={styles.redBox}></div>
        {/* Жёлтый */}
        <div style={styles.yellowBox}></div>
        {/* Синий */}
        <div style={styles.blueBox}></div>
        {/* Зелёный */}
        <div style={styles.greenBox}></div>

        {/* Дополнительные линии */}
        <div style={styles.line1}></div> 
        <div style={styles.line2}></div> 
        <div style={styles.line3}></div> 
        <div style={styles.line4}></div> 
        <div style={styles.line5}></div> 
        <div style={styles.line6}></div> 
        <div style={styles.line7}></div> 
      </div>
      <section style={styles.intro}>
        <h1 style={styles.title}>Работа №1: Форма подачи документов</h1>
        <p style={styles.description}>
          Заполните форму для подачи документов в приёмную комиссию университета.
          Все поля, отмеченные звёздочкой (*), обязательны для заполнения.
        </p>
      </section>

      {/* Форма поступления */}
      <section style={styles.formContainer}>
        <form style={styles.form} onSubmit={handleSubmit}>
          <h2 style={styles.formTitle}>Форма подачи документов для поступления</h2>

          {/* Личные данные */}
          <fieldset style={styles.fieldset}>
            <legend style={styles.legend}>Личные данные *</legend>

            <div style={styles.row}>
              <div style={styles.fieldHalf}>
                <label htmlFor="surname" style={styles.label}>Фамилия *</label>
                <input
                  type="text"
                  id="surname"
                  name="surname"
                  value={formData.surname}
                  onChange={handleInputChange}
                  style={styles.input}
                  required
                />
              </div>
              <div style={styles.fieldHalf}>
                <label htmlFor="name" style={styles.label}>Имя *</label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleInputChange}
                  style={styles.input}
                  required
                />
              </div>
              <div style={styles.fieldHalf}>
                <label htmlFor="patronymic" style={styles.label}>Отчество</label>
                <input
                  type="text"
                  id="patronymic"
                  name="patronymic"
                  value={formData.patronymic}
                  onChange={handleInputChange}
                  style={styles.input}
                />
              </div>
            </div>

            <div style={styles.row}>
              <div style={styles.fieldHalf}>
                <label htmlFor="birthDate" style={styles.label}>Дата рождения *</label>
                <input
                  type="date"
                  id="birthDate"
                  name="birthDate"
                  value={formData.birthDate}
                  onChange={handleInputChange}
                  style={styles.input}
                  required
                />
              </div>
              <div style={styles.fieldHalf}>
                <label style={styles.label}>Пол *</label>
                <div style={styles.radioGroup}>
                  <label style={styles.radioLabel}>
                    <input
                      type="radio"
                      name="gender"
                      value="male"
                      checked={formData.gender === 'male'}
                      onChange={handleInputChange}
                      required
                    />
                    Мужской
                  </label>
                  <label style={styles.radioLabel}>
                    <input
                      type="radio"
                      name="gender"
                      value="female"
                      checked={formData.gender === 'female'}
                      onChange={handleInputChange}
                    />
                    Женский
                  </label>
                </div>
              </div>
            </div>
          </fieldset>

          {/* Паспортные данные */}
          <fieldset style={styles.fieldset}>
            <legend style={styles.legend}>Паспортные данные *</legend>

            <div style={styles.row}>
              <div style={styles.fieldQuarter}>
                <label htmlFor="passportSeries" style={styles.label}>Серия *</label>
                <input
                  type="text"
                  id="passportSeries"
                  name="passportSeries"
                  value={formData.passportSeries}
                  onChange={handleInputChange}
                  placeholder="XXXX"
                  maxLength="4"
                  style={styles.input}
                  required
                />
              </div>
              <div style={styles.fieldThreeQuarter}>
                <label htmlFor="passportNumber" style={styles.label}>Номер *</label>
                <input
                  type="text"
                  id="passportNumber"
                  name="passportNumber"
                  value={formData.passportNumber}
                  onChange={handleInputChange}
                  placeholder="XXXXXX"
                  maxLength="6"
                  style={styles.input}
                  required
                />
              </div>
            </div>

            <div style={styles.row}>
              <div style={styles.fieldHalf}>
                <label htmlFor="passportIssueDate" style={styles.label}>Дата выдачи *</label>
                <input
                  type="date"
                  id="passportIssueDate"
                  name="passportIssueDate"
                  value={formData.passportIssueDate}
                  onChange={handleInputChange}
                  style={styles.input}
                  required
                />
              </div>
              <div style={styles.fieldHalf}>
                <label htmlFor="passportIssuedBy" style={styles.label}>Кем выдан *</label>
                <input
                  type="text"
                  id="passportIssuedBy"
                  name="passportIssuedBy"
                  value={formData.passportIssuedBy}
                  onChange={handleInputChange}
                  placeholder="УФМС, ОВД и т.д."
                  style={styles.input}
                  required
                />
              </div>
            </div>
          </fieldset>

          {/* Данные для связи */}
          <fieldset style={styles.fieldset}>
            <legend style={styles.legend}>Контактные данные *</legend>

            <div style={styles.row}>
              <div style={styles.fieldHalf}>
                <label htmlFor="snils" style={styles.label}>СНИЛС *</label>
                <input
                  type="text"
                  id="snils"
                  name="snils"
                  value={formData.snils}
                  onChange={handleInputChange}
                  placeholder="XXX-XXX-XXX XX"
                  style={styles.input}
                  required
                />
              </div>
              <div style={styles.fieldHalf}>
                <label htmlFor="inn" style={styles.label}>ИНН</label>
                <input
                  type="text"
                  id="inn"
                  name="inn"
                  value={formData.inn}
                  onChange={handleInputChange}
                  placeholder="XXXXXXXXXXXX"
                  style={styles.input}
                />
              </div>
            </div>

            <div style={styles.row}>
              <div style={styles.fieldHalf}>
                <label htmlFor="email" style={styles.label}>Email *</label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleInputChange}
                  style={styles.input}
                  required
                />
              </div>
              <div style={styles.fieldHalf}>
                <label htmlFor="phone" style={styles.label}>Телефон *</label>
                <input
                  type="tel"
                  id="phone"
                  name="phone"
                  value={formData.phone}
                  onChange={handleInputChange}
                  placeholder="+7 (___) ___-__-__"
                  style={styles.input}
                  required
                />
              </div>
            </div>
          </fieldset>

          {/* Образование */}
          <fieldset style={styles.fieldset}>
            <legend style={styles.legend}>Образование *</legend>

            <div style={styles.field}>
              <label htmlFor="educationType" style={styles.label}>Тип образования *</label>
              <select
                id="educationType"
                name="educationType"
                value={formData.educationType}
                onChange={handleInputChange}
                style={styles.select}
                required
              >
                <option value="">Выберите тип</option>
                <option value="school">Среднее общее (школа)</option>
                <option value="college">Среднее профессиональное</option>
                <option value="higher">Высшее</option>
              </select>
            </div>

            <div style={styles.field}>
              <label htmlFor="schoolName" style={styles.label}>Наименование учебного заведения *</label>
              <input
                type="text"
                id="schoolName"
                name="schoolName"
                value={formData.schoolName}
                onChange={handleInputChange}
                placeholder="Полное название школы/колледжа/вуза"
                style={styles.input}
                required
              />
            </div>

            <div style={styles.row}>
              <div style={styles.fieldHalf}>
                <label htmlFor="graduationYear" style={styles.label}>Год окончания *</label>
                <input
                  type="number"
                  id="graduationYear"
                  name="graduationYear"
                  value={formData.graduationYear}
                  onChange={handleInputChange}
                  min="1980"
                  max="2025"
                  style={styles.input}
                  required
                />
              </div>
              <div style={styles.fieldQuarter}>
                <label htmlFor="diplomaSeries" style={styles.label}>Серия аттестата *</label>
                <input
                  type="text"
                  id="diplomaSeries"
                  name="diplomaSeries"
                  value={formData.diplomaSeries}
                  onChange={handleInputChange}
                  placeholder="АА"
                  maxLength="2"
                  style={styles.input}
                  required
                />
              </div>
              <div style={styles.fieldQuarter}>
                <label htmlFor="diplomaNumber" style={styles.label}>Номер *</label>
                <input
                  type="text"
                  id="diplomaNumber"
                  name="diplomaNumber"
                  value={formData.diplomaNumber}
                  onChange={handleInputChange}
                  placeholder="XXXXXX"
                  maxLength="6"
                  style={styles.input}
                  required
                />
              </div>
            </div>
          </fieldset>

          {/* Результаты ЕГЭ */}
          <fieldset style={styles.fieldset}>
            <legend style={styles.legend}>Результаты ЕГЭ *</legend>

            <div style={styles.row}>
              <div style={styles.fieldHalf}>
                <label htmlFor="examSubject1" style={styles.label}>Предмет 1 *</label>
                <select
                  id="examSubject1"
                  name="examSubject1"
                  value={formData.examSubject1}
                  onChange={handleInputChange}
                  style={styles.select}
                  required
                >
                  <option value="">Выберите предмет</option>
                  <option value="math">Математика</option>
                  <option value="russian">Русский язык</option>
                  <option value="physics">Физика</option>
                  <option value="chemistry">Химия</option>
                  <option value="biology">Биология</option>
                  <option value="history">История</option>
                  <option value="literature">Литература</option>
                  <option value="english">Английский язык</option>
                </select>
              </div>
              <div style={styles.fieldHalf}>
                <label htmlFor="examScore1" style={styles.label}>Баллы *</label>
                <input
                  type="number"
                  id="examScore1"
                  name="examScore1"
                  value={formData.examScore1}
                  onChange={handleInputChange}
                  min="0"
                  max="100"
                  style={styles.input}
                  required
                />
              </div>
            </div>

            <div style={styles.row}>
              <div style={styles.fieldHalf}>
                <label htmlFor="examSubject2" style={styles.label}>Предмет 2 *</label>
                <select
                  id="examSubject2"
                  name="examSubject2"
                  value={formData.examSubject2}
                  onChange={handleInputChange}
                  style={styles.select}
                  required
                >
                  <option value="">Выберите предмет</option>
                  <option value="math">Математика</option>
                  <option value="russian">Русский язык</option>
                  <option value="physics">Физика</option>
                  <option value="chemistry">Химия</option>
                  <option value="biology">Биология</option>
                  <option value="history">История</option>
                  <option value="literature">Литература</option>
                  <option value="english">Английский язык</option>
                </select>
              </div>
              <div style={styles.fieldHalf}>
                <label htmlFor="examScore2" style={styles.label}>Баллы *</label>
                <input
                  type="number"
                  id="examScore2"
                  name="examScore2"
                  value={formData.examScore2}
                  onChange={handleInputChange}
                  min="0"
                  max="100"
                  style={styles.input}
                  required
                />
              </div>
            </div>

            <div style={styles.row}>
              <div style={styles.fieldHalf}>
                <label htmlFor="examSubject3" style={styles.label}>Предмет 3</label>
                <select
                  id="examSubject3"
                  name="examSubject3"
                  value={formData.examSubject3}
                  onChange={handleInputChange}
                  style={styles.select}
                >
                  <option value="">Не выбрано</option>
                  <option value="math">Математика</option>
                  <option value="russian">Русский язык</option>
                  <option value="physics">Физика</option>
                  <option value="chemistry">Химия</option>
                  <option value="biology">Биология</option>
                  <option value="history">История</option>
                  <option value="literature">Литература</option>
                  <option value="english">Английский язык</option>
                </select>
              </div>
              <div style={styles.fieldHalf}>
                <label htmlFor="examScore3" style={styles.label}>Баллы</label>
                <input
                  type="number"
                  id="examScore3"
                  name="examScore3"
                  value={formData.examScore3}
                  onChange={handleInputChange}
                  min="0"
                  max="100"
                  style={styles.input}
                />
              </div>
            </div>
          </fieldset>

          {/* Направление подготовки */}
          <fieldset style={styles.fieldset}>
            <legend style={styles.legend}>Выбор направления *</legend>

            <div style={styles.field}>
              <label htmlFor="specialty" style={styles.label}>Направление подготовки *</label>
              <select
                id="specialty"
                name="specialty"
                value={formData.specialty}
                onChange={handleInputChange}
                style={styles.select}
                required
              >
                <option value="">Выберите направление</option>
                <option value="09.03.01">09.03.01 — Информатика и вычислительная техника</option>
                <option value="09.03.02">09.03.02 — Информационные системы и технологии</option>
                <option value="09.03.03">09.03.03 — Прикладная информатика</option>
                <option value="38.03.05">38.03.05 — Бизнес-информатика</option>
                <option value="44.03.05">44.03.05 — Педагогическое образование</option>
              </select>
            </div>
          </fieldset>

          {/* Загрузка документов */}
          <fieldset style={styles.fieldset}>
            <legend style={styles.legend}>Загрузка документов</legend>

            <div style={styles.field}>
              <label style={styles.label}>Аттестат/диплом (PDF, до 5 МБ)</label>
              <input
                type="file"
                accept=".pdf"
                style={styles.fileInput}
              />
            </div>

            <div style={styles.field}>
              <label style={styles.label}>Фотография (JPG/PNG, 3x4)</label>
              <input
                type="file"
                accept="image/*"
                style={styles.fileInput}
              />
            </div>

            <div style={styles.field}>
              <label style={styles.label}>Документ, подтверждающий льготу (если есть)</label>
              <input
                type="file"
                accept=".pdf,.jpg,.png"
                style={styles.fileInput}
              />
            </div>
          </fieldset>

          {/* Согласие на обработку данных */}
          <div style={styles.consent}>
            <label style={styles.consentLabel}>
              <input
                type="checkbox"
                name="consentGiven"
                checked={formData.consentGiven}
                onChange={handleInputChange}
                required
              />
              <span style={styles.consentText}>
                Даю согласие на обработку персональных данных в соответствии с ФЗ-152 *
              </span>
            </label>
          </div>

          {/* Кнопка отправки */}
          <button type="submit" style={styles.submitButton}>
            Подать документы
          </button>
        </form>
      </section>

      {/* Вернуться на главную */}
      <section style={styles.placeholder}>
        <div style={styles.box}>
          <p style={{ color: '#555', lineHeight: '1.6' }}>
            После отправки вы получите подтверждение на email.
            Все данные защищены и используются только для приёма.
          </p>
          <div style={styles.buttonContainer}>
            <Link to="/" style={styles.button}>
              Вернуться на главную
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}

const styles = {
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
    maxWidth: '800px',
    margin: '0 auto',
  },

  // CSS GRID
  figureContainer: {
    display: 'grid',
    gridTemplateColumns: 'repeat(6, 1fr)', // 6 колонок
    gridTemplateRows: 'repeat(3, 1fr)',   // 3 строки
    gap: '2px',
    border: '2px solid black',
    margin: '3rem auto',
    maxWidth: '800px',
    height: '300px',
    width: '100%',
    background: 'white',
  },

  // Цветные блоки
  redBox: {
    gridColumn: '2 / 3',
    gridRow: '1 / 2',
    backgroundColor: 'red',
    height: '105%',
    border: '4px solid black',
  },
  yellowBox: {
    gridColumn: '6 / 7',
    gridRow: '1 / 2',
    backgroundColor: 'yellow',
    height: '105%',
    border: '4px solid black',
  },
  blueBox: {
    gridColumn: '4 / 5',
    gridRow: '2 / 4',
    height: '102%',
    backgroundColor: 'blue',
    border: '4px solid black',
  },
  greenBox: {
    gridColumn: '1 / 3',
    gridRow: '3 / 4',
    height: '105%',
    backgroundColor: 'green',
    border: '4px solid black',
  },

  // Дополнительные линии
  line1: {
    gridColumn: '3 / 3',
    gridRow: '3 / 4',
    backgroundColor: 'black',
    height: '2px',
    width: '100%',
    position: 'relative',
    top: '-1px',
    zIndex: 1,
  },
  line2: {
    gridColumn: '2 / 4',
    gridRow: '2 / 2',
    backgroundColor: 'black',
    width: '2px',
    height: '102%',
    position: 'relative',
    zIndex: 1,
  },
  line3: {
    gridColumn: '5 / 5',
    gridRow: '2 / 3',
    backgroundColor: 'black',
    height: '2px',
    width: '102%',
    position: 'relative',
    zIndex: 1,
  },
  line4: {
    gridColumn: '3 / 3',
    gridRow: '2 / 2',
    backgroundColor: 'black',
    height: '2px',
    width: '105%',
    position: 'relative',
    zIndex: 1,
  },
  line5: {
    gridColumn: '6 / 6',
    gridRow: '1 / 4',
    backgroundColor: 'black',
    width: '2px',
    height: '100%',
    position: 'relative',
    left: '-1px',
    zIndex: 1,
  },
  line6: {
    gridColumn: '2 / 6',
    gridRow: '4 / 4',
    backgroundColor: 'black',
    width: '2px',
    height: '100%',
    position: 'relative',
    left: '-1px',
    zIndex: 1,
  },
  line7: {
    gridColumn: '5 / 5',
    gridRow: '3 / 3',
    backgroundColor: 'black',
    height: '2px',
    position: 'relative',
    left: '-1px',
    zIndex: 1,
  },

  // Форма
  formContainer: {
    display: 'flex',
    justifyContent: 'center',
    marginTop: '2rem',
    marginBottom: '3rem',
  },
  form: {
    backgroundColor: '#f9f9f9',
    padding: '2rem',
    borderRadius: '12px',
    boxShadow: '0 4px 15px rgba(0,0,0,0.1)',
    width: '100%',
    maxWidth: '800px',
    fontFamily: 'Arial, sans-serif',
  },
  formTitle: {
    textAlign: 'center',
    fontSize: '1.8rem',
    color: '#003366',
    marginBottom: '1.5rem',
  },

  fieldset: {
    border: '2px solid #003366',
    borderRadius: '8px',
    padding: '1.5rem',
    marginBottom: '1.5rem',
  },
  legend: {
    fontSize: '1.2rem',
    fontWeight: '600',
    color: '#003366',
    padding: '0 0.5rem',
  },

  field: {
    marginBottom: '1rem',
  },
  row: {
    display: 'flex',
    gap: '1rem',
    marginBottom: '1rem',
    flexWrap: 'wrap',
  },
  fieldHalf: {
    flex: '1 1 45%',
    minWidth: '200px',
  },
  fieldQuarter: {
    flex: '1 1 20%',
    minWidth: '100px',
  },
  fieldThreeQuarter: {
    flex: '1 1 70%',
    minWidth: '200px',
  },

  label: {
    display: 'block',
    fontSize: '0.95rem',
    fontWeight: '500',
    color: '#003366',
    marginBottom: '0.3rem',
  },
  input: {
    width: '100%',
    padding: '0.75rem',
    border: '1px solid #ccc',
    borderRadius: '6px',
    fontSize: '1rem',
    boxSizing: 'border-box',
  },
  select: {
    width: '100%',
    padding: '0.75rem',
    border: '1px solid #ccc',
    borderRadius: '6px',
    fontSize: '1rem',
    backgroundColor: 'white',
  },
  fileInput: {
    width: '100%',
    padding: '0.5rem',
    border: '1px dashed #aaa',
    borderRadius: '6px',
    backgroundColor: '#fafafa',
  },

  radioGroup: {
    display: 'flex',
    gap: '1.5rem',
    flexWrap: 'wrap',
  },
  radioLabel: {
    display: 'flex',
    alignItems: 'center',
    gap: '0.5rem',
    fontSize: '1rem',
  },

  consent: {
    marginTop: '1.5rem',
    padding: '1rem',
    backgroundColor: '#fff8e1',
    borderRadius: '8px',
    border: '1px solid #ffd54f',
  },
  consentLabel: {
    display: 'flex',
    alignItems: 'flex-start',
    gap: '0.75rem',
    fontSize: '0.95rem',
  },
  consentText: {
    flex: 1,
  },

  submitButton: {
    display: 'block',
    width: '100%',
    padding: '1rem',
    backgroundColor: '#003366',
    color: 'white',
    border: 'none',
    borderRadius: '8px',
    fontSize: '1.2rem',
    fontWeight: '600',
    cursor: 'pointer',
    marginTop: '1.5rem',
    transition: 'background-color 0.2s',
  },

  // Placeholder
  placeholder: {
    display: 'flex',
    flexDirection: 'column',
    gap: '3rem',
    marginTop: '3rem',
    alignItems: 'center',
  },
  box: {
    textAlign: 'center',
    padding: '3rem 2rem',
    backgroundColor: '#f8f9fa',
    borderRadius: '12px',
    boxShadow: '0 4px 15px rgba(0,0,0,0.08)',
    maxWidth: '800px',
    width: '100%',
  },
  buttonContainer: {
    marginTop: '2rem',
  },
  button: {
    display: 'inline-block',
    padding: '0.75rem 2rem',
    backgroundColor: '#003366',
    color: 'white',
    textDecoration: 'none',
    borderRadius: '6px',
    fontWeight: '500',
    fontSize: '1.1rem',
    transition: 'background-color 0.2s',
  },
};