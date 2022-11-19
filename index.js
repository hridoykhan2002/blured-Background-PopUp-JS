// selecting elements 
const joinBtn = document.querySelector('.join');
const submitBtn = document.querySelector('.submit');
const closeBtn = document.querySelector('.close');
const mainContainer = document.querySelector('.container-fluid');
const popContainer = document.querySelector('.popup-container');

joinBtn.addEventListener('click',() =>{
    if(mainContainer.classList.contains('active')){
        mainContainer.classList.remove('active');
    }else{
        mainContainer.classList.add('active');
        popContainer.classList.add('active')
    }
});

closeBtn.addEventListener('click', () =>{
    if(mainContainer.classList.contains('active')){
        mainContainer.classList.remove('active');
        popContainer.classList.remove('active')
    }
})

