function pow(num, degree) {
  if (degree === 1) {
    return num;
  } else {
    return num * pow(num, degree - 1);
  }
}

let x = prompt("число:")
let y = prompt("ступінь:")
alert(pow(x, y));
