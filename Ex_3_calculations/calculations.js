"use strict";

/* 1. 10 складываем с 10 и получаем 20
*  2. происходит действие  20 + "10"
*  3. число преобразуется в строку и конкатенирует с другим элементом
*  4. Получается склеивание строк вида "2010"
*  5. Происходит присваивание переменной result  значения "2010"
*  6. С помощью console.log выводим result в консоль*/
let result = 10 + 10 + "10";
console.log(result);

/* 1. Сначала складываем первые два элемента с разными типами данных Number и String
*  2. Происходит конкатенация, после чего мы получаем "1010"
*  3. Опять происходит действие сложения двух разных типов данных Number и String
*  4. И происходит конкатенация
*  5. Происходит присваивание переменной result_1 значения 101010
*  6. С помощью console.log выводим result_1 в консоль*/
let result_1 = 10 + "10" + 10;
console.log(result_1);

/* 1. 10 складываем с 10 и получаем 20
*  2. 20 складываем с +"10" так как перед строчным элементом стоит унарный плюс, то данная строка приводится в число
*  3. После суммирования получаем 30
*  4. Происходит присваивание переменной result_2 значения 30
*  5. С помощью console.log выводим result_2 в консоль*/
let result_2 = 10 + 10 + +"10";
console.log(result_2);

/* 1. происходит приведение типа данных и -"" становится -0 и принимает числовое значение
*  2. 10 будем делить на -0 и получится -Infinity
*  3. Происходит присваивание переменной result_3 значения -Infinity
*  4. С помощью console.log выводим result_3 в консоль*/
let result_3 = 10 / -"";
console.log(result_3);

/* 1. сначала должно было бы произойти приведение из строки в число делителя
*  2. но нет возможности преобразовать строку в число, так как "," не является разделителем дробной части
*  3. и программа воспринимает это как строчный элемент
*  4. при операции деления числа на строку получается значение NaN
*  5. Происходит присваивание переменной result_4 полученного значения NaN
*  6. С помощью console.log выводим result_4 в консоль*/
let result_4 = 10 / +"2,5";
console.log(result_4);