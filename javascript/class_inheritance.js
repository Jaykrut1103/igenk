class Car {
    constructor(brand) {
      this.carname = brand;
    }
    display() {
      return 'I have a ' + this.carname;
    }
  }
  
  class Model extends Car {
    constructor(brand, mod) {
      super(brand);
      this.model = mod;
    }
    show() {
      return this.display() + ', it is a ' + this.model;
    }
  }
  
  const myCar = new Model("Ford", "Mustang");
  console.log(myCar.show())