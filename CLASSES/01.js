// let user = {
//  name: "Henry",
//  surname: "Mark",

//  get fullName() {
//   return `${this.name} ${this.surname}`;
//  },

//  set fullName(value) {
//   [this.name,this.surname] = value.split(" ");
//  }
// }
// user.fullName = "Alice Wonderland"
// console.log(user.fullName);

// let user = {
//  name: "Mark",
//  surname: "Henry"
// };

// Object.defineProperty(user, 'fullName', {
//  get() {
//   return `${this.name} ${this.surname}`;
//  },
//  set(value){
//   [this.name, this.surname] = value.split(" ");
//  }
// })

// console.log(user.fullName);
// for(let key in user) console.log(key);

// let user = {
//  get name() {
//   return this._name;
//  },
//  set name(value) {
//   if(value.length < 4) {
//    console.log("Name is too short...")
//    return;
//   }
//   this._name = value;
//  }
// }

// user.name = "Steve";
// console.log(user.name);
// user.name = "Law";

// const user = {
//  name: "Mark",
//  surname: "Henry",

//  get fullName() {
//   return `${this.name} ${this.surname}`;
//  },
//  set fullName(value) {
//   [this.name, this.surname] = value.split(" ");
//  }

// }

// console.log(user.fullName)
// user.fullName = "Jack Black"
// console.log(user.fullName)

const user = {
 name: "Mark",
 surname: "Henry",
 get fullName() {
  return `${this.name} ${this.surname}`;
 },

 set fullName(value) {
  [this.name, this.surname] = value.split(" ");
 }
}

console.log(user)
console.log(user.fullName);
user.fullName = "Alice Walis"
console.log(user.fullName);