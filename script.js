// script.js
document.addEventListener('DOMContentLoaded', function () {
    // Smooth Scroll for navigation links
    const links = document.querySelectorAll('.navbar a');
  
    for (const link of links) {
      link.addEventListener('click', function (e) {
        e.preventDefault();
  
        const target = document.querySelector(this.getAttribute('href'));
        target.scrollIntoView({
          behavior: 'smooth',
          block: 'start'
        });
      });
    }
  });
  