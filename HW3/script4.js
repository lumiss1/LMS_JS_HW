function average() {
    value1 = prompt("Число перше")
    value2 = prompt("Число друге")
    value3 = prompt("Число третє")

    avg = (+value1 + +value2 + +value3) / 3
    alert(`середнє арифметичне трьох чисел: ${avg}`);
}