

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
 // Примитивная фронтовая проверка + фейковая "отправка"
    const form = document.getElementById('contactForm');
    const status = document.getElementById('formStatus');

    function validateEmail(v){
      return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(v);
    }

    form.addEventListener('submit', function(e){
      e.preventDefault();
      status.className = 'status';
      status.textContent = '';

      const data = new FormData(form);
      const fullName = data.get('fullName')?.trim();
      const phone = data.get('phone')?.trim();
      const email = data.get('email')?.trim();
      const service = data.get('service');
      const message = data.get('message')?.trim();

      if(!fullName || !phone || !email || !service || !message){
        status.classList.add('error');
        status.textContent = 'Пожалуйста, заполните все поля.';
        return;
      }
      if(!validateEmail(email)){
        status.classList.add('error');
        status.textContent = 'Похоже, email указан некорректно.';
        return;
      }

      // Здесь обычно отправляем на сервер (fetch/axios).
      // Для демо просто покажем успех и очистим форму.
      status.classList.add('success');
      status.textContent = 'Спасибо! Сообщение отправлено. Мы свяжемся с вами в ближайшее время.';
      form.reset();
    });
    function callNow() {
  window.location.href = 'tel:555-55-55';
}

function sendMessage() {
  window.location.href = 'sms:555-55-55';
}
