function task7() {
    let num = prompt("Введіть шестизначне число:", 123321)
    let reversedNum = num.split('').reverse().join('')

    if (num === reversedNum) {
        alert("Число є дзеркальним.")
    } else alert("Число не є дзеркальним.")
}