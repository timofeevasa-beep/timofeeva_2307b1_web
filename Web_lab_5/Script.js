// ========== ЗАДАЧА 1 ==========

// 1. Вернуть число в обратном порядке
function reverseNumber(num) {
    return parseInt(num.toString().split('').reverse().join(''));
}

// 2. Вернуть число без повторяющихся цифр
function removeDuplicates(num) {
    let str = num.toString();
    let result = '';
    for (let char of str) {
        if (!result.includes(char)) {
            result += char;
        }
    }
    return parseInt(result);
    // Альтернативный вариант: return parseInt([...new Set(str)].join(''));
}

// 3. Посчитать, сколько раз цифра встречается в числе
function countDigitOccurrences(num, digit) {
    let str = num.toString();
    let count = 0;
    for (let char of str) {
        if (char === digit.toString()) {
            count++;
        }
    }
    return count;
}

// 4. Самая длинная последовательность нулей/единиц в двоичной записи
function longestSequence(num) {
    let binary = num.toString(2);
    let maxZeros = 0, maxOnes = 0;
    let currentZeros = 0, currentOnes = 0;
    
    for (let char of binary) {
        if (char === '0') {
            currentZeros++;
            currentOnes = 0;
            maxZeros = Math.max(maxZeros, currentZeros);
        } else if (char === '1') {
            currentOnes++;
            currentZeros = 0;
            maxOnes = Math.max(maxOnes, currentOnes);
        }
    }
    
    return {
        binary: binary,
        maxZeros: maxZeros,
        maxOnes: maxOnes,
        longest: Math.max(maxZeros, maxOnes)
    };
}

// Демонстрация Задачи 1
console.log('=== ЗАДАЧА 1 ===');
console.log('Обратный порядок 123:', reverseNumber(123));
console.log('Без дубликатов 111333456:', removeDuplicates(111333456));
console.log('Цифра 5 встречается в 1355567:', countDigitOccurrences(1355567, 5));
let seq = longestSequence(156);
console.log('Двоичная запись 156:', seq.binary);
console.log('Максимум нулей:', seq.maxZeros, 'единиц:', seq.maxOnes);
console.log('Самая длинная:', seq.longest);


// ========== ЗАДАЧА 2 ==========

// 1. Найти первый неповторяющийся символ
function firstUniqueChar(str) {
    for (let i = 0; i < str.length; i++) {
        let char = str[i];
        if (str.indexOf(char) === str.lastIndexOf(char)) {
            return char;
        }
    }
    return null;
}

// 2. Сгенерировать строку из случайных символов (буквы + цифры)
function randomString(length) {
    const chars = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
    let result = '';
    for (let i = 0; i < length; i++) {
        result += chars[Math.floor(Math.random() * chars.length)];
    }
    return result;
}

// 3. Вернуть только уникальные символы строки (в порядке первого появления)
function uniqueChars(str) {
    let result = '';
    for (let char of str) {
        if (!result.includes(char)) {
            result += char;
        }
    }
    return result;
}

// Демонстрация Задачи 2
console.log('\n=== ЗАДАЧА 2 ===');
console.log('Первый уникальный в "фывфавыапрс":', firstUniqueChar('фывфавыапрс'));
console.log('Случайная строка длины 5:', randomString(5));
console.log('Уникальные символы "позволяеткопироватьтекстиз":', 
            uniqueChars('позволяеткопироватьтекстиз'));


// ========== ДОПОЛНИТЕЛЬНО (Rest и Spread операторы) ==========

// Пример использования rest оператора
function sumNumbers(...numbers) {
    return numbers.reduce((total, num) => total + num, 0);
}

// Пример использования spread оператора
function mergeArrays(arr1, arr2) {
    return [...arr1, ...arr2];
}

console.log('\n=== REST/SPREAD ===');
console.log('Сумма чисел (1,2,3,4):', sumNumbers(1, 2, 3, 4));
console.log('Объединение [1,2] и [3,4]:', mergeArrays([1, 2], [3, 4]));

// Функция для вывода результатов на HTML страницу
function runAllTests() {
    const output = document.getElementById('output');
    output.innerHTML = '';
    
    function log(message) {
        output.innerHTML += message + '\n';
    }
    
    log('=== ЗАДАЧА 1 ===');
    log(`Обратный порядок 123: ${reverseNumber(123)}`);
    log(`Без дубликатов 111333456: ${removeDuplicates(111333456)}`);
    log(`Цифра 5 встречается в 1355567: ${countDigitOccurrences(1355567, 5)}`);
    
    let seq = longestSequence(156);
    log(`Двоичная запись 156: ${seq.binary}`);
    log(`Максимум нулей: ${seq.maxZeros}, единиц: ${seq.maxOnes}`);
    log(`Самая длинная последовательность: ${seq.longest}`);
    
    log('\n=== ЗАДАЧА 2 ===');
    log(`Первый уникальный в "фывфавыапрс": ${firstUniqueChar('фывфавыапрс')}`);
    log(`Случайная строка длины 5: ${randomString(5)}`);
    log(`Уникальные символы "позволяеткопироватьтекстиз": ${uniqueChars('позволяеткопироватьтекстиз')}`);
    
    log('\n=== REST/SPREAD ===');
    log(`Сумма чисел (1,2,3,4): ${sumNumbers(1, 2, 3, 4)}`);
    log(`Объединение [1,2] и [3,4]: ${mergeArrays([1, 2], [3, 4])}`);
}

function clearOutput() {
    document.getElementById('output').innerHTML = '';
}

// Автоматический запуск при загрузке страницы
window.onload = runAllTests;