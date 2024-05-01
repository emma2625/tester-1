// THE DOM 

// document.write('Hello World')
// const elements = document.getElementsByTagName('h1');

// const elements = document.getElementsByClassName('smile');

// const elements = document.getElementById('smart'); 

// const elements = document.querySelector('.smile');
const elements = document.querySelectorAll('.smile');


console.log(elements);

const first = document.querySelector('#smart');

// Retrieve an attribute

console.log(first.getAttribute('id'));

first.setAttribute('style', 'color: green;');

first.setAttribute('data-count', '15');


first.classList.add('bright');
first.classList.remove('bright');

console.log(first.textContent);

first.textContent = "We are currently offline"

first.innerHTML += "<br> I am Ok"

first.innerHTML += "<small> Yes</small>"



const userName = document.querySelector('#user_name');
const userEmail = document.querySelector('#user_email');
const userPhone = document.querySelector('#user_phone');

let name =  "John Doe";
name = "Sam Smith"

userName.textContent += name;
userEmail.textContent += "johndoe@gmail.com";
userPhone.textContent += "090235272526";


