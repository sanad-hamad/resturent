/**
 * 
 * @param {string} name  the custmoer name 
 * @param {string} ordername the order name 
 * @param {double} price -the price of total meale 
 * @param {Date} currntDate -the data of order 
 * @param {boolean} speicalMeal this order type 
 */
export const receiptDes=(name,ordername,price,currntDate,speicalMeal)=>{
    if(speicalMeal)
    {
         price+=5;
         
    }
    
    console.log(`welcome ${name} you ordered the meal ${ordername} at ${currntDate} the total price is ${price }`)

}