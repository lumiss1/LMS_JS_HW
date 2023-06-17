function task1(params) {
  const array = [1, 10, "Yes", true, 2.5];
  console.log(array);
  function avgnum() {
    let result = 0;
    let count = 0;
    for (let i = 0; i < array.length; i++) {
      if (typeof array[i] === "number") {
        count++;
        result += array[i];
      }
    }
    return result / count;
  }
  let average = avgnum();
  console.log(average);
}

function task2(params) {
  let x = 0;
  let y = 0;
  let znak;

  function doMath(x, y, znak) {
    let result = 0;
    if (znak === "+") {
      result = x + y;
    } else if (znak === "-") {
      result = x - y;
    } else if (znak === "*") {
      result = x * y;
    } else if (znak === "/") {
      result = x / y;
    } else if (znak === "%") {
      result = x % y;
    } else if (znak === "^") {
      result = x ** y;
    }
    return result;
  }

  x = +prompt("Введіть перше число:");
  y = +prompt("Введіть друге число:");
  znak = prompt("Введіть яку дію хочете зробити (+, -, *, /, %, ^):");

  console.log(x);
  console.log(y);
  console.log(znak);

  let final = doMath(x, y, znak);
  console.log("Результат дії:", final);
}

function task3() {
  let first_array = [];
  function multarray(x, y) {
    for (let i = 0; i < x; i++) {
      let second_array = [];
      for (let j = 0; j < y; j++) {
        let value = prompt("Заповніть масив:");
        second_array.push(value);
      }
      first_array.push(second_array);
    }
    return first_array;
  }

  let x = +prompt("Введіть довжину основного масива:");
  let y = +prompt("Введіть довжину внутрішнього масива");

  let result = multarray(x, y);
  console.log(result);
}

function task4() {
  function removeChars(str, lettersToRemove) {
    for (let i = 0; i < lettersToRemove.length; i++) {
      let regex = new RegExp(lettersToRemove[i], "g");
      str = str.replace(regex, " ");
    }
    return str;
  }

  let inputstr = prompt("Введіть рядок:");
  let inputletters = prompt("Введіть символи для видалення через кому:");
  lowstr = inputstr.toLowerCase();
  lowletters = inputletters.toLowerCase();
  let lettersToRemove = lowletters.split(",");

  let result = removeChars(lowstr, lettersToRemove);
  console.log(result);
}
