class Person {
  constructor(name, age) {
    this.name = name;
    this.age = age;
  }
  submit() {
    console.log(`Ім'я: ${this.name}, Вік: ${this.age}`);
  }
}

const person1 = new Person("Міша", 19);
person1.submit();
const person2 = new Person("Вова", 21);
person2.submit();
const person3 = new Person("Аліна", 16);
person3.submit();

class Car {
  constructor(brand, model, year, license_plate, owner) {
    this.brand = brand;
    this.model = model;
    this.year = year;
    this.license_plate = license_plate;
    this.owner = owner;
  }
  submit_car() {
    console.log(
      `Марка: ${this.brand}, Модель: ${this.model}, Рік: ${
        this.year
      }, Номерний знак: ${this.license_plate}, Власник: ${this.person()}`
    );
  }
  person() {
    if (this.owner.age > 18) {
      return this.owner.name;
    } else {
      return "Людині немає 18 років";
    }
  }
}
const car1 = new Car("Mercedes", "E-class", 2018, "AM 9999 AM", person1);
car1.submit_car();
const car2 = new Car("Audi", "Q8", 2020, "AA 1234 AA", person2);
car2.submit_car();
const car3 = new Car("Tayota", "Camry", 2013, "ВХ 3211 ВХ", person3);
car3.submit_car();
