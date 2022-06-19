let header_burger = document.querySelector('.header_burger');
let header_menu = document.querySelector('.header_menu');
let back = document.querySelector('body');
let header_list = document.querySelector('.header_list');
let header_link = document.querySelector('.header_link');
let header_link_2 = document.querySelector('.header_link_2');
let open_menu = document.querySelector('.open_menu');
let open_menu_2 = document.querySelector('.open_menu_2');

header_burger.onclick = function(){
    header_burger.classList.toggle('active');
    header_menu.classList.toggle('active');
    back.classList.toggle('lock');
}

header_list.onclick = function () {
    header_list.classList.remove('active');
    back.classList.toggle('lock');
}


header_link.onclick = function(){
    header_link.classList.toggle('active');
    open_menu.classList.toggle('active');
    back.classList.toggle('lock');
}

header_link_2.onclick = function(){
    header_link_2.classList.toggle('active');
    open_menu_2.classList.toggle('active');
    back.classList.toggle('lock');
}