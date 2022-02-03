
const ValidateSignupForm=function()
{
    let RegisterForm = $("#register");
    

  if(RegisterForm.length)
  {
      
    // check valid email 
     $.validator.addMethod("customemail", 
    function(value, element) {
        return /^\w+([-+.']\w+)*@\w+([-.]\w+)*\.\w+([-.]\w+)*$/.test(value);
    }, 
    "Sorry, I've enabled very strict email validation"
);

// this is to password 
/**
 * ^               // start of input 
(?=.*?[A-Z])    // Lookahead to make sure there is at least one upper case letter
(?=.*?[a-z])    // Lookahead to make sure there is at least one lower case letter
(?=.*?[0-9])    // Lookahead to make sure there is at least one number
[A-Za-z0-9]{6,} // Make sure there are at least 6 characters of [A-Za-z0-9]
 */
$.validator.addMethod("loginRegex", function(value, element) {
    return this.optional(element) ||  /^(?=.*?[A-Z])(?=.*?[a-z])(?=.*?[0-9])[A-Za-z0-9]{8,}$/.test(value);
}, "Username must contain only letters, numbers, or dashes.");

  
 
     RegisterForm.validate({
         rules:{
            
           firstName:{
               required:true,
               maxlength:32,
               minlength:4,
               
           },
           
           email:{

               required:true,
               email:true,
               customemail:true


              
           },
           
           phone:{
               required:true,
               minlength:10,
               maxlength:10,
               digits:true
              

               
           },
           password:{
               required:true,
               minlength:8,
               loginRegex:true
               
           }

         },

         
         messages:{
             firstName:{
                 required:'firstName is mandatory',
                 isvalid:"enter valid name"
             },
             email:{
                 required:'enter email like sanad@anything.com'
             },
             phone:{
                 required:'Please enter only digits max lentgth 10'
             }

         },

         

        
         
     })

    

    

    
  }
}





$(function(){
    /**
     * this function to validate the form for signup 
     */
     console.log("this work correct");

     let x =$("#add-user");
     console.log(x)

     x.onclick=function()
     {
         console.log(x);
     }

        // this is to hide the summary and show signup content 
       $("#add-user").click(function(){

        $("#summary").css('display','none');
        $("#container").css('display','block');
       })
        

        
           
             // this for validation form using jquery 
        ValidateSignupForm();
    

   
   
    
  

})