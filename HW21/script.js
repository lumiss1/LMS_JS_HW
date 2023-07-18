class Person {
  constructor(name, gender) {
    this.name = name;
    this.gender = gender;
  }
  getInfo() {
    console.log(`Ім'я: ${this.name}, Стать: ${this.gender}`);
  }
}
class Apartment {
  residentarray = [];

  getAddPerson(person) {
    if (person instanceof Person) {
      this.residentarray.push(person);
      console.log(`${person.name} було додано до масиву жителів кваритри`);
    } else console.log("ERROR");
  }
}

class House {
  apartmentmass = [];
  constructor(maxapartment) {
    this.maxapartment = maxapartment;
  }
  getAddApart(apart) {
    if (this.apartmentmass.length < this.maxapartment) {
      this.apartmentmass.push(apart);
      console.log(`Квартиру ${this.apartmentmass.length} було додано до масиву`);
    } else console.log("Квартир максимум");
  }
}
const appartment1 = new Apartment()
const appartment2 = new Apartment()
const appartment3 = new Apartment()
const person1 = new Person("Михайло", "Чоловік");
const person2 = new Person("Аліна", "Жінка");
const person3 = new Person("Володимир", "Чоловік");

person1.getInfo();
person2.getInfo();
person3.getInfo();
appartment1.getAddPerson(person1);
appartment2.getAddPerson(person2);
appartment3.getAddPerson(person3);
console.log(appartment1.residentarray)
console.log(appartment2.residentarray)
console.log(appartment3.residentarray)
const house = new House(1)
house.getAddApart(appartment1)
house.getAddApart(appartment2)
house.getAddApart(appartment3)
console.log(house.apartmentmass)