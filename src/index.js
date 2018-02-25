'use strict'
module.exports = function makeExchange(currency) {
    let result = {};
    if(currency <= 0) {
    	return result;
    }
    else if(currency >= 10000){
    	return {error: "You are rich, my friend! We don't have so much coins for exchange"};
    }
    else {
	    let h = Math.floor(currency / 50);
	    currency = currency - h * 50;
	    let q = Math.floor(currency / 25);
	    currency = currency - q * 25;
	    let d = Math.floor(currency / 10);
	    currency = currency - d * 10;
	    let n = Math.floor(currency / 5);
	    currency = currency - n * 5;
	    let p = Math.floor(currency / 1);
	    if (h > 0) result.H = h;
	    if (q > 0) result.Q = q;
	    if (d > 0) result.D = d;
	    if (n > 0) result.N = n;
	    if (p > 0) result.P = p;
	    return result;
	}
	   
}
