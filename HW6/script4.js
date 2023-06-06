function task4() {
    let num1 = prompt("Введіть двозначне число:")
    firstnum = num1[0]
    secondnum = num1[1]
    if (firstnum > secondnum) {
        alert(`Число ${firstnum} більше`)
    } else alert(`Число ${secondnum} більше`)
}