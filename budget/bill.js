'use strict';

class Bill {
    
    // name
    // payment
    // totalOwe
    
    /*
    constructor
    receives name, total owe
     */
    constructor(name, total){
        this.name = name;
        this.totalOwe = total;
    }
    
    makePayment(payment){
        console.log('A payment of ' + payment + ' was made on bill for ' + this.name + ' New total is ' + this.updateTotal(payment));
    }
    
    updateTotal(payment){
        return (this.totalOwe -= payment);
        
    }
    
}

module.exports = Bill;