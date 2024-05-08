class Store {
 constructor(paymentProcessor) {
  this.paymentProcessor = paymentProcessor
 }

 purchaseBike(quantity) {
  this.paymentProcessor.pay(200 * quantity)
 }

 purchaseHelmet(quantity) {
  this.paymentProcessor.pay(15 * quantity)
 }
}
class StripePaymentProcesssor {
 constructor(user) {
  this.user = user 
  this.stripe = new Stripe
 }
 pay(amountInDollars) {
  this.stripe.makePayment(this.user, amountInDollars * 100)
 }
}
class PaypalPaymentProcesssor {
 constructor(user) {
  this.user = user 
  this.paypal = new Paypal
 }
 pay(amountInDollars) {
  this.paypal.makePayment(this.user, amountInDollars)
 }
}

class Stripe {
 makePayment(user, amountInCents) {
  console.log(`${user} made payment of $${amountInCents/100} with Stripe`);
 }
}

class Paypal {
makePayment(user, amountInDollars) {
 console.log(`${user} made payment of $${amountInDollars} with Stripe`);
}
}

const store = new Store(new StripePaymentProcesssor("Mark"))

store.purchaseBike(2)
store.purchaseHelmet(2)