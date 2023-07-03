let form=document.querySelector('#form');
let username=document.getElementById("Username");
let email=document.getElementById("email");
let password=document.getElementById("password");
let cpassword=document.getElementById("cpassword");
let meassge1=true;
   let result=true;
 form.addEventListener("submit",(e)=>
 {
   result=true;
   console.log("click")
    e.preventDefault();
    console.log(meassge1+"1")
    validateInputs();
    console.log(meassge1+"2")
    meassge1=result;
    console.log(meassge1+"3")
    result1(meassge1)

 })


 function validateInputs(){
    let usernameval=username.value.trim();
    const emailval=email.value.trim();
    const passwordval=password.value.trim();
    const cpasswordval=cpassword.value.trim();

    if(usernameval==='')
    {
      console.log(result+"user")
      result=false;
      seterror(username,"username is required");
      console.log(result+"usera")
    }
    else
    {
      console.log(meassge1+"userp")
      
      sucess(username);  
    }

   if(passwordval==='')
   { 
      console.log(result+"pass1")
      result=false;
      seterror(password,"password is required");
   }
   else  if(passwordval.length<8)
   {
      console.log(result+"pass2")
      result=false;
      seterror(password,"password is too short or less than 8 charater")
   }
   else{
      sucess(password);
   }

   if(cpasswordval==='')
   {
      console.log(result+"cpassword1")
      result=false;
      seterror(cpassword,"password is required")
   }
   else if (cpasswordval!=passwordval)
   {
      console.log(result+"cpassword2")
      result=false;
      seterror(cpassword,"password does not match");
   }
   else{
      sucess(cpassword);
   }

   if(emailval==='')
   {
      console.log(result+"email")
      result=false;
      seterror(email,"Email is required");
   }
   else 
   {
      sucess(email);
   }
}

function result1(meassge)
{
let d=meassge;
if(meassge)
{
   window.location.href="Webpage.html"
  
}
}

 function seterror(element,meassge)
 {
   
    const inputGroup=element.parentElement;
    const error=inputGroup.querySelector('#error');
    error.innerText=meassge;

    inputGroup.classList.add('error');
    inputGroup.classList.remove('success');
 }



 function sucess(element)
 { 
   
    const inputGroup=element.parentElement;
    const error=inputGroup.querySelector('#error');
    error.innerText='';
    inputGroup.classList.add('success');
    inputGroup.classList.remove('error');
 }

