'use strict';

// const first = () => {
//   let a = 1;
//   const b = second();
//   a = a + b;
//   //return a;
//   console.log(a);
// };
// function second() {
//   var c = 2;
//   return c;
//   //console.log(c);
// }

// const myName = 'jonas';

// function first() {
//   const age = 30;
//   if (age >= 30) {
//     const decade = 3;
//     var millenial = true;
//   }
//   function second() {
//     const job = 'teacher';
//     console.log(`${myName} is a ${age} old ${job}`);
//   }
//   second();
// }
// first();

// const calcAge = function (birthYeah) {
//   const age = 2037 - birthYeah;
//   console.log(firstName, age);
//   //return age;
// };
// const firstName = 'Jonas';
// calcAge(1991);

// const calcAge = function (birthYeah) {
//   const age = 2037 - birthYeah;

//   function printAge() {
//     let outPut = `${firstName},your are ${age} and born in ${birthYeah}`;
//     console.log(outPut);

//     if (birthYeah >= 1981 && birthYeah <= 1996) {
//       var millenial = true;
//       const firstName = 'Steven';
//       outPut = 'New OutPut';
//       const str = `Oh, you are a millenial , ${firstName}`;
//       console.log(str);

//       function add(a, b) {
//         return a + b;
//       }
//       console.log(add(2, 3));
//     }
//     console.log(millenial);
//     console.log(outPut);
//   }
//   printAge();
//   return age;
// };
// const firstName = 'Jonas';
// calcAge(1991);
// const myName = 'Jonas';

// if (myName === 'Jonas') {
//   console.log(`Jonas is a ${job}`);
//   const age = 2037 - 1989;
//   console.log(age);
//   const job = 'teacher';
//   console.log(x);
// }
// console.log(me);
// console.log(job);
// console.log(year);

// var me = 'jonas';
// let job = 'teacher';
// const year = 1991;

// console.log(addDecl(2, 3));
// console.log(addExpr(2, 3));
// console.log(addArrow(2, 3));

// function addDecl(a, b) {
//   return a + b;
// }
// const addExpr = function (a, b) {
//   return a + b;
// };
// const addArrow = (a, b) => a + b;

// const numProducts = 10;

// if (numProducts === 10) {
//   deleteShoppingCart();
// }

// function deleteShoppingCart() {
//   console.log('All products deleted!');
// }

//console.log(this);
const calcAge = function (birthYeah) {
  console.log(2037 - birthYeah);
};
calcAge(1991);

const calcAgeArrow = birthYeah => {
  console.log(2037 - birthYeah);
};
calcAgeArrow(1980);
const jonas = {
  year: 1991,
  calcAge: function () {
    console.log(this);
    console.log(2037 - this.year);
  },
};
jonas.calcAge();

const matilda = {
  year: 2017,
};
matilda.calcAge = jonas.calcAge;
matilda.calcAge();
