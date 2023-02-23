//Задание 1

function searchMinNumber(a, b) {
    if (a < b) {
        return a;
    } else {
        return b;
    }
}

console.log(searchMinNumber(8, 4));
console.log(searchMinNumber(6, 6));

//Задание 2

function checkEvenNumber(a) {
    if (a % 2 == 0) {
        return `Число ${a} четное`;
    } else {
        return `Число ${a} нечетное`;
    }
}

console.log(checkEvenNumber(2));
console.log(checkEvenNumber(5));

//Задание 3.1

function squareNumber(a) {
    let result = a ** 2;
    console.log(result);
}

squareNumber(2);
squareNumber(5);

//Задание 3.2

function squareNumber(a) {
    return a ** 2;
}

console.log(squareNumber(2));
console.log(squareNumber(5));

//Задание 4

function sayHello() {
    userAnswer = Number(prompt('Сколько Вам лет?'));

    if (userAnswer <= 0) {
        alert('Вы ввели неправильное значение');
    } else if (userAnswer > 0 && userAnswer <= 12) {
        alert('Привет, друг!');
    } else {
        alert('Добро пожаловать!');
    }
}

sayHello();

//Задание 5

function multOfNumbers(a, b) {
    if (!isNaN(a) && !isNaN(b)) {
        return a * b;
    } else {
        return 'Одно или оба значения не являются числом';
    }
}

console.log(multOfNumbers(5, 5));
console.log(multOfNumbers(9, 'gdf'));
console.log(multOfNumbers('fr', 'frgvd'));

//Задание 6

function squareNumber() {
    let userAnswer = prompt('Введите число');
     
    if (!isNaN(userAnswer)) {
        let result = userAnswer ** 3;
        return `${userAnswer} в кубе равняется ${result}`;
    } else {
        return 'Переданный параметр не является числом';
    }    
}

console.log(squareNumber());

//Задание 6 (не работает)

function squareNumber() {
    let userAnswer = prompt('Введите число');
     
    if (typeof (userAnswer) != 'number') {
        return 'Переданный параметр не является числом';
    } else {
        let result = userAnswer ** 3;
        return `${userAnswer} в кубе равняется ${result}`;
    }    
}

console.log(squareNumber());