
const formRef = document.querySelector(".login-form");

formRef.addEventListener('submit', onFormSubmit);
      
function onFormSubmit (event) {
event.preventDefault();
       
const formElements = event.currentTarget.elements
const email = formElements.email.value;
const password = formElements.password.value;

if (email === "" || password === "" ) {
return alert('Все поля должны быть заполнены!!!')
}

const data = {
email,
password,
}
console.log(data)
event.currentTarget.reset();
       
}

