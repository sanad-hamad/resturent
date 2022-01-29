/**
 * clss to create person data 
 * @type {{FullName:string,email:string,phone:number,password:string}}
 */

const Signup=
{
 FullName:"sanad hamad",
 email:"sanadksg@gmail.com",
 phone:1234567888,
 password:"123G555"
 
}

/**
 * this method to signup a new person 
 * @param {string} Fname - user first namme 
 * @param {string} Lname - user last name 
 * @param {number} phone - user phone must be 10 digit 
 * @param {string} password - user password must be al least 8 char and digit 
 * @param {string} email - user email must be user@anytihng.com
 */
function AddUser(Fname,Lname,phone,password,email)
{
   this.Fname=Fname;
   this.Lname=Lname;
   this.phone=phone;
   this.password=password
   this.email=email
}