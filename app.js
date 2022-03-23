const button = document.getElementById('button');
button.addEventListener('click', ()=>{
    //1 store the element with id email-inputs as a variable
const inputs = document.getElementById('email-input');
    //2 add the class "hide" to the element
inputs.classList.toggle('hide');
    //3 store the element with the id thank-you as a variable
    // thankYou
const thankYou = document.getElementById('thank-you');
    //4 remove the class "hide" from thankYou
thankYou.classList.toggle('hide');
});
