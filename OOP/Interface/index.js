class Entity {
 constructor(name) {
  this.name = name;
 }
}

const mover = {
 move() {
  console.log(`${this.name} moved`);
 }
}

const attacker = {
 attack(target) {
  console.log(`${this.name} attacked ${target.name} for this ${this.attackDamage} damage`);
  target.takeDamage(this.attackDamage);
 }
}

const hasHealth = {
 takeDamage(amount) {
  this.health -= amount;
  console.log(`${this.name} has ${this.health} health remaining`)
 }
}

class Character extends Entity {
 constructor(name, attackDamage, health) {
  super(name);
  this.attackDamage = attackDamage;
  this.health = health;
 }
}

Object.assign(Character.prototype, mover)
Object.assign(Character.prototype, attacker)
Object.assign(Character.prototype, hasHealth);

class Wall extends Entity {
 constructor(name, health) {
  super(name);
  this.health = health;
 }
}

Object.assign(Wall.prototype, hasHealth);

class Turret extends Entity {
 constructor(name, attackDamage,health) {
  super(name);
  this.attackDamage = attackDamage
  this.health = health;
 }
}

Object.assign(Turret.prototype, mover)
Object.assign(Turret.prototype, attacker)
Object.assign(Turret.prototype, hasHealth);

const turret = new Turret("Turete",3, 50);
const hero = new Turret("Panday",3, 50);
const wall = new Wall("Wall",100);

turret.attack(wall);
turret.attack(hero);
hero.move()
hero.attack(wall)