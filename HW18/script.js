class Student {
  constructor(firstname, secondname, birthyear, points) {
    this.firstname = firstname;
    this.secondname = secondname;
    this.birthyear = birthyear;
    this.points = points;
    this.attendance = new Array(25);
    this.currentIndex = 0;
  }

  getAge() {
    let date = new Date().getFullYear();
    let age = date - this.birthyear;
    return age;
  }
  getInfo() {
    console.log(
      `Ім'я: ${this.firstname} ${this.secondname}, Рік народження: ${
        this.birthyear
      }, Вік: ${this.getAge()}, Оцінки: ${
        this.points
      }, Середня оцінка: ${this.getAvgpoint()}`
    );
  }
  getAvgpoint() {
    let sum = this.points.reduce(
      (accumulator, currentValue) => accumulator + currentValue,
      0
    );
    let average = sum / this.points.length;
    return average;
  }

  present() {
    this.updateAttendance(true);
  }

  absent() {
    this.updateAttendance(false);
  }

  updateAttendance(value) {
    if (this.currentIndex < 25) {
      this.attendance[this.currentIndex] = value;
      this.currentIndex++;
    } else {
      console.log("Масив відвідуваності заповнений.");
    }
  }
  summary() {
    const avgPoint = this.getAvgpoint();
    const avgAttendance = this.getAvgattendance();
    if (avgPoint > 90 && avgAttendance > 0.9) {
      return console.log("Молодець!");
    } else if (avgPoint > 90 || avgAttendance > 0.9) {
      return console.log("Добре, але можна краще ");
    } else return console.log("Редиска!");
  }
  getAvgattendance() {
    let suma = this.attendance.filter((status) => status === true).length;
    let avgatt = suma / this.attendance.length;
    return avgatt;
  }
}

const student1 = new Student("Misha", "Lubkovskiy", 2003, [90, 90, 88, 98, 98]);
student1.getInfo();
for (let i = 0; i < 25; i++) {
  student1.present();
}

console.log(student1.attendance);
console.log("Середні відвідування:", student1.getAvgattendance());
student1.summary();

const student2 = new Student(
  "Oleksii",
  "Lubkovskiy",
  2002,
  [88, 65, 74, 90, 80]
);
student2.getInfo();
for (let i = 0; i < 23; i++) {
  student2.present();
}
console.log(student2.attendance);
console.log("Середні відвідування:", student2.getAvgattendance());
student2.summary();

const student3 = new Student("Alina", "Lubkovska", 2002, [67, 88, 90, 90, 44]);
student3.getInfo();
for (let i = 0; i < 12; i++) {
  student3.present();
}
console.log(student3.attendance);
console.log("Середні відвідування:", student3.getAvgattendance());
student3.summary();
