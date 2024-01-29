//var a = 10;

//if (a === 10) {
//    console.log('Верно');
//} else {
//    console.log('Неверно');
//}

//var min = 30; 
//if (min >= 0 && min <= 14) {
//    console.log('Четверть часа: первая');
//} else if (min >= 15 && min <= 29) {
//    console.log('Четверть часа: вторая');
//} else if (min >= 30 && min <= 44) {
//    console.log('Четверть часа: третья');
//} else if (min >= 45 && min <= 59) {
//    console.log('Четверть часа: четвертая');
//} else {
//    console.log('Некорректное значение минут. Введите число от 0 до 59.');
//}

//Через два if:

//var lang = 'ru';
//var arr;

//if (lang === 'ru') {
//    arr = ['Понедельник', 'Вторник', 'Среда', 'Четверг', 'Пятница', 'Суббота', 'Воскресенье'];
//} else if (lang === 'en') {
//    arr = ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday'];
//}

//console.log(arr);

//Через switch-case:

//var lang = 'ru';
//var arr;

//switch (lang) {
//    case 'ru':
//        arr = ['Понедельник', 'Вторник', 'Среда', 'Четверг', 'Пятница', 'Суббота', 'Воскресенье'];
//        break;
//    case 'en':
//        arr = ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday'];
//        break;
//}

//console.log(arr);

//Через многомерный массив без if и switch:

//var lang = 'ru';

//var weekDays = {
//    'ru': ['Понедельник', 'Вторник', 'Среда', 'Четверг', 'Пятница', 'Суббота', 'Воскресенье'],
//    'en': ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday']
//};

//var arr = weekDays[lang];

//console.log(arr);

//Работа с if-else

// Задача 1
//var a1 = 1;
//if (a1 === 0) {
//    console.log('Верно');
//} else {
//    console.log('Неверно');
//}

// Задача 2
//var a2 = 1;
//if (a2 > 0) {
//    console.log('Верно');
//} else {
//    console.log('Неверно');
//}

// Задача 3
//var a3 = 1;
//if (a3 < 0) {
//    console.log('Верно');
//} else {
//    console.log('Неверно');
//}

// Задача 4
//var a4 = 1;
//if (a4 >= 0) {
//    console.log('Верно');
//} else {
//    console.log('Неверно');
//}

// Задача 5
//var a5 = 1;
//if (a5 <= 0) {
//    console.log('Верно');
//} else {
//    console.log('Неверно');
//}

// Задача 6
//var a6 = 1;
//if (a6 !== 0) {
//    console.log('Верно');
//} else {
//    console.log('Неверно');
//}

// Задача 7
//var a7 = 'test';
//if (a7 === 'test') {
//    console.log('Верно');
//} else {
//    console.log('Неверно');
//}

// Задача 8
//var a8 = '1';
//if (a8 === '1') {
//    console.log('Верно');
//} else {
//    console.log('Неверно');
//}

//Работа с && (и) и || (или)

// Задача 1
//var a1 = 5;
//if (a1 > 0 && a1 < 5) {
//    console.log('Верно');
//} else {
//    console.log('Неверно');
//}

// Задача 2
//var a2 = 5;
//if (a2 === 0 || a2 === 2) {
//    a2 += 7;
//} else {
//    a2 /= 10;
//}
//console.log(a2);

// Задача 3
//var a3 = 1;
//var b3 = 3;
//if (a3 <= 1 && b3 >= 3) {
//    console.log(a3 + b3);
//} else {
//    console.log(a3 - b3);
//}

// Задача 4
//var a4 = 7;
//var b4 = 10;
//if ((a4 > 2 && a4 < 11) || (b4 >= 6 && b4 < 14)) {
//    console.log('Верно');
//} else {
//    console.log('Неверно');
//}

//Задачи на switch-case

// Задача 1
//var num = 3;
//var result;

//switch (num) {
//    case 1:
//        result = 'зима';
//        break;
//    case 2:
//        result = 'весна';
//        break;
//    case 3:
//        result = 'лето';
//        break;
//    case 4:
//        result = 'осень';
//        break;
//    default:
//        result = 'некорректное значение';
//}

//console.log(result);

// Задача 2
//var day = 15;
//var decade;

//switch (true) {
//    case (day >= 1 && day <= 10):
//        decade = 'первая';
//        break;
//    case (day > 10 && day <= 20):
//        decade = 'вторая';
//        break;
//    case (day > 20 && day <= 31):
//        decade = 'третья';
//        break;
//    default:
//        decade = 'некорректное значение';
//}

//console.log(decade);

// Задача 3
//var month = 8;
//var season;

//switch (month) {
//    case 1:
//    case 2:
//    case 12:
//        season = 'зима';
//        break;
//    case 3:
//    case 4:
//    case 5:
//        season = 'весна';
//        break;
//    case 6:
//    case 7:
//    case 8:
//        season = 'лето';
//        break;
//    case 9:
//    case 10:
//    case 11:
//        season = 'осень';
//        break;
//    default:
//        season = 'некорректное значение';
//}

//console.log(season);

// Задача 4
//var str1 = 'abcde';
//var firstCharCheck = (str1[0] === 'a') ? 'да' : 'нет';
//console.log(firstCharCheck);

// Задача 5
//var str2 = '12345';
//var firstDigitCheck = (str2[0] === '1' || str2[0] === '2' || str2[0] === '3') ? 'да' : 'нет';
//console.log(firstDigitCheck);

// Задача 6
//var str3 = '456';
//var sumDigits = parseInt(str3[0]) + parseInt(str3[1]) + parseInt(str3[2]);
//console.log('Сумма цифр: ' + sumDigits);

// Задача 7
//var str4 = '123456';
//var sumFirstHalf = parseInt(str4[0]) + parseInt(str4[1]) + parseInt(str4[2]);
//var sumSecondHalf = parseInt(str4[3]) + parseInt(str4[4]) + parseInt(str4[5]);
//var isEqualSums = (sumFirstHalf === sumSecondHalf) ? 'да' : 'нет';
//console.log(isEqualSums);
