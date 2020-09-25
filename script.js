function Validation(){


var email = document.getElementById('email').value;
var form = document.getElementById('form');
var text = document.getElementById("text");

var pattern = /^[^ ]+@[^ ]+\.[a-z]{2,3}$/;

if(email.match(pattern))
{
    form.classList.add("valid")
    form.classList.remove("invalid")
    text.innerHTML  = "Your Email Address is Valid"
    text.style.color = "#81b214"
}
else
{
    form.classList.remove("valid")
    form.classList.add("invalid")
    text.innerHTML  = "Your Email Address is inValid"
    
}

}