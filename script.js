//Задание 1

/*function searchMinNumber(a, b) {
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
console.log(squareNumber(5));*/

//Задание 4

function sayHello() {
    userAnswer = prompt('Сколько Вам лет?');

    if (userAnswer <= 0) {
        alert('Вы ввели неправильное значение');
    } else if (userAnswer > 0 && userAnswer <= 12) {
        alert('Привет, друг!');
    } else {
        alert('Добро пожаловать!');
    }
}

sayHello();