
var dates = document.getElementById('dates');
var nameUser = document.getElementById('name');
var email = document.getElementById('email');
var quantity = document.getElementById('quantity');
var submitCheck = document.getElementById('submit-check');

function validate(event) {
  event.preventDefault();
  emailjs.send("service_6naqnr9","template_3b5zdfe",{
    reply_to: email.value,
    user_name: nameUser.value,
    date_from: dates.value,
    date_to: dates.value,
    no_guests: quantity.value,
    email_address: email.value,
    }).then(()=>{
      submitCheck.textContent='Reservation Submitted';
      submitCheck.style.background='#66CCCC';
      email.value='';
      nameUser.value='';
      dates.value='';
      quantity.value='';

    }, (err) =>{
      submitCheck.textContent='Reservation Failed';
      submitCheck.style.background='#D32F2F';
    });
}

