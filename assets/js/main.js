// navbar responsive
const navbar = document.getElementById("click");

function showMenu() {
  click.style.right = "0";
}

function hideMenu() {
  click.style.right = "-230px";
}

// jika klik navbar bagian luar akan hilang
const navList = document.querySelector(".navbar-list");
const ham = document.querySelector("#hamburger");

window.addEventListener("click", function (e) {
  if (!navList.contains(e.target) && !ham.contains(e.target)) {
    click.style.right = "-230px";
  }
});

// navbar sticky
window.addEventListener("scroll", function () {
  var navSticky = document.querySelector(".navbar");
  navSticky.classList.toggle("sticky", this.window.scrollY > 0);
});

// scroll delay
const sr = ScrollReveal({
  distance: "30px",
  duration: 2000,
  reset: true,
});

sr.reveal(".content-home", { delay: 400, origin: "left" });
sr.reveal(".heading", { delay: 100, origin: "left" });
sr.reveal(".social-media", { delay: 50, origin: "bottom" });
sr.reveal(".about-row", { delay: 50, origin: "top" });
sr.reveal(".box1", { delay: 100, origin: "top" });
sr.reveal(".box2", { delay: 500, origin: "top" });
sr.reveal(".box3", { delay: 1000, origin: "top" });
sr.reveal(".box4", { delay: 100, origin: "top" });
sr.reveal(".box5", { delay: 500, origin: "top" });
sr.reveal(".box6", { delay: 1000, origin: "top" });
sr.reveal(".box7", { delay: 100, origin: "top" });
sr.reveal(".box8", { delay: 500, origin: "top" });
sr.reveal(".box9", { delay: 1000, origin: "top" });
sr.reveal(".contact-row", { delay: 50, origin: "top" });

// typing effect
function typeEffect(element, text, speed, callback) {
  let i = 0;
  function typing() {
    if (i < text.length) {
      element.innerHTML += text.charAt(i);
      i++;
      setTimeout(typing, speed);
    } else {
      element.style.color = "#FFD1DC";
      if (callback) callback();
    }
  }
  typing();
}

window.addEventListener("DOMContentLoaded", function () {
  const h2 = document.getElementById("typing-h2");
  const h1 = document.getElementById("typing-h1");

  if (h2 && h1) {
    typeEffect(h2, "Welcome To", 200, function () {
      typeEffect(h1, "PARFUME", 200);
    });
  }
});

//music
function toggleMusic() {
  const music = document.getElementById("bg-music");
  const btn = document.getElementById("music-btn");

  if (music.paused) {
    music.play();
    btn.innerText = "🔊"; 
  } else {
    music.pause();
    btn.innerText = "🔇"; 
  }
}
