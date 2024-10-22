let openNav = document.getElementById("openNav");
let claseNav = document.getElementById("closeNav");
let navBar = document.getElementById("navBar");
let workOne = document.getElementById("workOne");
let workTwo = document.getElementById("workTwo");
let workThree = document.getElementById("workThree");
let contact = document.getElementById("contactCon");
let contactMore = document.getElementById("contactMore");
let moreContainer = document.getElementById("moreContainer");

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

function moreContact(){
    contactMore.classList.toggle("more-caret-close");
    contactMore.classList.toggle("more-caret-open");
    moreContainer.classList.toggle("more-container-close");
    moreContainer.classList.toggle("more-container-open");
}