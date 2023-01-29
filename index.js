class Telephone {
  constructor() {
    this.phoneNumber = new Set();
    this.observers = new Set();
  }

  //   Adding Phone Number
  AddPhoneNumber(number) {
    this.phoneNumber.add(number);
  }

  //   Remove Phone Number
  RemovePhoneNumber(number) {
    this.phoneNumber.delete(number);
  }

  //   Dial Phone Number
  DialPhoneNumber(number) {
    if (this.phoneNumber.has(number)) {
      this.notify(number);
    } else {
      console.log("Oops!! Invalid Phone Number");
    }
  }

  //   Add observer
  add(observer) {
    this.observers.add(observer);
  }

  // Remove observer
  remove(observer) {
    this.observers.delete(observer);
  }

  //   Notify observers
  notify(number) {
    for (let observer of this.observers) {
      observer.update(number);
    }
  }
}

// First observer
class Observer {
  constructor() {}

  update(number) {
    console.log("The Phone Number is " + number);
  }
}

// Second observer
class Observer2 {
  constructor() {}

  update(number) {
    console.log("Dialling" + number);
  }
}

const phone = new Telephone();

const numberOne = "09102983659";
const numberTwo = "08102433693";

phone.AddPhoneNumber(numberOne);
phone.AddPhoneNumber(numberTwo);

const dialNumber = new Observer();
const callNumber = new Observer2();

phone.add(dialNumber);
phone.add(callNumber);

phone.DialPhoneNumber(numberOne);
phone.DialPhoneNumber(numberTwo);
