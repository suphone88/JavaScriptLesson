"use strict";
const weekdays = ["mon", "tue", "wed", "thu", "fri", "sat", "sun"];

const openingHours = {
  thu: {
    open: 12,
    close: 22,
  },
  fri: {
    open: 11,
    close: 23,
  },
  sat: {
    open: 0, // Open 24 hours
    close: 24,
  },
};

const restaurant = {
  name: "Classico Italiano",
  location: "Via Angelo Tavanti 23, Firenze, Italy",
  categories: ["Italian", "Pizzeria", "Vegetarian", "Organic"],
  starterMenu: ["Focaccia", "Bruschetta", "Garlic Bread", "Caprese Salad"],
  mainMenu: ["Pizza", "Pasta", "Risotto"],

  orderDelivery: function (obj) {
    console.log(obj);
  },
  orderPizza: function (mainIng, ...othersIng) {
    console.log(mainIng, ...othersIng);
  },
};
restaurant.orderPizza("Mushroom", "Onions", "Olive", "Spinich");

const menu = [...restaurant.mainMenu, ...restaurant.starterMenu];
console.log(menu);

const days = ["mon", "tue", "wed", "thu", "fri", "sat", "sun"];

for (const day of days) {
  const open = restaurant.openingHours[day]?.open ?? "closed";
  console.log(`On ${day}, we open at ${open}`);
}

// for (const [i, val] of menu.entries()) {
//   console.log(`${i + 1} : ${val}`);
// }

// for (const newMenu of menu.entries()) {
//   console.log(newMenu);
// }

// for (let i = 0; i < menu.length; i++) {
//   console.log(menu[i]);
// }

// const restaurant1 = {
//   resName: "Hello",
//   numGuest: 10,
// };
// const restaurant2 = {
//   resName: "World",
//   owner: "Jonas",
// };

// restaurant1.owner = restaurant1.owner && "Anynomous";
// restaurant2.owner = restaurant2.owner && "Anynomous";
// restaurant1.owner &&= "Anynomous";
// restaurant2.owner &&= "Anynomous";
// console.log(restaurant1.owner);
// console.log(restaurant2.owner);

//console.log("Hello" && 23 && undefined && null && 0);

// if (restaurant.orderPizza) {
//   restaurant.orderPizza("Mushrooms", "Spinach");
// }

// restaurant.orderPizza &&
//   restaurant.orderPizza("mushrooms", "spinach", "goodFood");

//const guest = restaurant.numGuest ? restaurant.numGuest : 30;
// restaurant.numGuest = 15;
// const guest = restaurant.numGuest ?? 20;
// console.log(guest);

// console.log("Are you ok" || "hello");
// console.log("Greeting" || 5);
// console.log(undefined || 20);
// console.log(45 || undefined);
// console.log(null || "Hello World");
// console.log(null || undefined);
// console.log(undefined || null);
// restaurant.orderDelivery({
//   time: "12:30",
//   address: "North Dagon",
//   starterMenu: 2,
//   mainMenu: 0,
// });
// const [Italian, ...others] = restaurant.categories;
// console.log(...others);
// console.log(others);

// const { sat, ...weekdays } = restaurant.openingHours;
// console.log(weekdays);
//console.log(...weekdays);
// const arr = [1, 2];
// const newArr = [5, 4, 3, ...arr];
// console.log(...newArr);

// const newMenu = [...restaurant.mainMenu, "Salad"];
// console.log(...newMenu);

// const schoolName = "BMPS Education Center";
// // const nameArr = [...schoolName];
// // console.log(nameArr);
// console.log(`Hello ${schoolName}`);

// const arr = [1, 2, ...[3, 4]];
// console.log(arr);

// const [a, b, ...others] = [1, 2, 3, 4, 5, 6];
// console.log(a, b, ...others);

// const [firstFood, secondFood, ...others] = [
//   ...restaurant.starterMenu,
//   ...restaurant.mainMenu,
// ];
// console.log("firstFood :", firstFood);
// console.log("Second Food :", secondFood, "Others :", ...others);

// const add = function (...numbers) {
//   let sum = 0;
//   for (let i = 0; i < numbers.length; i++) {
//     sum += numbers[i];
//   }
//   console.log(sum);
// };
// add(2, 3);
// add(2, 3, 5);
