
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
            const popup = document.getElementById('popup-modal');
            const closeBtn = document.getElementById('close-popup');
        
            // Check if the user is on a mobile device
            const isMobile = /iPhone|iPad|iPod|Android/i.test(navigator.userAgent);
        
            if (isMobile) {
                popup.classList.add('active'); // Show the popup
            }
        
            // Close the popup when the user clicks the "OK" button
            closeBtn.addEventListener('click', () => {
                popup.classList.remove('active'); // Hide the popup
            });
        });
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

        