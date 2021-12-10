








/* JavaScript





/* ░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░ */
/* ░░░░░░░░░░░░░░░  Hamburger menu  ░░░░░░░░░░░░░░░░ */
/* ░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░ */


var vldgMenu = document.querySelector("header nav");
var hamMenu = document.querySelector("nav ul");

var knpMenu = document.querySelector("nav button:last-of-type");


// Openen en sluiten menu


function schakelenMenu(){
  hamMenu.classList.toggle("weergeven");
  vldgMenu.classList.toggle("uitschuiven");
}

  knpMenu.addEventListener("click", schakelenMenu);





/* ░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░ */
/* ░░░░░░░░░░░░░░░░░░░  Hover 1  ░░░░░░░░░░░░░░░░░░░ */
/* ░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░ */

var mldie = document.querySelector("audio");

var geleblok = document.querySelector("main section:nth-of-type(4) article:last-of-type");

var klneKop = document.querySelector("main section:nth-of-type(4) article:last-of-type h4");
var twix = document.querySelector("main section:nth-of-type(4) article:last-of-type img");
var grteKop = document.querySelector("main section:nth-of-type(4) article:last-of-type h3");
var lnkrknop = document.querySelector("main section:nth-of-type(4) article:last-of-type a:first-of-type");
var rchtrknop = document.querySelector("main section:nth-of-type(4) article:last-of-type a:last-of-type");


// Met hover


function oplichten() {
    mldie.volume = 0.1;
    mldie.play();

    geleblok.classList.add('opvullen-achtergrond');

    klneKop.classList.add('oplichten-kleine');
    twix.classList.add('vergroten');
    grteKop.classList.add('oplichten-grote');
    lnkrknop.classList.add('oplichten');
    rchtrknop.classList.add('oplichten');
  }

  geleblok.addEventListener('mouseover', oplichten);
  

  // Zonder hover


  function uitdoven() {
    mldie.pause();
    mldie.currentTime = 0;

    geleblok.classList.remove('opvullen-achtergrond');

    klneKop.classList.remove('oplichten-kleine');
    twix.classList.remove('vergroten');
    grteKop.classList.remove('oplichten-grote');
    lnkrknop.classList.remove('oplichten');
    rchtrknop.classList.remove('oplichten');
  }

  geleblok.addEventListener('mouseout' , uitdoven);










/* ░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░ */
/* ░░░░░░░░░░░░░░░░░░  Carousel  ░░░░░░░░░░░░░░░░░░░ */
/* ░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░ */


  var carousel = document.getElementById('carousel');
  var cards = document.querySelectorAll('.card');
  var tray = document.getElementById('tray');
  var indicator = document.getElementById('indicator');
  var info = {
    numCards: cards.length
  };
  
  var getDimensions = function() {
    info.container_width = carousel.clientWidth;
    info.card_width = carousel.firstElementChild.clientWidth;
    info.tray_width = tray.clientWidth;
  }
  
  var moveIndicator = function(timestamp) {
    var amount_inview = info.container_width / (info.card_width * info.numCards); // < 1
    var tray_scale = info.tray_width / info.container_width;
  
    var indicator_width = info.tray_width * amount_inview;
    var indicator_offset = (info.scroll_left * amount_inview) * tray_scale;
  
    indicator.style.width = indicator_width + 'px';
    indicator.style.left = indicator_offset + 'px';
  
    requestAnimationFrame(moveIndicator);
  }
  
  var onScroll = function() {
    info.scroll_left = carousel.scrollLeft;
  }
  
  // initialize
  getDimensions();
  carousel.addEventListener('scroll', onScroll);
  requestAnimationFrame(moveIndicator);





