function task2() {
    let diskm = prompt("Введіть відстань у кілометрах:")
    let disft = prompt("Введіть відстань у футах:")

    let distokm = disft * 0.305

    if (diskm > distokm) {
        alert(`Відстань у футах меньша`)
    }else alert(`Відстань у кілометрах меньша`)
}