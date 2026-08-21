/* ============================================
   SHAKIL R. — AUTHOR WEBSITE
   Shared JavaScript
   ============================================ */

document.addEventListener('DOMContentLoaded', function() {
    // Mobile navigation toggle
    const navToggle = document.querySelector('.nav-toggle');
    const navLinks = document.querySelector('.nav-links');

    if (navToggle && navLinks) {
        navToggle.addEventListener('click', function() {
            navToggle.classList.toggle('open');
            navLinks.classList.toggle('open');
        });

        // Close mobile menu when a link is clicked
        document.querySelectorAll('.nav-links a').forEach(link => {
            link.addEventListener('click', () => {
                navToggle.classList.remove('open');
                navLinks.classList.remove('open');
            });
        });
    }

    // Close mobile menu when clicking outside
    document.addEventListener('click', function(e) {
        if (navLinks && navLinks.classList.contains('open') &&
            !navLinks.contains(e.target) &&
            !navToggle.contains(e.target)) {
            navToggle.classList.remove('open');
            navLinks.classList.remove('open');
        }
    });

    // Smooth scroll for anchor links
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function(e) {
            const targetId = this.getAttribute('href');
            if (targetId === '#') return;
            const target = document.querySelector(targetId);
            if (target) {
                e.preventDefault();
                target.scrollIntoView({ behavior: 'smooth', block: 'start' });
            }
        });
    });

    // Add active class to current page link
    const currentPage = window.location.pathname.split('/').pop() || 'index.html';
    document.querySelectorAll('.nav-links a').forEach(link => {
        const linkPage = link.getAttribute('href');
        if (linkPage === currentPage) {
            link.classList.add('active');
        }
    });

    // Footer year auto-update
    const yearElements = document.querySelectorAll('.current-year');
    if (yearElements.length > 0) {
        const currentYear = new Date().getFullYear();
        yearElements.forEach(el => el.textContent = currentYear);
    }
});
