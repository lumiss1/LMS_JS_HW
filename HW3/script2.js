function calc() {
    number1 = prompt("Введіть перше число з яким хочете провести дію складання, віднімання, множення та поділу")
    number2 = prompt("Введіть друге число з яким хочете провести дію складання, віднімання, множення та поділу")
    plus = +number1 + +number2
    minus = number1 - number2
    mult = number1 * number2
    division = number1 / number2
    alert(`Додавання: ${plus} Віднімання: ${minus} Множення: ${mult} Ділення: ${division}`)
}