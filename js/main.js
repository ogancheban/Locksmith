

const menuIcon = document.getElementById("menu-icon");
const mobileMenu = document.getElementById("mobile-menu");
const closeMenu = document.getElementById("close-menu");

window.addEventListener("DOMContentLoaded", function() {
  // Скрыть кнопку закрытия при старте
  document.getElementById("close-menu").style.display = "none";
});

// Открытие меню
menuIcon.addEventListener("click", () => {
  mobileMenu.classList.add("open");
  menuIcon.style.display = "none";
  closeMenu.style.display = "block";
  document.body.style.overflow = "hidden";
});

// Закрытие меню
closeMenu.addEventListener("click", () => {
  mobileMenu.classList.remove("open");
  menuIcon.style.display = "block";
  closeMenu.style.display = "none";
  document.body.style.overflow = "";
});

// Закрытие при клике на ссылку
mobileMenu.querySelectorAll("a").forEach(link => {
  link.addEventListener("click", () => {
    mobileMenu.classList.remove("open");
    menuIcon.style.display = "block";
    closeMenu.style.display = "none";
    document.body.style.overflow = "";
  });
});

// Закрытие по Esc
document.addEventListener("keydown", (e) => {
  if (e.key === "Escape") {
    mobileMenu.classList.remove("open");
    menuIcon.style.display = "block";
    closeMenu.style.display = "none";
    document.body.style.overflow = "";
  }
});