const sr = ScrollReveal({
    distance: "65px",
    duration: '2600',
    delay: 450,
    reset: true
        
});
sr.reveal('.main', {delay:200, origin: 'left' });
sr.reveal('img', {delay:250, origin: 'left' });
sr.reveal('.cards', {delay:450, origin: 'top' });
sr.reveal('.title', {delay:450, origin: 'top' });
sr.reveal('.main p', {delay:200, origin: 'left' });
sr.reveal('.main button', {delay:200, origin: 'left' });

sr.reveal('.main2, h1, h3, p', {delay:200, origin:'top'});
sr.reveal('.main2, button', {delay:200, origin:'left'});
sr.reveal('.image2', {delay:200, origin:'right'});

sr.reveal('.contactcolumn', {delay:200, origin:'top'});
sr.reveal('.location', {delay:200, origin:'right'});

const typed = new Typed(".multipletext", {
    strings: ['Happy Home','Decorate Home','Modern Home','Stylish Home'],
    typeSpeed: 50,
    backSpeed: 50,
    backDelay: 1200,
    loop: true,
}); 
var i = 0;
let slides = document.querySelectorAll(".slide");
let slider = document.querySelector(".slider");
var pause = false;
function moveRight() {
  slides[i].className = "slide";
  i = (i + 1) % slides.length;
  slides[i].className = "slide active";
  let Xvalue = -160 * i;
  slider.style.transform = `translateX(${Xvalue}px)`;
}
function moveLeft() {
  slides[i].className = "slide";
  i = (i - 1 + slides.length) % slides.length;
  slides[i].className = "slide active";
  let Xvalue = -160 * i;
  slider.style.transform = `translateX(${Xvalue}px)`;
}

const interval = setInterval(() => {
  if (!pause) {
    moveRight();
  }
}, 2000);

function playPause() {
  let state = document.querySelector(".icon");
  if (state.innerHTML == "pause") {
    state.innerHTML = "p";
    pause = true;
  } else {
    state.innerHTML = "pause";
    pause = false;
  }
}