let openNav = document.getElementById("openNav");
let claseNav = document.getElementById("closeNav");
let navBar = document.getElementById("navBar");
let workOne = document.getElementById("workOne");
let contact = document.getElementById("contactCon");


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

function contactClose() {
    contact.style.right = "100%";
    openNav.style.opacity = "1";
}

function openContact() {
    contact.style.right ="0";
    openNav.style.opacity = "0";
}