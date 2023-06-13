function task1() {
  let arr = [];

  for (let i = 9; i < 20; i++) {
    arr.push(i + 1);
  }

  alert(arr);
}

function task2() {
  let arr = [];

  for (let i = 9; i < 20; i++) {
    arr.push(i + 1);
  }

  for (let i = 0; i < arr.length; i++) {
    arr[i] *= 2;
  }
  alert(arr);
}

function task3() {
  let arr = [];

  for (let i = 0; i < 10; i++) {
    arr += "7 *" + i + "=" + i * 7 + "\n";
  }

  alert(arr);
}
function task4() {
  let arr = [];
  let sum = 0;
  for (let i = 0; i < 15; i++) {
    arr.push(i + 1);
    sum += arr[i];
  }

  alert(sum);
}
function task5() {
  let arr = [];
  let sum = 1;
  for (let i = 14; i < 35; i++) {
    arr.push(i + 1);
  }
  for (let i = 0; i < arr.length; i++) {
    sum *= arr[i];
  }

  console.log(arr);
  console.log(sum);
}
function task6() {
  let arr = [];
  let sum = 0;
  for (let i = 0; i < 500; i++) {
    arr.push(i + 1);
    sum += arr[i];
  }
  avg = sum / arr.length;
  console.log(arr);
  console.log(sum);
  console.log(avg);
}

function task7() {
  let arr = [];
  let sum = 0;
  for (let i = 29; i < 80; i++) {
    arr.push(i + 1);
    if (i % 2 === 0) {
      sum += i;
    }
  }

  console.log(arr);
  console.log(sum);
}

function task8() {
  let arr = [];
  let sum = 0;
  for (let i = 99; i < 200; i++) {
    arr.push(i + 1);
    if (i % 3 === 0) {
      console.log(i);
    }
  }
}

function task9() {
  let arr = [];
  let number = 52;
  let count = 0;
  let sum = 0;
  for (let i = 0; i <= number; i++) {
    if (number % i === 0) {
      arr.push(i);

      if (i % 2 === 0) {
        count++;
        sum += i;
      }
    }
  }
  console.log(arr);
  console.log("кількість:", count);
  console.log("сума його парних дільників:", sum);
}

function task10() {
  let arr = [];
  let result = 0;
  for (let i = 0; i < 10; i++) {
    for (let j = 0; j < 10; j++) {
      result = i * j;
      console.log(i + "*" + j + "=" + result);
    }
    console.log("\\");
  }
}
