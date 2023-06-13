function task1() {
  let array = [
    16, -37, 54, -4, 72, -56, 47, 4, -16, 25, -37, 46, 4, -51, 27, -63, 4, -54,
    76, -4, 12, -35, 4, 47,
  ];
  let sum = 0;
  let count = 0;
  console.log(array);

  for (let i = 0; i < array.length; i++) {
    sum += array[i];
  }
  for (let i = 0; i < array.length; i++) {
    if (array[i] >= 0) {
      count++;
      console.log("Позитивні елементи:", array[i]);
    }
  }
  console.log("Cума усіх елементів:", sum);
  console.log("Кількість позитивних елементів:", count);
}

function task2() {
  let array = [
    16, -37, 54, -4, 72, -56, 47, 4, -16, 25, -37, 46, 4, -51, 27, -63, 4, -54,
    76, -4, 12, -35, 4, 47,
  ];
  console.log(array);

  let minElem = Math.min(...array);
  let numIndexmin = array.indexOf(minElem);
  console.log("Порядковий номер", numIndexmin);
  console.log("Мінімальний елемент", minElem);

  let maxElem = Math.max(...array);
  let numIndexmax = array.indexOf(maxElem);
  console.log("Порядковий номер", numIndexmax);
  console.log("Максимальний елемент", maxElem);
}

function task3() {
  let array = [
    16, -37, 54, -4, 72, -56, 47, 4, -16, 25, -37, 46, 4, -51, 27, -63, 4, -54,
    76, -4, 12, -35, 4, 47,
  ];
  console.log(array);
  let count = 0;
  for (let i = 0; i < array.length; i++) {
    if (array[i] < 0) {
      console.log(array[i]);
      count++;
    }
  }
  console.log("Кількість негативних елементів:", count);
}

function task4() {
  let array = [
    16, -37, 54, -4, 72, -56, 47, 4, -16, 25, -37, 46, 4, -51, 27, -63, 4, -54,
    76, -4, 12, -35, 4, 47,
  ];
  console.log(array);
  let count = 0;
  let sum = 0;
  for (let i = 0; i < array.length; i++) {
    if (array[i] >= 0 && array[i] % 2 !== 0) {
      console.log(array[i]);
      count++;
      sum += array[i];
    }
  }
  console.log("кількість непарних позитивних елементів:", count);
  console.log("сума непарних позитивних елементів:", sum);
}

function task5() {
  let array = [
    16, -37, 54, -4, 72, -56, 47, 4, -16, 25, -37, 46, 4, -51, 27, -63, 4, -54,
    76, -4, 12, -35, 4, 47,
  ];
  console.log(array);
  let count = 0;
  let sum = 0;
  let product = 1;
  for (let i = 0; i < array.length; i++) {
    if (array[i] >= 0 && array[i] % 2 === 0) {
      console.log(array[i]);
      count++;
      sum += array[i];
      product *= array[i];
    }
  }
  console.log("кількість парних позитивних елементів:", count);
  console.log("сума парних позитивних елементів:", sum);
  console.log("добуток позитивних елементів:", product);
}

function task6() {
  let array = [
    16, -37, 54, -4, 72, -56, 47, 4, -16, 25, -37, 46, 4, -51, 27, -63, 4, -54,
    76, -4, 12, -35, 4, 47,
  ];
  console.log(array);
  let maxElem = 0;
  for (let i = 0; i < array.length; i++) {
    maxElem = Math.max(...array);
    if (maxElem > array[i]) {
      array[i] = 0;
    }
  }
  console.log(maxElem);
  console.log(array);
}
