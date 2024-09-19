class Store {
 constructor(paymentProcessor) {
  this.paymentProcessor = paymentProcessor
 }
 purchaseBike(quantity) {
  this.paymentProcessor.pay(quantity * 200);
 }
 purchaseHelmet(quantity) {
  this.paymentProcessor.pay(quantity * 15);
 }
}

class PaypalPaymentProcessor {
 constructor(user) {
  this.user = user
  this.paypal = new Paypal
 }
 pay(amountInDollars) {
  this.paypal.makePayment(this.user,amountInDollars);
 }
}

class Paypal {
 makePayment(user,amount) {
  console.log(`${user} made payment of $${amount} with Paypal.`)
 }
}

const myStore = new Store(new PaypalPaymentProcessor("Henry") );
myStore.purchaseBike(2);
myStore.purchaseHelmet(2);