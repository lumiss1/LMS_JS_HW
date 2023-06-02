birthday = prompt("Рік народження:");
city = prompt("Місто проживання:");
sport = prompt("Улюблений спорт:");

if (birthday !== null) {
    age = 2023 - parseInt(birthday);
    result += "Ваш вік: " + age + " років\n";
} else {
    result += "Шкода, що Ви не захотіли ввести свій рік народження.\n";
}

if (city !== null) {
    userCity = city.toLowerCase();
    if (userCity === "київ") {
        result += "Ти живеш у столиці України\n";
    } else if (userCity === "вашингтон") {
        result += "Ти живеш у столиці Америки\n";
    } else if (userCity === "лондон") {
        result += "Ти живеш у столиці Великої Британії\n";
    } else {
        result += "Ти живеш у місті " + city + "\n";
    }
} else {
    result += "Шкода, що Ви не захотіли ввести своє місто проживання.\n";
}

if (sport !== null) {
    userSport = sport.toLowerCase();
    if (userSport === "баскетбол") {
        result += "Круто! Хочеш стати Майкл Джордан";
    } else if (userSport === "футбол") {
        result += "Круто! Хочеш стати Леонель Мессі";
    } else if (userSport === "бокс") {
        result += "Круто! Хочеш стати Олександр Усик";
    } else {
        result += "ШО?";
    }
} else {
    result += "Шкода, що Ви не захотіли ввести свій улюблений спорт.\n";
}

alert(result);