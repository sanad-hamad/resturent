
const ValidateSignupForm=function()
{
    let RegisterForm = $("#register");

      var btn = document.getElementById('submit');

   
   const fun=()=>
   { 
       let firstName=$("#firstName").val();
       let lastName=$("#email").val();

   }
  if(RegisterForm.length)
  {
     RegisterForm.validate({
         rules:{
             /**
              * fisrt Name mandatory 
              * @param {string}
              */
           firstName:{
               required:true,
               maxlength:32
           },
           /**
            * @param {email} must contain email desain 
            */
           email:{

               required:true,
               email:true
           },
           /**
            * @param {string} just you can add digit number 
            */
           phone:{
               required:true,
               minlength:10,
               maxlength:10,
               digits:true
              

               
           },
           password:{
               required:true,
               minlength:8,
               alphanumeric:true
           }

         },
         messages:{
             firstName:{
                 required:'firstName is mandatory'
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

     $("#signup").onclick=function(){

       
     }
    ValidateSignupForm();
   
    console.log(ValidateSignupForm.data.firstName)
    console.log(ValidateSignupForm.data.phone);

    console.log(pass,firstName)
    btn.addEventListener('click', fun);

  

})