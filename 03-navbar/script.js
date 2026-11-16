// Open and close the navigation menu on mobile screens.
const button = document.getElementById("menuBtn");
const nav = document.getElementById("nav");
button.addEventListener("click", () => {
  const open = nav.classList.toggle("open");
  button.setAttribute("aria-expanded", String(open));
  button.textContent = open ? "✕" : "☰";
});
// Selecting a link closes the mobile menu.
nav.querySelectorAll("a").forEach(link => link.addEventListener("click", () => {
  nav.classList.remove("open");
  button.setAttribute("aria-expanded", "false");
  button.textContent = "☰";
}));