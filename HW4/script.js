birthday = prompt("Рік народження:")
city = prompt("Місто проживання:")
sport = prompt("Улюблений спорт:")
userCity = city.toLowerCase();
userSport = sport.toLowerCase();
if (birthday == null) {
    alert("Шкода, що Ви не захотіли ввести свій рік")
}
if (city == null) {
    alert("Шкода, що Ви не захотіли ввести своє місто")
}
if (sport == null) {
    alert("Шкода, що Ви не захотіли ввести свій спорт")
}
kyiv = "київ"
wash = "вашингтон"
london = "лондон"
ua = "України"
usa = "Америки"
uk = "Англії"
function ageUser1() {
    alert(`Ваш вік: ${2023 - birthday}`)
}

function city1() {
    if (userCity == kyiv) {
        alert(`Ти живеш у столиці ${ua}`)
    } else if (userCity == wash) {
        alert(`Ти живеш у столиці ${usa}}`)
    } else if (userCity == london) {
        alert(`Ти живеш у столиці ${uk}`)
    } else if (city !== kyiv && wash && london)
        alert(`Ти живеш у місті ${city}`)
}
cityUser = city1();
ageUser = ageUser1();

alert(`${ageUser}, ${cityUser}`);
