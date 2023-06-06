function task6() {
    let num1 = prompt("Введіть тризначне число:")

    let firstnum = parseInt(num1[0])
    let secondnum = parseInt(num1[1])
    let lastnum = parseInt(num1[2])

    if (firstnum === secondnum && secondnum === lastnum) {
        result = ("Усі цифри однакові\n")
    } else result = ("Цифри не однакові\n")
    if (firstnum === secondnum || firstnum === lastnum || secondnum === lastnum) {
        result += "Серед цифр є однакові";
    } else result += "Серед цифр немає однакових";
    alert(result)
}