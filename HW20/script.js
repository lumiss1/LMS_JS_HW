class SuperMath {
    check(obj) {
      const { X, Y, znak } = obj;
      const validOperators = ["+", "-", "/", "*", "%"];
  
      if (validOperators.includes(znak)) {
        const result = this.performOperation(X, Y, znak);
        console.log(`Result: ${result}`);
      } else {
        console.log("ERROR operator!");
        this.input();
      }
    }
  
    performOperation(X, Y, znak) {
      switch (znak) {
        case "+":
          return X + Y;
        case "-":
          return X - Y;
        case "/":
          return X / Y;
        case "*":
          return X * Y;
        case "%":
          return X % Y;
        default:
          return null;
      }
    }
  
    input() {
      const X = parseFloat(prompt("Enter X:"));
      const Y = parseFloat(prompt("Enter Y:"));
      const znak = prompt("Enter znak (+, -, /, *, %):");
  
      this.check({ X, Y, znak });
    }
  }
  
  const p = new SuperMath();
  const obj = { X: 12, Y: 3, znak: "/" };
  p.check(obj);