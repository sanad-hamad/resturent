import receiptDes from "./receipt.js"


let firstName, meale, price,datanow, ordername;

function getDataFromUrl()
{
    
   
    
    new URLSearchParams(window.location.search).forEach((v, k) => {
          // to get the data from request of signup  
        if (k === "firstName") {
            console.log("the forst name is added ")
            sessionStorage.setItem(k, v);
            console.log(sessionStorage.getItem("firstName"))
    
        }
         
        // ternary opreator to save data after ordring page submit 
        k === "ordername" ? ordername = v : k === "meale" ? meale = v : k === "";
    
    
    })
   
     let obj = JSON.parse(meale);
     price=obj.price
     console.log(obj);
    
}




$(function(){
    // get data from url after submit
    getDataFromUrl();
    // hide the order page 
    $("#order").css("display","none");
    //display the recipt page 
    $("#recipt").css("display","block")
    // call function to retrive the data 
    receiptDes(sessionStorage.getItem("firstName"),ordername,price,new Date(),true);
       

})



