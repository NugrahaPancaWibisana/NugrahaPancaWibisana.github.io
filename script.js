const observer1 = new IntersectionObserver((entries) => {
  entries.forEach((entry) => {
    entry.target.classList.toggle("show", entry.isIntersecting);
  });
});
const hiddenElements1 = document.querySelectorAll(".hidden");
hiddenElements1.forEach((el) => observer1.observe(el));

function hamburgerMenu(x) {
  x.classList.toggle("change");
  const navbar = document.getElementById("navbar");
  navbar.classList.toggle("flex");
}

const text = document.querySelector(".sec-text");

const textLoad = () => {
  setTimeout(() => {
    text.textContent = "Programmer";
  }, 0);
  setTimeout(() => {
    text.textContent = "Web developer";
  }, 4000);
  setTimeout(() => {
    text.textContent = "UI/UX Designer";
  }, 8000);
};

textLoad();
setInterval(textLoad, 12000);