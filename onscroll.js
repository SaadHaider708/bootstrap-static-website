const navbar = document.querySelector(".navbar-container");

window.addEventListener("scroll", () => {
  if (window.scrollY >= 50) {
    navbar.classList.add("active-nav-container");
  } else {
    navbar.classList.remove("active-nav-container");
  }
});
