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

function ubahGambarSecaraBergantian() {
  var img = document.getElementById("myImage");
  var currentImageIndex = 1;
  var totalImages = 4;

  setInterval(function () {
    currentImageIndex = (currentImageIndex % totalImages) + 1;
    img.src = "assets/pompom-" + currentImageIndex + ".png";
  }, 2000);
}

ubahGambarSecaraBergantian();

const buttons = document.querySelectorAll(".qna");
const descriptions = document.querySelectorAll(".answer");
const icons = document.querySelectorAll(".icon-about");

buttons.forEach((button, index) => {
  button.addEventListener("click", () => {
    if (descriptions[index].style.display === "block") {
      descriptions[index].style.display = "none";
      icons[index].style.transform = "rotate(0deg)";
    } else {
      descriptions.forEach((description) => {
        description.style.display = "none";
      });
      icons.forEach((icon) => {
        icon.style.transform = "rotate(0deg)";
      });

      descriptions[index].style.display = "block";
      icons[index].style.transform = "rotate(90deg)";
    }
  });
});