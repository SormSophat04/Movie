new Typed(".auto-type", {
  strings: ["រឿងភាគ", "Movies", "Animation"],
  loop: true,
  typeSpeed: 120,
  backSpeed: 120,
});

const header = document.getElementById("nav");

header.style.padding = "35px 0";

window.onscroll = function () {
  const scrollvalue = window.scrollY;

  if (scrollvalue > 120) {
    header.style.padding = "16px 0";
    header.style.backgroundColor = "#c4dac0";
    header.style.transition = "0.3s ease-in";
  } else {
    header.style.padding = "35px 0";
    header.style.backgroundColor = "transparent";
    header.style.transition = "0.3s ease-out";
  }
};
