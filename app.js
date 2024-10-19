let openNav = document.getElementById("openNav");
let claseNav = document.getElementById("closeNav");
let navBar = document.getElementById("navBar");
let workOne = document.getElementById("workOne");



function navOpen(){
    navBar.style.left = "0";
}

function navClose(){
    navBar.style.left ="100%";
}

function workOneOpen(){
    workOne.classList.toggle("workClose");
    workOne.classList.toggle("work-info-container");
    
}
