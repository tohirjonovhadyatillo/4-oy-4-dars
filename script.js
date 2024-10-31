// let num = 1221;

// let birlar = num % 10;
// let onlar = ((num - birlar) / 10 ) % 10;
// let yuzlar = (num - num % 100) / 100;
// let minglar = Math.trunc(num / 1000) % 10

// console.log(minglar)

// // let res = false;

// // if (birlar + 1 == onlar && onlar + 1 == yuzlar || yuzlar - 1 == onlar && onlar - 1 == birlar){
// //     res = true;
// // }

// // console.log(res)













// let num = 100;

// console.log(Math.floor(num))
// console.log(Math.ceil(num))
// console.log(Math.trunc(num))
// console.log(Math.round(num))

// console.log(num.toFixed(2));
// console.log(Math.trunc(Math.random() * 100))




// confirm(2 + "6");
// confirm("2" + 4 + 3);
// confirm(2 + 4 + "3");
// confirm("2" + true)
// confirm("2" + undefined);
// confirm(2 * true);


// numberga olib otish
// let a = "5";
//  let res =Number(a)
// let res = a * 1;
// console.log(Number("6"))

// stringga olib otish
// let a = true;
// let res = a * "";


// 1- misol
// for (let i = 1; i <= 10 ; i+= 1){
//     console.log(i)
// }


// 2-misol
// for (let i = 2; i <= 20 ; i+= 2){
//      console.log(i)
// }

// 3-Misol 
// for (let i = 1; i <= 20 ; i+= 2){
//      console.log(i)
// }

// 4-misol
// let sum = 0;
// for (let i = 1; i <= 100 ; i+= 1){
//     sum += i;
// }
// console.log(sum)

// 5-misol 
// let sum = 0;
// for (let i = 1; i <= 50; i++) {
//     if (i % 2 === 0) {
//         sum += i;
//     }
// }
// console.log(sum)

// 6-misol 
// let sum = 0;
// for (let i = 1; i <= 50; i += 2){
//     sum += i;
// }
// console.log(sum)

// 7-misol 
// for (let i = 0; i < 10; i++){
//     console.log(5);
// }

// 8-misol 
//  for (let i = 10; i >= 1 ; i--){
//     console.log(i)
// }

// 9-misol 
// let num = +prompt ("son");
// num = num ** 2;
// console.log(num )

// 10-misol
// let num = +prompt("son");
// num = num ** 3;
// console.log(num);

// 11-misol 
// let num1 = +prompt ("son");
// let num2 = +prompt ("son");

// for(let i = num1; num1 <= num2; i++ ){
// console.log(i) ;
// }


// 12 13-misol
// shu savollarni tushunmadim 


// 14-misol 
// for(let i = 3 ; i <= 99; i += 3){
//     console.log(i)
// }

// 15-misol 
// let son = +prompt("son");
// for (let i = son; i <= son + 20; i++) {
//     if (i % 2 === 0) {
//         console.log(i); 
//     }
// }

// 16-misol 
// for(let i = 5; i <= 100; i += 5){
//     console.log(i);
// }

// 17-misol 
// let son = +prompt("son");
// let sum = 0;
// for (let i = son; i <= son * 10; i++) {
//     sum += i;
// }
// console.log(sum);

// 18-misol 
// for (let i = 1 ; i <= 10 ; i++){
//     let kvadrat = i * i;
//     console.log(kvadrat)
// }

// 19-misol 
// let sum;

// for (let i = 1; i <= 10; i++) {
//     sum = 1; 
//     for (let a = 1; a <= i; a++) {
//         sum *= a;
//     }
//     console.log(`Son ${i}, Faktorial ${sum}`);
// }

// 21-misol 
// for (let i = 4 ; i <= 100; i += 4){
//     console.log(i)
// }

// 22-misol 
// let sum = 0;

// for (let i = 1; i <= 10; i++) {
//     sum += i * i;
// }

// console.log(sum);  

// 23-misol 
// for(let i = 20; i >= 1 ; i--){
//     console.log(i)
// }

// 24-misol 
// for(let i = 7; i <= 49; i += 7){
//     console.log(i)
// }

// 25-misol 
// for (let i = 1; i <= 100; i++) {
//     console.log(i);
//     if (i % 10 === 0) {
//         console.log('');
//     }
// }

// =====qiyinro masalalar ====

// 1-misol 
// for (let i = 1; i <= 100; i++) {
//     if (i % 3 == 0 && i % 5 == 0) {
//         console.log(i);
//     }
// }

// 2-misol 
// for (let i = 1; i <= 50; i++) {
//     if (i % 2 == 0 && i % 3 == 0) {
//     console.log(i);
//     }
// }

// 3-misol 
// let son = +prompt("son");
// let sum = 1;

// for (let i = son; i >= 1; i--) {
//     sum *= i;
// }

// console.log(sum);

// 4-misol 
// let son = +prompt("son");
// for (let i = 0; i < 10; i++) {
//     if (son % 2 !== 0) {
//         son++;
//     }
//     console.log(son);
//     son += 2;
// }

// 5-misol 
// let son1 = +prompt("son");
// let son2 = +prompt("son");

// let minSon = Math.min(son1, son2);
// let maxSon = Math.max(son1 , son2);
// let sum = 0;
// for (let i = minSon; i <= maxSon; i++) {
//     if (i % 2 !== 0) {
//         console.log(i);
//         sum += i;
//     }
// }

// console.log(sum);

// 6-misol 
// for (let i = 1; i <= 100; i++) {
//     if (i % 4 === 0 && i % 6 !== 0) {
//         console.log(i);
//     }
// }

// 7-misol 
// let sum = 0;
// for (let i = 1; i <= 20; i++) {
//     if (i % 2 === 0) {
//         sum += i * i;
//     }
// }

// console.log(sum);

// 8-9-misol 
// ustoz shularga ham tushunmadim

// 10-misol 
// for (let i = 1; i <= 50; i++) {
//     if (i % 2 === 0) {
//         console.log(`${i} juft`);
//     } else {
//         console.log(`${i} toq`); 
//     }
// }
