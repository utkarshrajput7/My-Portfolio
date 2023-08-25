// --------------------------------Home Page- Changing Text-----------------------------------------
var typed = new Typed(".changingText",{
    strings: ["CSE Undergrad","Coder","Frontend Developer"],
    typeSpeed: 75,
    backSpeed: 40,
    backDelay: 1000,
    loop: true
});


// --------------------------------About Me Page- Changing Content Tabs-----------------------------------------
var tablinks = document.getElementsByClassName("tab-links");
var tabcontents = document.getElementsByClassName("tab-contents");


function opentab(tabname){
    //hide all tabs content
    for(var tablink of tablinks){
        tablink.classList.remove("active-link");
    }
    for(var tabcontent of tabcontents){
        tabcontent.classList.remove("active-tab");
    }
    
    // show wanted tab content
    event.currentTarget.classList.add("active-link");
    
    var currtab = document.getElementById(tabname);
    currtab.classList.add("active-tab");
}  


// --------------------------------Menu for Smaller Screen-----------------------------------------
var sidemenu = document.getElementById("sidemenu");

function openmenu(){
    sidemenu.style.right = "1px";
}
function closemenu(){
    sidemenu.style.right = "-200px";
}