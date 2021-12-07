// JavaScript Document

var menu = document.querySelector("header nav");
var submenu = document.querySelector("header nav > nav");

var hamMenu = document.querySelector("nav ul");

var hamButton = document.querySelector("nav button:last-of-type");
var icoon = document.querySelector("nav button:last-of-type::before");




// Click on menu Button

hamButton.addEventListener("click", toggleHamburgerMenu);

function toggleHamburgerMenu(){
    hamMenu.classList.toggle("visible");
  //submenu.classList.toggle("zien");
    menu.classList.toggle("uitgeklapt");
}



var achtergrond = document.querySelector("main section:nth-of-type(4) article:last-of-type");
var kleineKop = document.querySelector("main section:nth-of-type(4) article:last-of-type h4");
var twix = document.querySelector("main section:nth-of-type(4) article:last-of-type img");
var groteKop = document.querySelector("main section:nth-of-type(4) article:last-of-type h3");

function lichtOp() {
    achtergrond.classList.add('achtergrond-opvullen');
    kleineKop.classList.add('kleineKop-oplichten');
    twix.classList.add('vergroot');
    groteKop.classList.add('groteKop-oplichten');
  }


  // EventListeners
  achtergrond.addEventListener('mouseover', lichtOp)
  
  
  // Dom Manipulatie
  function doof() {
    achtergrond.classList.remove('achtergrond-opvullen');
    kleineKop.classList.remove('kleineKop-oplichten');
    twix.classList.remove('vergroot');
    groteKop.classList.remove('groteKop-oplichten');
  }
  // EventListeners
  achtergrond.addEventListener('mouseout' , doof)