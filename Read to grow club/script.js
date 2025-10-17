// Floating book animation
        document.addEventListener('DOMContentLoaded', function() {
            // Initialize feather icons
            feather.replace();
            
            // Floating animation for elements with .floating class
            anime({
                targets: '.floating',
                translateY: [-10, 10],
                duration: 3000,
                direction: 'alternate',
                easing: 'easeInOutSine',
                loop: true
            });
            
            // Glow effect for buttons on hover
            const glowButtons = document.querySelectorAll('.glow-on-hover');
            glowButtons.forEach(button => {
                button.addEventListener('mouseenter', () => {
                    anime({
                        targets: button,
                        boxShadow: ['0 0 0 rgba(245, 179, 39, 0)', '0 0 20px rgba(245, 179, 39, 0.6)'],
                        duration: 500,
                        easing: 'easeOutQuad'
                    });
                });
                button.addEventListener('mouseleave', () => {
                    anime({
                        targets: button,
                        boxShadow: ['0 0 20px rgba(245, 179, 39, 0.6)', '0 0 0 rgba(245, 179, 39, 0)'],
                        duration: 500,
                        easing: 'easeOutQuad'
                    });
                });
            });
        });

         document.addEventListener('DOMContentLoaded', function() {
        const menuButton = document.querySelector('nav button');
        const navLinks = document.querySelector('nav .md\\:flex');

        menuButton.addEventListener('click', () => {
            navLinks.classList.toggle('hidden');
            navLinks.classList.toggle('flex');
            navLinks.classList.toggle('flex-col');
            navLinks.classList.toggle('space-y-4');
            navLinks.classList.toggle('bg-gray-900');
            navLinks.classList.toggle('p-4');
            navLinks.classList.toggle('absolute');
            navLinks.classList.toggle('top-16');
            navLinks.classList.toggle('left-0');
            navLinks.classList.toggle('w-full');
            navLinks.classList.toggle('text-center');
        });
    });

    
    // Simple fade-in animation for elements as they come into view
        document.addEventListener('DOMContentLoaded', function() {
            const fadeElements = document.querySelectorAll('.fade-in');
            
            const fadeInObserver = new IntersectionObserver((entries) => {
                entries.forEach(entry => {
                    if (entry.isIntersecting) {
                        entry.target.style.opacity = 1;
                        entry.target.style.transform = 'translateY(0)';
                    }
                });
            }, { threshold: 0.1 });
            
            fadeElements.forEach(el => {
                el.style.opacity = 0;
                el.style.transform = 'translateY(20px)';
                el.style.transition = 'opacity 0.6s ease, transform 0.6s ease';
                fadeInObserver.observe(el);
            });
        });

         // Simple animation trigger on scroll
        document.addEventListener('DOMContentLoaded', function() {
            const animatedElements = document.querySelectorAll('.fade-in, .slide-up');
            
            const observer = new IntersectionObserver((entries) => {
                entries.forEach(entry => {
                    if (entry.isIntersecting) {
                        entry.target.style.opacity = 1;
                        entry.target.style.transform = 'translateY(0)';
                    }
                });
            }, { threshold: 0.1 });
            
            animatedElements.forEach(element => {
                observer.observe(element);
                // Set initial state for animations
                if (element.classList.contains('fade-in')) {
                    element.style.opacity = 0;
                }
                if (element.classList.contains('slide-up')) {
                    element.style.opacity = 0;
                    element.style.transform = 'translateY(30px)';
                }
                
                // Apply animation delays if specified
                const delay = element.style.animationDelay;
                if (delay) {
                    element.style.transitionDelay = delay;
                }
            });
            
            // Smooth scroll for join button
            document.querySelector('.join-btn').addEventListener('click', function() {
                // In a real implementation, this would scroll to the membership form
                alert('This would scroll to the membership form in a complete implementation.');
            });
        });

         // Simple scroll animation
        document.addEventListener('DOMContentLoaded', function() {
            const fadeElements = document.querySelectorAll('.fade-in');
            
            const observer = new IntersectionObserver((entries) => {
                entries.forEach(entry => {
                    if (entry.isIntersecting) {
                        entry.target.style.opacity = 1;
                    }
                });
            }, { threshold: 0.1 });
            
            fadeElements.forEach(element => {
                element.style.opacity = 0;
                observer.observe(element);
            });
        });

        // Simple scroll animation
        const animateOnScroll = () => {
            const elements = document.querySelectorAll('.animate-fadeIn');
            elements.forEach(el => {
                const elTop = el.getBoundingClientRect().top;
                const windowHeight = window.innerHeight;
                if (elTop < windowHeight - 100) {
                    el.style.opacity = 1;
                }
            });
        };

        window.addEventListener('scroll', animateOnScroll);
        animateOnScroll(); // Run once on load

        
     // Simple scroll animation
        // const animateOnScroll = () => {
        //     const elements = document.querySelectorAll('.animate-fadeIn');
        //     elements.forEach(el => {
        //         const elTop = el.getBoundingClientRect().top;
        //         const windowHeight = window.innerHeight;
        //         if (elTop < windowHeight - 100) {
        //             el.style.opacity = 1;
        //         }
        //     });
        // };

        // window.addEventListener('scroll', animateOnScroll);
        // animateOnScroll(); // Run once on load

        
    
