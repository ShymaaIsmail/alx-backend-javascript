const cloneSymbol = Symbol('clone');

export default class Car {
  constructor(brand, motor, color) {
    this._brand = brand;
    this._motor = motor;
    this._color = color;
  }

  [cloneSymbol]() {
    const Constructor = this.constructor;
    return new Constructor(this._brand, this._motor, this._color);
  }

  cloneCar() {
    return this[cloneSymbol]();
  }
}
