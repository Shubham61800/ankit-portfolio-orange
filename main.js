
const hamburger = document.querySelector('.hamburger');
document.addEventListener('DOMContentLoaded', () => {
  // Mobile menu toggle
  const nav = document.querySelector('nav');
  
  if (hamburger) {
    hamburger.addEventListener('click', () => {
      hamburger.classList.toggle('open');
      nav.classList.toggle('active');
    });
  }
});
//   // Header scroll effect
  const header = document.querySelector('header');
  window.addEventListener('scroll', () => {
    if (window.scrollY > 100) {
      header.classList.add('scrolled');
    } else {
      header.classList.remove('scrolled');
    }
  })
  

  // GSAP Animations
  gsap.registerPlugin(ScrollTrigger);

  // Animate certification items on scroll
  gsap.utils.toArray('.cert-item').forEach((item, index) => {
    gsap.fromTo(item, 
      { opacity: 0, y: 20 },
      { 
        opacity: 1, 
        y: 0, 
        duration: 0.6, 
        delay: index * 0.1,
        scrollTrigger: {
          trigger: item,
          start: "top 90%",
        }
      }
    );
  });

  // Animate work history items on scroll
  gsap.utils.toArray('.work-item').forEach((item, index) => {
    gsap.fromTo(item, 
      { opacity: 0, y: 20 },
      { 
        opacity: 1, 
        y: 0, 
        duration: 0.6, 
        delay: index * 0.1,
        scrollTrigger: {
          trigger: item,
          start: "top 85%",
        }
      }
    );
  });

  // Animate contact cards on scroll
  gsap.utils.toArray('.contact-card').forEach((card, index) => {
    gsap.fromTo(card, 
      { opacity: 0, y: 20 },
      { 
        opacity: 1, 
        y: 0, 
        duration: 0.6, 
        delay: index * 0.2,
        scrollTrigger: {
          trigger: card,
          start: "top 90%",
        }
      }
    );
  });

  // Smooth scrolling for anchor links
  document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
      e.preventDefault();
      
      if (hamburger && hamburger.classList.contains('open')) {
        hamburger.classList.remove('open');
        nav.classList.remove('active');
      }

      const target = document.querySelector(this.getAttribute('href'));
      if (target) {
        window.scrollTo({
          top: target.offsetTop - 100,
          behavior: 'smooth'
        });
      }
    });
  });

  // Text typing animation for hero heading
  const heroHeading = document.querySelector('.hero-text h1');
  if (heroHeading) {
    const text = heroHeading.textContent;
    heroHeading.textContent = '';
    
    // Add animation class for opacity
    heroHeading.style.opacity = '1';
    heroHeading.style.transform = 'translateY(0)';
    
    // Skip typing animation if reduced motion is preferred
    if (window.matchMedia('(prefers-reduced-motion: no-preference)').matches) {
      let i = 0;
      const typeWriter = () => {
        if (i < text.length) {
          heroHeading.textContent += text.charAt(i);
          i++;
          setTimeout(typeWriter, 50);
        }
      };
      typeWriter();
    } else {
      heroHeading.textContent = text;
    }
  }