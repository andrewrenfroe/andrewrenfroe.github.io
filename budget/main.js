var Bill = require('./bill');

var truck = new Bill('Truck', 22000);
//truck.constructor('Truck', 22000);
truck.makePayment(200);