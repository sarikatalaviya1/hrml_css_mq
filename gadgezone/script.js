// document.addEventListener('DOMContentLoaded', () => {
//     const menu = document.querySelector('.menu');
//     const nav = document.querySelector('.nav-links');

//     menu.addEventListener('click', () => {
//         nav.classList.toggle('nav-active');

//     });
// });


$(document).ready(function () {
    $(".menu").click(function () {
        $("#menu").slideToggle("slow");
        document.querySelector(".menu").style.display = "none";
        document.querySelector(".c_menu").style.display = "block";
    });
    $(".c_menu").click(function () {
        $("#menu").slideToggle("slow");
        document.querySelector(".menu").style.display = "block";
        document.querySelector(".c_menu").style.display = "none";
    });
});