// Scroll to specific section
function scrollToSection(id) {
  document.getElementById(id).scrollIntoView({ behavior: "smooth" });
}

// Basic form validation
document.querySelector("form").addEventListener("submit", (e) => {
  e.preventDefault();
  alert("Thank you for contacting us!");
});
