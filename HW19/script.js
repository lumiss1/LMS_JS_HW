class Hamburger {
  constructor(size, stuffing, topping) {
    this.size = size;
    this.stuffing = stuffing;
    this.toppings = [];
  }
  static SIZE_SMALL = { price: 50, calories: 20 };
  static SIZE_BIG = { price: 100, calories: 40 };

  static STUFFING_CHEESE = { price: 10, calories: 20 };
  static STUFFING_SALAD = { price: 20, calories: 5 };
  static STUFFING_POTATO = { price: 15, calories: 10 };

  static TOPPING_SAUCE = { price: 20, calories: 5 };
  static TOPPING_SPICE = { price: 15, calories: 0 };

  addTopping(topping) {
    this.toppings.push(topping);
  }

  calculatePrice() {
    const basePrice = this.size.price + this.stuffing.price;
    const toppingPrice = this.toppings.reduce(
      (sum, topping) => sum + topping.price,
      0
    );
    return basePrice + toppingPrice;
  }

  calculateCalories() {
    const baseCalories = this.size.calories + this.stuffing.calories;
    const toppingCalories = this.toppings.reduce(
      (pr, topping) => pr + topping.calories,
      0
    );
    return baseCalories + toppingCalories;
  }
}

// маленький гамбургер з начинкою з сиру
var hamburger = new Hamburger(Hamburger.SIZE_SMALL, Hamburger.STUFFING_CHEESE);

// добавка з майонезу
hamburger.addTopping(Hamburger.TOPPING_SPICE);

// запитаємо скільки там калорій
console.log("Calories:" + hamburger.calculateCalories());

// скільки коштує
console.log("Price: " + hamburger.calculatePrice());

// я тут передумав і вирішив додати ще приправу
hamburger.addTopping(Hamburger.TOPPING_SAUCE);

// А скільки тепер коштує?
console.log("Price with sauce:" + hamburger.calculatePrice());
