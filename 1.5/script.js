document.addEventListener("DOMContentLoaded", function () {
    console.log("Страница загружена, запускаем анимацию...");

    // 🌟 1. Анимация логотипа и шторки
    const logo = document.getElementById("logo");
    const preloader = document.getElementById("preloader");
    const curtain = document.getElementById("curtain");

    gsap.set(logo, { opacity: 0, scale: 0.8 });
    gsap.to(logo, { opacity: 1, scale: 1, duration: 1.5, ease: "power2.out" });

    setTimeout(() => {
        gsap.to(logo, { opacity: 0, duration: 1, onComplete: () => {
            logo.style.display = "none";
            gsap.to(preloader, { opacity: 0, duration: 0.5, onComplete: () => {
                preloader.style.display = "none";
                gsap.to(curtain, { opacity: 1, duration: 1 });
            }});
        }});
    }, 2000);

    curtain.addEventListener("click", function () {
        console.log("Клик по занавесу!");
        this.classList.add("open");
        setTimeout(() => {
            curtain.style.display = "none";
            document.getElementById("content").style.display = "block";
            document.body.style.overflow = "auto";
        }, 1000);
    });

    // 🌟 2. Анимация заголовков и скрытых элементов
    const elements = document.querySelectorAll('.hidden, h2'); // Теперь включает h2

    const observer = new IntersectionObserver(entries => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                console.log("Добавляем visible:", entry.target);
                entry.target.classList.add('visible');
            }
        });
    }, { threshold: 0.3 });

    elements.forEach(el => observer.observe(el));

    // 🌟 3. Плавный скролл при клике на менюы
    document.querySelectorAll('nav ul li a').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
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
