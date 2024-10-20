let openNav = document.getElementById("openNav");
let claseNav = document.getElementById("closeNav");
let navBar = document.getElementById("navBar");
let workOne = document.getElementById("workOne");
let workTwo = document.getElementById("workTwo");
let workThree = document.getElementById("workThree");
let contact = document.getElementById("contactCon");


function navOpen(){
    navBar.style.left = "0";
}

function navClose(){
    navBar.style.left ="100%";
}

function contactClose() {
    contact.style.right = "100%";
    openNav.style.opacity = "1";
}

function openContact() {
    contact.style.right ="0";
    openNav.style.opacity = "0";
}

function workOneOpen(){
    workOne.classList.toggle("workClose");
    workOne.classList.toggle("work-info-container");
}

function workTwoOpen(){
    workTwo.classList.toggle("workClose");
    workTwo.classList.toggle("work-info-container");
}

function workThreeOpen(){
    workThree.classList.toggle("workClose");
    workThree.classList.toggle("work-info-container");
}