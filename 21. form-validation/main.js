// return false means not submitting a submit button (do not submit the form)

function validateForm(){
   // name 
   if(document.myForm.name.value==""){
      document.getElementById("demo").innerHTML="Name cannot be empty";
      document.myForm.name.focus();
      return false;
   }
   // email
   let x = document.myForm.email.value;
   let atsign = x.indexOf("@");
   let dot = x.lastIndexOf(".");
   if(atsign<1 || (dot-atsign<2)){
      document.getElementById("demo").innerHTML="please enter a valid email";
      document.myForm.email.focus();
      return false;
   }
   if(document.myForm.email.value==""){
      document.getElementById("demo").innerHTML="email can not be empty";
      document.myForm.email.focus();
      return false;
   }
   // phone number
   if(document.myForm.phone.value=="" || isNaN(document.myForm.phone.value) || document.myForm.phone.value.length !=10){
      document.getElementById("demo").innerHTML = "please enter a valid 10 digit phone number";
      document.myForm.phone.focus();
      return false;
   }
   if(document.myForm.subject.value=="0"){
      document.getElementById("demo").innerHTML = "please provide your area expertise";
      return false;
   }
   return true;
}
