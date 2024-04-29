// class Animal {
//  constructor(name) {
//   this.name = name
//  }

//  speak() {
//   console.log(`${this.name} makes a noise.`);
//  }
// }

// class Dog extends Animal {
//  constructor(name) {
//   super(name);
//  }

//  speak() {
//   console.log(`${this.name} barks.`);
//  }
// }

// const tinyang = new Dog("Tiny");
// tinyang.speak();

// class Cat {
//  constructor(name) {
//   this.name = name
//  }

//  speak() {
//   console.log(`${this.name} makes a noise.`)
//  }
// }

// class Lion extends Cat {
//  speak() {
//   super.speak();
//   console.log(`${this.name} roars.`);
//  }
// }

// const l = new Lion("Ming");
// l.speak();

class MyClass {
 static staticField = "I am a static field";

 constructor(instanceField) {
  this.instanceField = instanceField;
 }
 static staticMethod() {
  console.log("This is static method")
 }
 instanceMethod() {
  console.log("This is a instance method")
 }
}

console.log(MyClass.staticField);
MyClass.staticMethod();

const obj1 = new MyClass("Instance 1")
const obj2 = new MyClass("Instance 2")

console.log(obj1.staticField)
console.log(obj1.instanceField);

obj1.staticMethod();
obj2.instanceMethod();