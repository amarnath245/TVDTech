document.addEventListener('DOMContentLoaded', () => {
    // Counter Animation
    const counters = document.querySelectorAll('.count');
    const speed = 100;

    counters.forEach(counter => {
        const updateCount = () => {
            const target = +counter.getAttribute('data-target');
            const count = +counter.innerText;
            const increment = target / speed;

            if (count < target) {
                counter.innerText = Math.ceil(count + increment);
                setTimeout(updateCount, 50);
            } else {
                counter.innerText = target;
            }
        };
        updateCount();
    });

    // Back to Top Button
    const backToTopButton = document.getElementById('backToTop');
    if (backToTopButton) {
        window.addEventListener('scroll', () => {
            const scrollPosition = window.scrollY + window.innerHeight;
            const pageHeight = document.documentElement.scrollHeight;

            if (scrollPosition >= pageHeight - 50) {
                backToTopButton.classList.add('show');
            } else {
                backToTopButton.classList.remove('show');
            }
        });

        backToTopButton.addEventListener('click', (e) => {
            e.preventDefault();
            const topElement = document.getElementById('top');
            if (topElement) {
                topElement.scrollIntoView({
                    behavior: 'smooth',
                    block: 'start',
                });
            }
        });
    }

    // Intersection Observer for Counters (Alternative)
    const animateCounters = () => {
        counters.forEach((counter) => {
            const updateCount = () => {
                const target = +counter.dataset.target;
                const current = +counter.innerText;
                const increment = target / 100;

                if (current < target) {
                    counter.innerText = Math.ceil(current + increment);
                    setTimeout(updateCount, 30);
                } else {
                    counter.innerText = target;
                }
            };
            updateCount();
        });
    };

    // Use Intersection Observer for better performance
    const observer = new IntersectionObserver(
        (entries, observer) => {
            entries.forEach((entry) => {
                if (entry.isIntersecting) {
                    animateCounters();
                    observer.disconnect();
                }
            });
        },
        { threshold: 0.5 }
    );

    const keyFactsSection = document.querySelector('#key-facts');
    if (keyFactsSection) {
        observer.observe(keyFactsSection);
    }

    // Hide Header on Scroll
    let lastScrollTop = 0;
    const scrollThreshold = 100;
    const header = document.querySelector("header");

    if (header) {
        window.addEventListener("scroll", function() {
            let currentScroll = window.pageYOffset || document.documentElement.scrollTop;

            if (currentScroll > lastScrollTop && currentScroll > scrollThreshold) {
                header.classList.add("hidden");
            } else {
                header.classList.remove("hidden");
            }

            lastScrollTop = currentScroll <= 0 ? 0 : currentScroll;
        });
    }

    // Technologies Section Visibility
    const technologiesSection = document.querySelector('.technologies');
    if (technologiesSection) {
        function checkVisibility() {
            const sectionTop = technologiesSection.getBoundingClientRect().top;
            const sectionBottom = technologiesSection.getBoundingClientRect().bottom;

            if (sectionTop < window.innerHeight && sectionBottom >= 0) {
                technologiesSection.classList.add('visible');
            }
        }

        window.addEventListener('scroll', checkVisibility);
        window.addEventListener('load', checkVisibility);
    }

    // Slideshow
    const images = [
        {
            title: "Building a Smarter Future, One Solution at a Time!",
            text: "At Techno Vision Digi Tech, we bring your vision to life with cutting-edge technology solutions."
        },
        {
            title: "Innovative Technology for a Better Tomorrow!",
            text: "Harnessing the power of AI and cloud computing to transform businesses."
        },
        {
            title: "Empowering Businesses with Digital Transformation!",
            text: "We help organizations adapt and grow in the digital era with customized solutions."
        }
    ];

    let currentIndex = 0;
    const slides = document.querySelectorAll(".slide");
    const titleElement = document.getElementById("parallax-title");
    const textElement = document.getElementById("parallax-text");

    if (slides.length > 0 && titleElement && textElement) {
        function changeSlide() {
            slides[currentIndex].classList.remove("active");
            currentIndex = (currentIndex + 1) % slides.length;
            slides[currentIndex].classList.add("active");

            titleElement.style.opacity = "0";
            textElement.style.opacity = "0";

            setTimeout(() => {
                titleElement.textContent = images[currentIndex].title;
                textElement.textContent = images[currentIndex].text;
                titleElement.style.opacity = "1";
                textElement.style.opacity = "1";
            }, 500);
        }

        setInterval(changeSlide, 2500);
    }

    // EmailJS Form
    emailjs.init("cJAE3Z4bRMQO-wjol");
    const contactForm = document.getElementById("contact-form");
    if (contactForm) {
        contactForm.addEventListener("submit", function (e) {
            e.preventDefault();

            const name = document.getElementById("name").value;
            const phone = document.getElementById("phone").value;
            const email = document.getElementById("email").value;
            const message = document.getElementById("message").value;

            const templateParams = {
                from_name: name,
                from_email: email,
                phone: phone,
                message: message
            };

            emailjs
                .send("service_guo3736", "template_pjz5a5h", templateParams)
                .then(
                    function () {
                        alert("Message sent successfully!");
                        contactForm.reset();
                    },
                    function (error) {
                        alert("Failed to send message. Please try again.");
                        console.error("EmailJS Error:", error);
                    }
                );
        });
    }

    // Hamburger Menu
    const hamburger = document.querySelector(".hamburger");
    const navMenu = document.querySelector(".nav-menu");

    if (hamburger && navMenu) {
        hamburger.addEventListener("click", function () {
            navMenu.classList.toggle("active");
        });

        document.addEventListener("click", function (event) {
            if (!hamburger.contains(event.target) && !navMenu.contains(event.target)) {
                navMenu.classList.remove("active");
            }
        });

        window.addEventListener("scroll", function () {
            navMenu.classList.remove("active");
        });
    }

    // Button Click Handler
    document.addEventListener("click", function (e) {
        if (e.target.matches(".btn")) {
            console.log("Button clicked!");
        }
    });

    // JSON-LD Schema
    let script = document.createElement("script");
    script.type = "application/ld+json";
    script.text = JSON.stringify({
        "@context": "https://schema.org",
        "@type": "Organization",
        "name": "TechnoVision Digitech",
        "url": "https://technovisiondigitech.com",
        "logo": "https://res.cloudinary.com/dkncy6yld/image/upload/v1738551015/image-112x112_achabt.png",
        "description": "A leading provider of innovative software solutions",
        "contactPoint": {
            "@type": "ContactPoint",
            "telephone": "+1-8143405005",
            "contactType": "Customer Service"
        }
    });
    document.head.appendChild(script);
});