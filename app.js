const openNav = document.querySelector(".hamburger");
const closeNav = document.querySelector(".nav__close");
const nav = document.querySelector(".nav__list");

openNav.addEventListener("click", () => {
  const navLeft = nav.getBoundingClientRect().left;
  if (navLeft < 0) {
    nav.style.left = "0";
    document.body.classList.add("active");
  }
});

closeNav.addEventListener("click", () => {
  const navLeft = nav.getBoundingClientRect().left;
  if (navLeft === 0) {
    nav.style.left = "-40rem";
    document.body.classList.remove("active");
  }
});

// Smooth Scroll
const scrollLinks = [...document.querySelectorAll(".scroll-link")];

scrollLinks.forEach(link => {
  link.addEventListener("click", e => {
    const id = e.target.getAttribute("href").slice(1);
    const element = document.getElementById(id);
    const position = element.offsetTop;

    window.scrollTo({
      left: 0,
      top: position,
    });
    nav.style.left = "-40rem";
    document.body.classList.remove("active");
  });
});

// Initialize and add the map
function initMap() {
  // The location of Uluru
  const uluru = { lat: -25.344, lng: 131.036 };
  // The map, centered at Uluru
  const map = new google.maps.Map(document.getElementById("map"), {
    zoom: 4,
    center: uluru,
  });
  // The marker, positioned at Uluru
  const marker = new google.maps.Marker({
    position: uluru,
    map: map,
  });
}