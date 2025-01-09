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
  document.body.classList.toggle("dark-theme");
  document.querySelector("header").classList.toggle("dark-theme");

  if (document.body.classList.contains("dark-theme")) {
    themeToggleButton.textContent = "Modo Claro";
  } else {
    themeToggleButton.textContent = "Modo Oscuro";
  }
});
