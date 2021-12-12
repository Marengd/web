








/* JavaScript





/* ░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░ */
/* ░░░░░░░░░░░░░░░  Hamburger menu  ░░░░░░░░░░░░░░░░ */
/* ░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░ */


var vldgMenu = document.querySelector("header nav");
var hamMenu = document.querySelector("nav ul");

var knpMenu = document.querySelector("nav button:last-of-type");
var icn = document.querySelector("nav button:last-of-type::before");


// Openen en sluiten menu


function schakelenMenu(){
  hamMenu.classList.toggle("weergeven");
  vldgMenu.classList.toggle("uitschuiven");
  icn.classList.toggle("sluiten");
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


// 🙇🏾 https://codepen.io/jeremyfrank/pen/vNPwME
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
  
  getDimensions();
  carousel.addEventListener('scroll', onScroll);
  requestAnimationFrame(moveIndicator);



  // 🙇🏾 https://stackoverflow.com/questions/56932831/how-to-scroll-right-on-a-button-click
  var scrollLnks = document.querySelector('main section:nth-of-type(7) button:first-of-type');

  function naarLinks () {
  // 🙇🏾 https://stackoverflow.com/questions/50611362/how-to-scroll-left-or-right-inside-a-div-using-pure-javascript-function-and-no-j/50611710
    document.getElementById('carousel').scrollLeft -= 290;
  };

  scrollLnks.addEventListener('click' , naarLinks);

  // Naar rechts


  var scrollRchts = document.querySelector('main section:nth-of-type(7) button:last-of-type');

  function naarRchts () {
    document.getElementById('carousel').scrollLeft += 290;
    scrollLnks.classList.add('zichtbaar');
  };

  scrollRchts.addEventListener('click' , naarRchts);










/* ░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░ */
/* ░░░░░░░░░░░░░░░     Inspringen      ░░░░░░░░░░░░░ */
/* ░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░ */


// 🙇🏾 https://coolcssanimation.com/how-to-trigger-a-css-animation-on-scroll/
const observerLft = new IntersectionObserver(entries => {

  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.add('rechts_invliegen');
    }
  });
});
observerLft.observe(document.querySelector('main section:nth-of-type(3) article:first-of-type'));


const observerRght = new IntersectionObserver(entries => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.add('links_invliegen');
    }
  });
});
observerRght.observe(document.querySelector('main section:nth-of-type(3) article:last-of-type'));