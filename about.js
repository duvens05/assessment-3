console.log("hello world");



function handleSubmit(evt) {
	evt.preventDefault();
	
	alert('form has been submitted successfully')
}


let form = document.querySelector('#contact');

form.addEventListener('submit', handleSubmit);
let img = document.querySelector('img')
img.addEventListener('mouseover',givecompliment)
let compliment = document.querySelector('#compliment')
function givecompliment(){
	alert(compliment.textContent)
}