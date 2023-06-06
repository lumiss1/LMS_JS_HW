function task3() {
    let num1 = prompt("Введіть любе число:")
    lastnum = num1 % 10
    
    if (lastnum % 2 == 0) {
        alert(`Число ${lastnum} є парним`)
    }else alert(`Число ${lastnum} є непарним`)
}