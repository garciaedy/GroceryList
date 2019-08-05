// variables
const addItemsAction = document.querySelector('.addItems-action');
const input = document.querySelector('.addItems-input');
const submit = document.querySelector('.addItems-submit');
const list = document.querySelector('.grocery-list');
const displayItemsAction = document.querySelector('.displayItems-action');
const clear = document.querySelector('.displayItems-clear')

//event listeners
submit.addEventListener('click', addItem);

//function
let addItem = (event) =>{
    event.preventDefault();
    let value = input.value;
    console.log(value)
    if(value ===''){
    showAction()
    }else{
showAction()
    }
}
// show action function
let showAction = (element, text, value){
    if(value === true){
        element.class.add('success');
        element.innerText = text;
        input.value= ''
    }
}