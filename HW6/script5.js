function task5() {
    let num1 = prompt("Введіть тризначне число:")

    let firstnum = parseInt(num1[0])
    let secondnum = parseInt(num1[1])
    let lastnum = parseInt(num1[2])

    let evennum = firstnum + secondnum + lastnum;

    if (evennum % 2 === 0) {
        result = "Сума цифр є парна\n";
    } else result = "Сума є непарною\n";

    if (evennum % 5 === 0) {
        result += "Сума кратна п'яти\n";
    } else result += "Сума не кратна п'яти\n";

    if ((firstnum * secondnum * lastnum) > 100) {
        result += "Добуток цифр є більше\n";
    } else result += "Добуток цифр є меньше\n";
    alert(result);
}
