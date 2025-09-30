// src/components/StringReverser.jsx

import { useState } from 'react';

/**
 * Вручную переворачивает строку (аналог PHP strrev)
 * @param {string} str — входная строка
 * @returns {string} — перевёрнутая строка
 */
function reverseString(str) {
    let result = '';
    for (let i = str.length - 1; i >= 0; i--) {
        result += str[i];
    }
    return result;
}

/**
 * Имитация PHP-функции sort() — сортирует массив по возрастанию
 * Не использует Array.prototype.sort()
 * @param {Array} arr — входной массив
 * @returns {Array} — отсортированный массив
 */
function phpSort(arr) {
    const sorted = [...arr]; // Копируем массив, чтобы не мутировать оригинал

    // Пузырьковая сортировка
    for (let i = 0; i < sorted.length; i++) {
        for (let j = 0; j < sorted.length - 1 - i; j++) {
            if (sorted[j] > sorted[j + 1]) {
                [sorted[j], sorted[j + 1]] = [sorted[j + 1], sorted[j]];
            }
        }
    }

    return sorted;
}

export default function StringReverser() {
    // Состояния для первой задачи
    const [inputStr, setInputStr] = useState('');
    const [outputStr, setOutputStr] = useState('');

    // Состояния для второй задачи
    const [arrayInput, setArrayInput] = useState('');
    const [sortedArray, setSortedArray] = useState('');

    // Обработчики
    const handleReverse = () => {
        setOutputStr(reverseString(inputStr));
    };

    const handleSort = () => {
        try {
            // Парсим строку в массив
            const parsed = arrayInput
                .split(',')
                .map(item => item.trim())
                .filter(item => item !== '');

            // Определяем тип: если все элементы числа — сортируем как числа
            const isNumeric = parsed.every(item => !isNaN(item));
            const numericArr = isNumeric ? parsed.map(Number) : parsed;

            const result = phpSort(numericArr);
            setSortedArray(result.join(', '));
        } catch (error) {
            alert('Ошибка при парсинге массива');
        }
    };

    return (
        <div style={{
            padding: '30px',
            maxWidth: '800px',
            margin: '20px auto',
            fontFamily: 'Segoe UI, Tahoma, Geneva, Verdana, sans-serif',
            backgroundColor: '#f9f9f9',
            borderRadius: '12px',
            boxShadow: '0 4px 12px rgba(0,0,0,0.05)',
        }}>
            {/* Блок 1: Переворачиватель строки */}
            <div style={{ marginBottom: '40px' }}>
                <h2 style={{
                    fontSize: '24px',
                    fontWeight: '600',
                    marginBottom: '20px',
                    color: '#333',
                    textAlign: 'center'
                }}>
                    Переворачиватель строки
                </h2>

                <div style={{
                    display: 'flex',
                    gap: '20px',
                    alignItems: 'flex-start'
                }}>
                    {/* Левое поле */}
                    <div style={{ flex: 1 }}>
                        <label style={{
                            display: 'block',
                            marginBottom: '8px',
                            fontSize: '16px',
                            fontWeight: '500',
                            color: '#555'
                        }}>
                            Введите строку:
                        </label>
                        <textarea
                            value={inputStr}
                            onChange={(e) => setInputStr(e.target.value)}
                            rows="6"
                            placeholder="Hello, World!"
                            style={{
                                width: '100%',
                                padding: '12px',
                                fontSize: '16px',
                                border: '2px solid #ddd',
                                borderRadius: '8px',
                                resize: 'vertical',
                                outline: 'none',
                                backgroundColor: '#fff'
                            }}
                            onFocus={(e) => e.target.style.borderColor = '#007bff'}
                            onBlur={(e) => e.target.style.borderColor = '#ddd'}
                        />
                    </div>

                    {/* Кнопка */}
                    <div style={{
                        display: 'flex',
                        flexDirection: 'column',
                        justifyContent: 'center',
                        alignItems: 'center'
                    }}>
                        <button
                            onClick={handleReverse}
                            style={{
                                padding: '10px 20px',
                                fontSize: '16px',
                                fontWeight: '600',
                                cursor: 'pointer',
                                marginTop: '80px',
                                backgroundColor: 'skyblue',
                                color: 'white',
                                border: 'none',
                                borderRadius: '8px',
                                transition: 'background-color 0.2s'
                            }}
                            onMouseEnter={(e) => e.target.style.backgroundColor = '#42AAFF'}
                            onMouseLeave={(e) => e.target.style.backgroundColor = 'skyblue'} 
                        >
                            Перевернуть
                        </button>
                    </div>

                    {/* Правое поле */}
                    <div style={{ flex: 1 }}>
                        <label style={{
                            display: 'block',
                            marginBottom: '8px',
                            fontSize: '16px',
                            fontWeight: '500',
                            color: '#555'
                        }}>
                            Результат:
                        </label>
                        <textarea
                            value={outputStr}
                            readOnly
                            rows="6"
                            style={{
                                width: '100%',
                                padding: '12px',
                                fontSize: '16px',
                                border: '2px solid #ddd',
                                borderRadius: '8px',
                                resize: 'vertical',
                                backgroundColor: '#fafafa',
                                fontWeight: '500',
                                color: '#222',
                                boxShadow: 'inset 0 1px 3px rgba(0,0,0,0.05)'
                            }}
                        />
                    </div>
                </div>
            </div>

            {/* Блок 2: Сортировка массива */}
            <div style={{
                padding: '20px',
                backgroundColor: '#fff',
                borderRadius: '12px',
                boxShadow: '0 2px 8px rgba(0,0,0,0.05)',
            }}>
                <h3 style={{
                    fontSize: '20px',
                    fontWeight: '600',
                    marginBottom: '15px',
                    color: '#333'
                }}>
                    Сортировка массива (аналог PHP sort())
                </h3>

                <div style={{
                    display: 'flex',
                    gap: '20px',
                    alignItems: 'flex-start'
                }}>
                    {/* Левое поле */}
                    <div style={{ flex: 1 }}>
                        <label style={{
                            display: 'block',
                            marginBottom: '8px',
                            fontSize: '14px',
                            fontWeight: '500',
                            color: '#555'
                        }}>
                            Введите элементы массива через запятую:
                        </label>
                        <input
                            type="text"
                            value={arrayInput}
                            onChange={(e) => setArrayInput(e.target.value)}
                            placeholder="3,1,4,1,5,9,2,6"
                            style={{
                                width: '100%',
                                padding: '10px',
                                fontSize: '16px',
                                border: '2px solid #ddd',
                                borderRadius: '8px',
                                outline: 'none'
                            }}
                            onFocus={(e) => e.target.style.borderColor = '#007bff'}
                            onBlur={(e) => e.target.style.borderColor = '#ddd'}
                        />
                    </div>

                    {/* Кнопка */}
                    <div style={{
                        display: 'flex',
                        flexDirection: 'column',
                        justifyContent: 'center',
                        alignItems: 'center'
                    }}>
                        <button
                            onClick={handleSort}
                            style={{
                                padding: '10px 20px',
                                fontSize: '16px',
                                fontWeight: '600',
                                cursor: 'pointer',
                                marginTop: '80px',
                                backgroundColor: 'skyblue',
                                color: 'white',
                                border: 'none',
                                borderRadius: '8px',
                                transition: 'background-color 0.2s'
                            }}
                            onMouseEnter={(e) => e.target.style.backgroundColor = '#42AAFF'}
                            onMouseLeave={(e) => e.target.style.backgroundColor = 'skyblue'} 
                        >
                            Сортировать
                        </button>
                    </div>

                    {/* Правое поле */}
                    <div style={{ flex: 1 }}>
                        <label style={{
                            display: 'block',
                            marginBottom: '8px',
                            fontSize: '14px',
                            fontWeight: '500',
                            color: '#555'
                        }}>
                            Результат:
                        </label>
                        <textarea
                            value={sortedArray}
                            readOnly
                            rows="6"
                            style={{
                                width: '100%',
                                padding: '10px',
                                fontSize: '16px',
                                border: '2px solid #ddd',
                                borderRadius: '8px',
                                resize: 'vertical',
                                backgroundColor: '#fafafa',
                                fontWeight: '500',
                                color: '#222'
                            }}
                        />
                    </div>
                </div>
            </div>
        </div>
    );
}