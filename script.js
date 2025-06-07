document.addEventListener('DOMContentLoaded', () => {
    const nav = document.querySelector('nav');
    let lastScroll = 0;

    window.addEventListener('scroll', () => {
        const currentScroll = window.pageYOffset;
        
        if (currentScroll <= 0) {
            nav.classList.remove('scrolled');
            return;
        }

        if (currentScroll > lastScroll && !nav.classList.contains('scrolled')) {
            // Scrolling down
            nav.classList.add('scrolled');
        } else if (currentScroll < lastScroll && nav.classList.contains('scrolled')) {
            // Scrolling up
            nav.classList.remove('scrolled');
        }
        lastScroll = currentScroll;
    });

    // Scroll effect on navbar
    const navbar = document.querySelector('nav');
    window.addEventListener('scroll', () => {
        if (window.scrollY > 50) {
            navbar.style.background = 'rgba(0, 0, 0, 0.9)';
            navbar.style.boxShadow = '0 2px 10px rgba(0, 0, 0, 0.1)';
        } else {
            navbar.style.background = 'transparent';
            navbar.style.boxShadow = 'none';
        }
    });

    // Letter by letter animation
    const letters = document.querySelectorAll('.letter');

    // Function to animate letters
    function animateLetters() {
        letters.forEach((letter, index) => {
            setTimeout(() => {
                letter.style.opacity = '1';
                letter.style.transform = 'translateY(0)';
            }, index * 200); // Adjust timing here
        });
    }

    // Initial animation when page loads
    window.addEventListener('load', animateLetters);

    // Re-animate on scroll back to top
    window.addEventListener('scroll', () => {
        if (window.scrollY < 100) {
            letters.forEach(letter => {
                letter.style.opacity = '0';
                letter.style.transform = 'translateY(50px)';
            });
            setTimeout(animateLetters, 100);
        }
    });

    // Add scroll reveal animations
    const observerOptions = {
        threshold: 0.1
    };

    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('visible');
            }
        });
    }, observerOptions);

    // Observe all elements with class 'fade-in'
    document.querySelectorAll('.fade-in').forEach((el) => {
        observer.observe(el);
    });
});
