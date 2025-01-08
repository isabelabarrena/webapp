// ANIMACION FADEIN
document.addEventListener("DOMContentLoaded", function () {
  const sections = document.querySelectorAll(".fade-in");

  const observer = new IntersectionObserver(
    (entries, observer) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add("visible");
          observer.unobserve(entry.target);
        }
      });
    },
    { threshold: 0.1 }
  );

  sections.forEach((section) => {
    observer.observe(section);
  });
});
// BOTON MODO OSCURO
const themeToggleButton = document.getElementById("theme-toggle");

// Función para cambiar el tema
themeToggleButton.addEventListener("click", () => {
  // Alternar la clase dark-theme en el body y header
  document.body.classList.toggle("dark-theme");
  document.querySelector("header").classList.toggle("dark-theme");

  // Cambiar el texto del botón dependiendo del tema actual
  if (document.body.classList.contains("dark-theme")) {
    themeToggleButton.textContent = "Light Mode"; // Cambiar el texto del botón a "Modo Claro"
  } else {
    themeToggleButton.textContent = "Dark Mode"; // Cambiar el texto del botón a "Modo Oscuro"
  }
});
