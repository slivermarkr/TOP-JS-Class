document.addEventListener("DOMContentLoaded", function(event) {
 var orderModule = (function() {
     var orders = {},
         EST_DELIVERY = 'current estimated delivery time',
         estimatedDeliveryTime;

     PubSub.subscribe(EST_DELIVERY, function(msg, data) {
         console.log(msg);
         estimatedDeliveryTime = data;
     });

     return orders;
 })();

 var deliveryModule = (function() {
     var deliveries = {},
         EST_DELIVERY = 'current estimated delivery time';

     deliveries.getEstimatedDeliveryTime = function() {
         var estimatedDeliveryTime = 1; // Hard-coded to 1 hour, but likely an API call.

         PubSub.publish(EST_DELIVERY, estimatedDeliveryTime);
     };

     return deliveries;
 })();

 deliveryModule.getEstimatedDeliveryTime();
});