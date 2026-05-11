<!-- ================== script.js ================== -->
window.addEventListener("DOMContentLoaded", () => {
  const savedTheme = localStorage.getItem("theme");

  if (savedTheme === "dark") {
    document.body.classList.add("dark");
  }
});

function toggleMenu(){document.getElementById('nav').classList.toggle('show');}

function toggleDarkMode(){document.body.classList.toggle('dark');}

function openImage(img){document.getElementById('lightbox').style.display='flex';document.getElementById('lightbox-img').src=img.src;}
function closeImage(){document.getElementById('lightbox').style.display='none';}

function loginUser(){
let u=document.getElementById('user').value;
if(u){localStorage.setItem('student',u);alert('Welcome '+u);window.location='index.html';}
}

window.addEventListener('scroll',()=>{
document.querySelectorAll('.reveal').forEach(el=>{
if(el.getBoundingClientRect().top<window.innerHeight-100){el.classList.add('active');}
});});


function toggleDarkMode() {
  document.body.classList.toggle("dark");

  // Save preference
  if (document.body.classList.contains("dark")) {
    localStorage.setItem("theme", "dark");
  } else {
    localStorage.setItem("theme", "light");
  }
}
document.addEventListener("DOMContentLoaded", () => {

  let index = 0;
  const slides = document.querySelectorAll(".slide");
  const dots = document.querySelectorAll(".dot");

  function showSlide(i) {
    slides.forEach(s => s.classList.remove("active"));
    dots.forEach(d => d.classList.remove("active"));

    slides[i].classList.add("active");
    dots[i].classList.add("active");
  }

  function changeSlide(step) {
    index += step;

    if (index >= slides.length) index = 0;
    if (index < 0) index = slides.length - 1;

    showSlide(index);
  }

  function setSlide(i) {
    index = i;
    showSlide(index);
  }

  /* AUTO PLAY */
  setInterval(() => {
    changeSlide(1);
  }, 4000);

document.addEventListener("DOMContentLoaded", () => {

  let index = 0;
  const slides = document.querySelectorAll(".slide");
  const dots = document.querySelectorAll(".dot");
  let interval;

  function showSlide(i) {
    slides.forEach(s => s.classList.remove("active"));
    dots.forEach(d => d.classList.remove("active"));

    slides[i].classList.add("active");
    dots[i].classList.add("active");
  }

  function nextSlide() {
    index = (index + 1) % slides.length; // 🔥 smooth loop (fix glitch)
    showSlide(index);
  }

  function prevSlide() {
    index = (index - 1 + slides.length) % slides.length;
    showSlide(index);
  }

  function setSlide(i) {
    index = i;
    showSlide(index);
    restartAuto(); // reset autoplay when user interacts
  }

  function startAuto() {
    interval = setInterval(nextSlide, 4000);
  }

  function restartAuto() {
    clearInterval(interval);
    startAuto();
  }

  /* BUTTONS */
  window.changeSlide = (step) => {
    if (step === 1) nextSlide();
    else prevSlide();
    restartAuto();
  };

  window.setSlide = setSlide;

  /* SWIPE SUPPORT */
  let startX = 0;
  const carousel = document.querySelector(".carousel");

  carousel.addEventListener("touchstart", e => {
    startX = e.touches[0].clientX;
  });

  carousel.addEventListener("touchend", e => {
    let endX = e.changedTouches[0].clientX;

    if (startX - endX > 50) nextSlide();
    if (endX - startX > 50) prevSlide();

    restartAuto();
  });

  /* PAUSE ON HOVER (DESKTOP UX BOOST) */
  carousel.addEventListener("mouseenter", () => clearInterval(interval));
  carousel.addEventListener("mouseleave", startAuto);

  /* INIT */
  showSlide(index);
  startAuto();

});

  // Make functions global
  window.changeSlide = changeSlide;
  window.setSlide = setSlide;

});