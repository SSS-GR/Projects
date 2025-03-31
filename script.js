document.addEventListener("DOMContentLoaded", function() {

    const elements = document.querySelectorAll('.hidden');

    const observer = new IntersectionObserver(entries => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('visible');
            }
        });
    }, { threshold: 0.2 }); // Срабатывает, когда 20% элемента в зоне видимости

    elements.forEach(el => observer.observe(el));

    // Плавный скролл при клике на меню
    document.querySelectorAll('nav ul li a').forEach(anchor => {
        anchor.addEventListener('click', function(e) {
            e.preventDefault();
            const targetId = this.getAttribute('href').substring(1);
            const targetElement = document.getElementById(targetId);
            if (targetElement) {
                window.scrollTo({
                    top: targetElement.offsetTop - 70,
                    behavior: "smooth"
                });
            }
        });
    });

});

// Анимации лого и занавеса:

document.addEventListener("DOMContentLoaded", function () {
    console.log("Страница загружена, запускаем анимацию...");

    const logo = document.getElementById("logo");
    const preloader = document.getElementById("preloader");
    const curtain = document.getElementById("curtain");

    // Анимация логотипа
    gsap.set(logo, { opacity: 0, scale: 0.8 });
    gsap.to(logo, { opacity: 1, scale: 1, duration: 1.5, ease: "power2.out" });

    // Через 2 сек. плавно скрываем логотип и убираем прелоадер
    setTimeout(() => {
        console.log("Скрываем логотип...");
        gsap.to(logo, { opacity: 0, duration: 1, onComplete: () => {
            logo.style.display = "none"; // Полностью убираем логотип после анимации

            console.log("Скрываем preloader...");
            gsap.to(preloader, { opacity: 0, duration: 0.5, onComplete: () => {
                preloader.style.display = "none"; // Полностью убираем прелоадер
                console.log("Появление занавеса...");
                gsap.to(curtain, { opacity: 1, duration: 1 });
            }});
        }});
    }, 2000);

    // Открытие занавеса при клике
    curtain.addEventListener("click", function () {
        console.log("Клик по занавесу!");
        this.classList.add("open");

        setTimeout(() => {
            console.log("Переход на страницу...");
            curtain.style.display = "none";
            document.getElementById("content").style.display = "block";
            document.body.style.overflow = "auto";
        }, 1000);
    });
});

// Реанимируем заголовки
document.addEventListener("DOMContentLoaded", function () {
    const elements = document.querySelectorAll('.hidden');

    const observer = new IntersectionObserver(entries => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                console.log("Добавляем visible:", entry.target); // Проверка
                entry.target.classList.add('visible');
            }
        });
    }, { threshold: 0.2 });

    elements.forEach(el => observer.observe(el));
});
const titles = document.querySelectorAll("h2");
console.log("Найденные заголовки:", titles);
titles[0].classList.add("visible");
console.log("Добавлен класс visible:", titles[0]);

window.onload = function () {
    const titles = document.querySelectorAll("h2");

    const observer = new IntersectionObserver(entries => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add("visible");
                console.log("Добавлен visible к:", entry.target);
            }
        });
    }, { threshold: 0.5 }); // Заголовок должен быть на 50% видим

    titles.forEach(title => observer.observe(title));
};

window.onload = function () {
    const titles = document.querySelectorAll("h2");

    const observer = new IntersectionObserver(entries => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add("visible");
                console.log("Добавлен visible к:", entry.target);
            }
        });
    }, { threshold: 0.5 }); // Заголовок должен быть на 50% видим

    titles.forEach(title => observer.observe(title));
};

