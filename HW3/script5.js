function last() {
    numbers = prompt("Введіть п'ятизначне число:", 12345)
    digit1 = numbers % 10
    numbers = Math.floor(numbers / 10)
    digit2 = numbers % 10
    numbers = Math.floor(numbers / 10)
    digit3 = numbers % 10
    numbers = Math.floor(numbers / 10)
    digit4 = numbers % 10
    numbers = Math.floor(numbers / 10)
    digit5 = numbers % 10

    alert(`${digit5} ${digit4} ${digit3} ${digit2} ${digit1}`)
}