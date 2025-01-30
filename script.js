
document.addEventListener('DOMContentLoaded', () => {
    const counters = document.querySelectorAll('.count');
    const speed = 100; // Increase the speed value for slower animation

    counters.forEach(counter => {
        const updateCount = () => {
            const target = +counter.getAttribute('data-target');
            const count = +counter.innerText;

            // Increment the count more slowly
            const increment = target / speed;

            if (count < target) {
                counter.innerText = Math.ceil(count + increment);
                setTimeout(updateCount, 50); // Adjust delay for slower updates
            } else {
                counter.innerText = target; // Ensure the final value is accurate
            }
        };

        updateCount();
    });
});
// document.querySelector('contact-form').addEventListener('submit', function (e) {
//     e.preventDefault(); // Prevent default form submission behavior

//     const params = {
//         name: document.getElementById('from_name').value,
//         email: document.getElementById('email').value,
//         message: document.getElementById('message').value,
//     };

//     emailjs
//         .send('service_6bgu39v', 'template_3tyws1n', params)
//         .then((response) => {
//             console.log('SUCCESS!', response.status, response.text);
//             alert('Your message has been sent successfully!');
//         })
//         .catch((error) => {
//             console.error('FAILED...', error);
//             alert('Failed to send your message. Please try again later.');
//         });
// });

document.addEventListener('DOMContentLoaded', () => {
    const backToTopButton = document.getElementById('backToTop');

    window.addEventListener('scroll', () => {
        // Get the scroll position and the total page height
        const scrollPosition = window.scrollY + window.innerHeight;
        const pageHeight = document.documentElement.scrollHeight;

        // Show the button only when near the bottom of the page
        if (scrollPosition >= pageHeight - 50) {
            backToTopButton.classList.add('show');
        } else {
            backToTopButton.classList.remove('show');
        }
    });

    // Smooth scroll to top when the button is clicked
    backToTopButton.addEventListener('click', (e) => {
        e.preventDefault();

        // Ensure the "top" element exists before scrolling
        const topElement = document.getElementById('top');
        if (topElement) {
            topElement.scrollIntoView({
                behavior: 'smooth',
                block: 'start',
            });
        } else {
            console.error('No element with id "top" found.');
        }
    });
});

document.addEventListener('DOMContentLoaded', () => {
const counters = document.querySelectorAll('.count');

const animateCounters = () => {
counters.forEach((counter) => {
    const updateCount = () => {
        const target = +counter.dataset.target;
        const current = +counter.innerText;
        const increment = target / 100; // Adjust speed by changing this divisor

        if (current < target) {
            counter.innerText = Math.ceil(current + increment);
            setTimeout(updateCount, 30); // Adjust delay for smoother animation
        } else {
            counter.innerText = target;
        }
    };

    updateCount();
});
};

// Trigger animation when section is in view
const observer = new IntersectionObserver(
(entries, observer) => {
    entries.forEach((entry) => {
        if (entry.isIntersecting) {
            animateCounters();
            observer.disconnect(); // Run only once
        }
    });
},
{ threshold: 0.5 }
);

const keyFactsSection = document.querySelector('#key-facts');
observer.observe(keyFactsSection);
});
// Wait for DOM content to load
document.addEventListener('DOMContentLoaded', () => {
    const chatIcon = document.getElementById('chat-icon');
    const contactFormSection = document.getElementById('contact-form-section');

    // Check if the device is not mobile (screen width > 767px)
    if (window.innerWidth > 767) {
        // When the chat icon is clicked, scroll the page to the contact form section
        chatIcon.addEventListener('click', () => {
            contactFormSection.scrollIntoView({
                behavior: 'smooth',
                block: 'start'
            });
        });
    }
});
let lastScrollTop = 0;
const scrollThreshold = 100; // Hide header after scrolling 100px

window.addEventListener("scroll", function() {
    let currentScroll = window.pageYOffset || document.documentElement.scrollTop;

    if (currentScroll > lastScrollTop && currentScroll > scrollThreshold) {
        document.querySelector("header").classList.add("hidden");
    } else {
        document.querySelector("header").classList.remove("hidden");
    }

    lastScrollTop = currentScroll <= 0 ? 0 : currentScroll;
});
const technologiesSection = document.querySelector('.technologies');

function checkVisibility() {
    const sectionTop = technologiesSection.getBoundingClientRect().top;
    const sectionBottom = technologiesSection.getBoundingClientRect().bottom;

    // Check if the section is in the viewport
    if (sectionTop < window.innerHeight && sectionBottom >= 0) {
        technologiesSection.classList.add('visible');
    }
}

window.addEventListener('scroll', checkVisibility);
window.addEventListener('load', checkVisibility); // Check on page load
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

function changeSlide() {
    slides[currentIndex].classList.remove("active");
    currentIndex = (currentIndex + 1) % slides.length;
    slides[currentIndex].classList.add("active");

    // Fade out text before changing
    titleElement.style.opacity = "0";
    textElement.style.opacity = "0";

    setTimeout(() => {
        titleElement.textContent = images[currentIndex].title;
        textElement.textContent = images[currentIndex].text;

        // Fade text back in
        titleElement.style.opacity = "1";
        textElement.style.opacity = "1";
    }, 500);
}

setInterval(changeSlide, 2500); // Change image every 5 seconds
