//add active class in select tab
const list = document.querySelectorAll('.list');
function activeLink() {
    list.forEach((item) =>
        item.classList.remove('active'));
    this.classList.add('active');
}
list.forEach((item) =>
    item.addEventListener('click', activeLink));

//Funciones del Toggle
let navigation = document.querySelector('.navigation')
let toggle = document.querySelector('.toggle')
toggle.onclick = function(){
    navigation.classList.toggle('active')
}