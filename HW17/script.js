class Person {
  constructor(name, age) {
    this.name = name;
    this.age = age;
  }

  getInfo() {
    console.log(`Ім'я: ${this.name}, Вік: ${this.age}`);
  }
}

const person1 = new Person("Міша", 19);
person1.getInfo();
const person2 = new Person("Вова", 21);
person2.getInfo();
const person3 = new Person("Аліна", 16);
person3.getInfo();

class Car {
  constructor(brand, model, year, license_plate, owner) {
    this.brand = brand;
    this.model = model;
    this.year = year;
    this.license_plate = license_plate;
    this.owner = this.getPersonInfo(owner);
  }

  getPersonInfo(owner) {
    if (owner.age > 18) {
      return owner;
    } else {
      return null;
    }
  }
  getOwner() {
    console.log("Власник:");
    if (this.owner) {
      this.owner.getInfo();
    } else {
      console.log("Немає 18 років");
    }
  }
  getInfo() {
    console.log(
      `Марка: ${this.brand}, Модель: ${this.model}, Рік: ${this.year}, Номерний знак: ${this.license_plate}`
    );
  }
}

const car1 = new Car("Mercedes", "E-class", 2018, "AM 9999 AM", person1);
car1.getInfo();
const car2 = new Car("Audi", "Q8", 2020, "AA 1234 AA", person2);
car2.getInfo();
const car3 = new Car("Toyota", "Camry", 2013, "ВХ 3211 ВХ", person3);
car3.getInfo();
