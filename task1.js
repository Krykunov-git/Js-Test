// // # Модуль 1. Занятие 1. Переменные, типы и операторы

// // ## Example 1 - Математические операторы

// // Выведи на экран общее количество яблок и винограда. Разницу яблок и винограда.

// ```js
// const apples = 47;

// const grapes = 135;
// const total = 47 + 153;
// console.log(total);

// const diff = grapes - apples ;
// console.log(diff)


// // ## Example 2 - Комбинированные операторы

// // Замени выражение переопределения комбинированным оператором `+=`.

// ```js
// // let students = 100;
// // students = students + 50;
// // console.log(students);
// // ```

// // ## Example 3 - Приоритет операторов

// // Разбери приоритет операторов в инструкции присвоения значения переменной
// // `result`.

// ```js
// const result = 155 + 15695 * 55 ;
// console.log(result);



// // ## Example 4 - Класс Math

// // Напиши скрипт, который выводит в консоль округленные вверх/вниз и т.д. значения
// // переменной `value`. Используй методы `Math.floor()`, `Math.ceil()` и
// // `Math.round()`. Проверь что будет в консоли при значениях `27.3` и `27.9`.

// ```js
// const value = 27.5;
// ```

// // ## Example 5 - Шаблонные строки

// // Составь фразу с помощью шаблонных строк `A has B bots in stock`, где A, B -
// // переменные вставленные в строку.

// ```js
// const companyName = 'Cyberdyne Systems';
// const repairBots = 150;
// const defenceBots = 50;
// const message = ``;
// console.log(message); // "Cyberdyne Systems has 200 bots in stock"
// ```

// // ## Example 6 - Методы строк и чейнинг

// // Напиши скрипт который рассчитывает индекс массы тела человека. Для этого
// // необходимо разделить вес в киллограммах на квадрат высоты человека в метрах.

// // Вес и высота хранятся в переменных `weight` и `height`, но не как числа, а в
// // виде строк (специально для задачи). Нецелые числа могут быть заданы в виде
// // `24.7` или `24,7`, то есть в качестве разделителя дробной части может быть
// // запятая.

// // Индекс массиы тела необходимо округлить до одной цифры после запятой;

// ```js
// let weight = '88,3';
// let height = '1.75';

// const bmi = ;
// console.log(bmi); // 28.8
// ```

// // ## Example 7 - Операторы сравнения и приведение типов

// // Каким будет результат выражений?

// ```js
// console.log(5 > 4);

// console.log(10 >= '7');

// console.log('2' > '12');

// console.log('2' < '12');

// console.log('4' == 4);

// console.log('6' === 6);

// console.log('false' === false);

// console.log(1 == true);

// console.log(1 === true);

// console.log('0' == false);

// console.log('0' === false);

// console.log('Papaya' < 'papaya');

// console.log('Papaya' === 'papaya');

// console.log(undefined == null);

// console.log(undefined === null);
// ```

// // ## Example 8 - Логические операторы

// // Каким будет результат выражений?

// ```js
// console.log(true && 3);

// console.log(false && 3);

// console.log(true && 4 && 'kiwi');

// console.log(true && 0 && 'kiwi');

// console.log(true || 3);

// console.log(true || 3 || 4);

// console.log(true || false || 7);

// console.log(null || 2 || undefined);

// console.log((1 && null && 2) > 0);

// console.log(null || (2 && 3) || 4);
// ```

// // ## Example 9 - Значение по умолчанию и оператор нулевого слияния

// // Отрефактори код так, чтобы в переменную `value` присваивалось значение
// // переменной `incomingValue`, если оно не равно `undefined` или `null`. В
// // противном случае должно присваиваться значение `defaultValue`. Проверь работу
// // скрипта для слепдующих значений переменной `incomingValue`: null, undefined, 0,
// // false. Используй оператор `??` (nullish coalescing operator).

// ```js
// const incomingValue = 5;
// const defaultValue = 10;
// const value = incomingValue || defaultValue;
// console.log(value);
// ```

// // ## Example 10 - Опертор % и методы строк

// // Напиши скрипт который переведёт значение `totalMinutes` (количество минут) в
// // строку в формате часов и минут `HH:MM`.

// - 70 покажет 01:10
// - 450 покажет 07:30
// - 1441 покажет 24:01

// ```js
// const totalMinutes = 70;

// const hours = Math.floor(totalMinutes / 60);
// const minutes = totalMinutes % 60;
// console.log(hours);
// console.log(minutes);

// const doubleDigitHours = String(hours).padStart(2, 0);
// const doubleDigitMinutes = String(minutes).padStart(2, 0);
// console.log(`${doubleDigitHours}:${doubleDigitMinutes}`);
// ```


// *==========================================================================================

// function checkStorage(available, ordered) {
//     // Change code below this line
//     let message;
  
//     if (ordered === 0) {
//       message = "Your order is empty!";
//     } else if (ordered > available) {
//       message = "Your order is too large, not enough goods in stock!";
//     } else {
//       message = "The order is accepted, our manager will contact you";
//     }
//   console.log(message);
//     return message;
//     // Change code above this line
//   }

  
//   checkStorage(100, 50);
//   checkStorage(100, 130)


// fruitsArrayLength
// ====================================================================================================




// const fruits = ["apple", "peach", "pear", "banana"];
// const  fruitsArrayLength =(fruits)

// console.log(fruitsArrayLength .length)

// function getExtremeElements(array) {
//     const getExtremeElements = ([getExtremeElements.length -1] , [0]);
//     // Change code below this line
//   console.log(getExtremeElements);
//     // Change code above this line
//     getExtremeElements(["apple", "peach", "pear", "banana"])
//   }


// -------------------------------------------------------------------------------------
// Навчання!!!!!!!!!!!!!
// const a = [5] ;
// const b = a ;
// console.log(a);
// console.log(b);
// a[0] = 500 ;
// console.log(a);
// console.log(b);

// const pipi = ["apple", "peach", "pear", "banana"];
// console.log(pipi.length -1);

// let a =10;
// let b =a;
// console.log(a);
// console.log(b);
//  a =25;
// console.log(a);
// console.log(b);
  
// const Test = ["apple", "peach", "pear", "banana"];
// console.table(Test);
// const index = Test.length - 1;
// for (let i = 0; i <= index ; i += 1 )
//  {
//     console.table(Test[i]);

// }

// Test[1] = 55;

// console.log(Test[0]);
// console.log(Test);  
// const index = Test.length -1;
// console.log (index);
// console.log(Test); 

// const Test = ["apple", "peach", "pear", "banana"];
// console.table(Test);
// for(const Testers of Test){
// console.log(Testers);

// }

// const cart = [54, 28, 105, 70, 92, 17, 120, 55, 110, 11];

// let total =0;
// for(const fof of cart ){
//     total += fof ;
// }
// for (let i = 0; i < cart.length; i +=1) {
//     console.log(cart[i]);
//     total += cart[i];



// }
// for (let i = 0; i < cart.length; i +=1){
//     console.log(cart[i]);
//     total += cart[i];
// }
// console.log( `Total` , total);

// 22222222222----------------------------------
// const numbers = [ 1, 5, 8, 9, 12, 4, 15, 27, 30, 18, 11, 14];
// let total = 0;


// for (let i = 0 ; i < numbers.length ; i +=1) {
//     const number = numbers[i];
//     console.log(number);
    

//     if(numbers[i] %2 === 0 ){
//     console.log(`Ділиться на 2 !!!`);
//     total += number;
// }
// }
// for (const number of numbers){
//     console.log(number);

//     if(number %2 === 0 ){
//             console.log(`${number} - Урааа`);
//             total += number;
//         }
// }
// for (const number of numbers){
    

//     if(number %2 !== 0 ){
//         console.log(`Цю дію не виконувати !!!`, number);    
//         continue;  
//         }
//         console.log(`${number} - Урааа`);
//         total += number;
// }


// console.log(`Total:`, total);

// 3---------------
// const logins = [`m4ngoDoge`,`k1widab3st`, 'poly1scute',  `aj4xth3m4n`]
// const loginTofind = 'poly1scute' ; 
// let message = '';

// for (const login of logins){

//     if (login === loginTofind ){

//         message ='Користувач знайдений';
//         break;
//     }
//     message = 'Користувач не знайдений'
// }
// console.log(message);



// let message = '';

// for (let i = 0; i < logins.length ; i +=1){
// const login = logins[i];

// if( login === loginTofind ){

//     message = 'КОристувач знайдений';
//     break;
// }
// message = 'Користувач не знайдений ';

// }
// console.log(message);
// console.log(logins.includes('poly1scute'));
// const message = logins.includes(loginTofind) ? 'ага' : ' ні' ;
// console.log(message);





// 4++++++++++++++++++++++++++++++++++++++++++++++++

// const numbers = [51, 18, 13, 24, 7, 85, 19 ];
//  let litle = numbers[0];

//  for (const number of numbers){

// if( number < litle){

//     litle = number;
// }

//  }
//  console.log(litle);


// 5+++++++++++++++++++++++++++++++++++++++++++++++++++++++++++


// const friends = [`Mango`,`Poly`, 'Kiwi', `Ajax`];
// //  let strin = '';

// //  for (const friend of friends){

// //     strin += friend  +'555';
// //  }
// //  strin = strin.slice(0, strin.length - 3);
// const strin = friends.join(',');
//  console.log(strin);
 

// 6+++++++++++++++++++++++++++++++++++++++++++++++++++++++

// const title = 'Top 10 benefits of React Framework';

// const normaltitle = title.toLowerCase();
// // console.log(normaltitle);



// const word = normaltitle.split(' ');
// // console.log(word);


// const slug = word.join('-');
// const slug1 = title.toLowerCase().split(' ').join('-');


// console.log(slug);


// 7++++++++++++++++++++++++++++++++++++++++
// const array1 = [5, 10, 15, 20];
// const array2 = [10, 20, 30, ];
// let total = 0;
// const numbers = array1.concat(array2);


// for(const number of numbers){
//     total += number;
// }
// console.log(total);


// 8+++++++++++++++++++++++++++++++++++++++++++++++++



// const add = function add (x, y){
//     console.log(x);
//     console.log(y);
//     const result = x + y;
//     console.log('x + y=', result);

    

//     console.log('Працюєєєє')
// }
// add(5, 3);
// add(6, 7);

// add(2, 5);








//  const numbers = [51, 18, 13, 24, 7, 85, 19 ];
//  let litle = numbers[0];

//  for (const number of numbers){

// if( number < litle){

//     litle = number;
// }

//  }
//  console.log(litle);


// 
// const numbers = ['Top 10 benefits of React Framework'];
// numbers.push('fjdfdfd');
// numbers.shift();


// console.log(numbers);



function makeArray(firstArray, secondArray, maxLength ) {

  let frtrt = firstArray.concat(secondArray);

  
  
  console.log(frtrt);

  
  
    


  }
console.log(makeArray);

makeArray(["Earth", "Jupiter"], ["Neptune", "Uranus"], 2);
makeArray(["Mango", "Poly"], ["Ajax", "Chelsea"],3); 
makeArray(["Mango", "Poly", "Houston"], ["Ajax", "Chelsea"], 4);
makeArray(["Earth", "Jupiter"], ["Neptune", "Uranus", "Venus"], 0) 