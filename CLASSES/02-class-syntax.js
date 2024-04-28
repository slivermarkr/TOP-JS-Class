// class User {
//  constructor(value){
//   this.name = value;
//  }

//  sayHi() {
//   console.log(`Hi ${this.name}`)
//  }
// }

// const mark = new User("Mark");
// mark.sayHi();
// let User = class MyClass {
//  sayHi() {
//   alert(MyClass);
//  }
// }

// new User().sayHi();

// function makeClass(phrase) {
//  return class {
//   sayHi() {
//    console.log(phrase);
//   }
//  }
// }

// const User = makeClass("Hello");
// new User().sayHi("");

// function createClass(greeting) {
//  return class {
//   sayHi() {
//    console.log(greeting);
//   }
//  }
// }

// const myClass = createClass("Hello");

// const me = new myClass();
// me.sayHi();
// console.log(me);

// class User {
//  constructor(name) {
//   this.name = name;
//  }

//  get name() {
//   return this._name;
//  }
//  set name(value) {
//   if(value.length < 4) {
//    console.log("Name is too short.");
//    return
//   }
//   this._name = value;
//  }
// }

// let user = new User("Mark");
// console.log(user.name);
// user.name = "Law";
// class User {
//  ['say' + 'Hi']() {
//   console.log("hello");
//  }
// }
// new User().sayHi();

class Button {
 constructor(value) {
  this.value = value;
 }

 click = () => {
  console.log(this.value);
 }
}

const me = new Button("Hello");
setTimeout(me.click,1000);