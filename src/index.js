
/**
 * clss to create person data 
 * @type {{FullName:string,email:string,phone:number,password:string}}
 */




let sigupbtn=document.getElementById("signup");

sigupbtn.onclick=function()
{
    
    let sumary=document.getElementById("summary").style.display="none"
    
    let signform=document.getElementById("container").style.display="block"
}



// to validiat this form 


// $(document).ready(function(){

//     $("form[name='register']").validate({

//         rules:{
//             firstName:required,
//             lastName:required,
//             email:{
//                 required:true,
//                 email:true
//             },
//             password:{
//                 required:true,
//                 minlength:8
//             }
//         },
//         messages:{
//              firstname: "Please enter your firstname",
//              lastname: "Please enter your lastname",
//               password: {
//               required: "Please provide a password",
//               minlength: "Your password must be at least 8 characters long"
//             },
//              email: "Please enter a valid email address"
//         },
        
//     })

// })



