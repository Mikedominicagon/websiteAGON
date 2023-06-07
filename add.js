const sheesh = document.querySelector('.header .nav-bar .nav-list .sheesh');
const moblie_menu = document.querySelector('.header .nav-bar .nav-list ul');
const header = document.querySelector('.header.container');

sheesh.addEventListener('click', ()=>{
    sheesh.classList.toggle('active');
    moblie_menu.classList.toggle('active');
});

document.addEventListener('scroll',()=>{
    var scroll_position = window.scrollY
    if(scroll_position > 250){
        header.style.backgroundColor = 'white';
    } else {
        header.style.backgroundColor = 'tansparent';
    }
})