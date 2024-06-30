const cloneSymbol = Symbol('clone');

export default class Car {
  constructor(brand, motor, color) {
    this._brand = brand;
    this._motor = motor;
    this._color = color;
  }

  [cloneSymbol]() {
    const Constructor = this.constructor[Symbol.species];
    if (Constructor === Car) {
      // Clone called on Car instance, return default Car instance
      return new Car();
    }
    // Clone called on subclass instance, return instance of that subclass
    return new Constructor(this._brand, this._motor, this._color);
  }

  cloneCar() {
    return this[cloneSymbol]();
  }

  static get [Symbol.species]() {
    return this;
  }
}
