addEventListener("scroll",function(){
    var navBar = document.getElementById("navBar");
    var navBoundary = document.getElementById("navBoundary");
    var navBody = document.getElementById("navBody");


    if(navBoundary.getBoundingClientRect().top < navBar.getBoundingClientRect().bottom ){
        navBody.style.backdropFilter = "blur(25px)";
        navBody.style.backgroundColor = "#0f0e0f50";
        navBody.style.border = "1px solid #cccccc20";
    } else {
        navBody.style.backdropFilter = "";
        navBody.style.backgroundColor = "#0f0e0f";
        navBody.style.border = "none";
        navBody.style.transition = "0.5s";
    }
});

var heroWave = document.getElementById("heroWave");

heroWave.onmouseenter = function(){
    heroWave.innerHTML = "🇵🇭";
    heroWave.transition = ".5s";
}

heroWave.onmouseleave = function(){
    heroWave.innerHTML = "👋";
    heroWave.transition = ".5s"; 
}

let aboutSection = document.getElementById("about-section");
let aboutButton = document.getElementById("aboutButt");
let xAbout = document.getElementById("closeAbout");

var openAbout = function() {
    aboutSection.style.marginTop = 0;   
    aboutSection.style.opacity = 1; 
}

var closeAbout = function(){
    aboutSection.style.marginTop = "100vh";
    aboutSection.style.opacity = 0;
}





function openView(element){
   
   const videoSelect = element.querySelector('.video-display');
    if(window.innerWidth < 720){
        element.classList.toggle("mobileViewVideo");
        videoSelect.classList.toggle("mobileViewVideo")
        
    }else {
        element.classList.remove("mobileViewVideo");
        videoSelect.classList.remove("mobileViewVideo")
        element.classList.toggle("openView");
    }
}

function toggleAbout(){
    let aboutContainer = document.getElementById("abtCon");
    aboutContainer.classList.toggle("show-about");
}