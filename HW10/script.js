array = [];
let length = prompt("Введіть довжину масива:");
for (let i = 0; i < length; i++) {
  let elem = prompt("Введіть елемент масиву:");
  let numelem = Number(elem);
  array.push(numelem);
}
console.log("Звичайний масив:", array);

function compareNumeric(a, b) {
  if (a > b) return 1;
  if (a == b) return 0;
  if (a < b) return -1;
}

array.sort(compareNumeric);
console.log("Відсортований за зростанням масив:", array);

array.splice(1, 3);

console.log("Видалено елементи з 2 по 4:", array);
