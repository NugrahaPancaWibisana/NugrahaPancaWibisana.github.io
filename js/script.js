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
  
  setInterval(function() {
    currentImageIndex = (currentImageIndex % totalImages) + 1;
    img.src = "assets/pompom-" + currentImageIndex + ".png";
  }, 2000);
}
  
ubahGambarSecaraBergantian();