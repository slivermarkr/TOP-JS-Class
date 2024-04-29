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

class Cat {
 constructor(name) {
  this.name = name
 }

 speak() {
  console.log(`${this.name} makes a noise.`)
 }
}

class Lion extends Cat {
 speak() {
  super.speak();
  console.log(`${this.name} roars.`);
 }
}

const l = new Lion("Ming");
l.speak();