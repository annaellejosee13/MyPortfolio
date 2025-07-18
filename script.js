 // Mobile menu toggle
        const menuToggle = document.getElementById('menu-toggle');
        const mobileMenu = document.getElementById('mobile-menu');
        
        menuToggle.addEventListener('click', () => {
            mobileMenu.classList.toggle('hidden');
        });
        
        // Smooth scrolling for navigation links
        document.querySelectorAll('a[href^="#"]').forEach(anchor => {
            anchor.addEventListener('click', function (e) {
                e.preventDefault();
                
                const targetId = this.getAttribute('href');
                const targetElement = document.querySelector(targetId);
                
                if (targetElement) {
                    window.scrollTo({
                        top: targetElement.offsetTop - 80,
                        behavior: 'smooth'
                    });
                    
                    // Close mobile menu if open
                    mobileMenu.classList.add('hidden');
                }
            });
        });
        
        // Highlight active navigation link on scroll
        const sections = document.querySelectorAll('section');
        const navLinks = document.querySelectorAll('.nav-link');
        
        window.addEventListener('scroll', () => {
            let current = '';
            
            sections.forEach(section => {
                const sectionTop = section.offsetTop;
                const sectionHeight = section.clientHeight;
                
                if (pageYOffset >= (sectionTop - 100)) {
                    current = section.getAttribute('id');
                }
            });
            
            navLinks.forEach(link => {
                link.classList.remove('active');
                if (link.getAttribute('href') === `#${current}`) {
                    link.classList.add('active');
                }
            });
        });
        
        // Back to top button
        const backToTopButton = document.getElementById('back-to-top');
        
        window.addEventListener('scroll', () => {
            if (window.pageYOffset > 300) {
                backToTopButton.classList.remove('opacity-0', 'invisible');
                backToTopButton.classList.add('opacity-100', 'visible');
            } else {
                backToTopButton.classList.remove('opacity-100', 'visible');
                backToTopButton.classList.add('opacity-0', 'invisible');
            }
        });
        
        backToTopButton.addEventListener('click', () => {
            window.scrollTo({
                top: 0,
                behavior: 'smooth'
            });
        });
        
        // Animate skill bars on scroll
        const skillBars = document.querySelectorAll('.skill-progress');
        
        function animateSkillBars() {
            skillBars.forEach(bar => {
                const width = bar.style.width;
                bar.style.width = '0%';
                
                setTimeout(() => {
                    bar.style.width = width;
                }, 100);
            });
        }
        
        // Intersection Observer for skill bars animation
        const skillsSection = document.getElementById('skills');
        
        const observer = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    animateSkillBars();
                    observer.unobserve(entry.target);
                }
            });
        }, { threshold: 0.1 });
        
        if (skillsSection) {
            observer.observe(skillsSection);
        }
        
        // Form submission
    //    const contactForm = document.querySelector('form');
    //     if (contactForm) {
    //         contactForm.addEventListener('submit', (e) => {
    //             e.preventDefault();
                
    //             // Get form values
    //             const firstName = document.getElementById('first-name').value;
    //             const email = document.getElementById('email').value;
                
    //             // Simple validation
    //             if (!firstName || !email) {
    //                 alert('Veuillez remplir tous les champs obligatoires.');
    //                 return;
    //             }
                
    //             // Here you would typically send the form data to a server
    //             alert(`Merci pour votre message, ${firstName}! Je vous répondrai dès que possible à l'adresse ${email}.`);
                
    //             // Reset form
    //             contactForm.reset();
    //         });
    //     }
        
         
// document.addEventListener('DOMContentLoaded', function () {
//     const form = document.getElementById('contact-form');
//     if (!form) return;

//     form.addEventListener('submit', async function (e) {
//         e.preventDefault();
//         const data = {
//             firstName: form.firstName.value,
//             lastName: form.lastName.value,
//             email: form.email.value,
//             subject: form.subject.value,
//             message: form.message.value
//         };

//         try {
//             const response = await fetch('http://localhost:5000/api/contact/send', {
//                 method: 'POST',
//                 headers: { 'Content-Type': 'application/json' },
//                 body: JSON.stringify(data)
//             });

//             const result = await response.json();
//             if (result.success) {
//                 alert('Message envoyé avec succès !');
//                 form.reset();
//             } else {
//                 alert('Erreur lors de l\'envoi du message.');
//             }
//         } catch (error) {
//             alert('Erreur réseau ou serveur.');
//         }
//     });
// });




        