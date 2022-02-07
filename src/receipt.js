/**
 *
 * @param {string} name  the custmoer name
 * @param {string} ordername the order name
 * @param {double} price -the price of total meale
 * @param {Date} currntDate -the data of order
 * @param {boolean} speicalMeal this order type you can get the val ussing checkbox
 */
export default function receiptDes(
  name,
  ordername,
  price,
  currntDate,
  speicalMeal
) {
  if (speicalMeal) {
    price += 5;
  }

  var recipt = `<p>
     
                     Customer name is: ${name}
                     <br>
                     <br>
                     order name is: ${ordername}
                     <br>
                     <br>
                     currnt date is: ${currntDate}
                     <br>
                     <br>
                     price of meale is: ${price} $
     
     
     
     
                 </p>`;

  document.getElementById("recipt").innerHTML = recipt;
}
