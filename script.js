// DOM Content Loaded Event
document.addEventListener('DOMContentLoaded', function () {
  // Set current year in footer
  document.getElementById('current-year').textContent = new Date().getFullYear();

  // Initialize navigation
  initializeNavigation();

  // Initialize smooth scrolling
  initializeSmoothScrolling();

  // Initialize form validation
  initializeFormValidation();
});

// Navigation Menu Toggle (Mobile)
function initializeNavigation() {
  const hamburger = document.getElementById('hamburger');
  const navMenu = document.getElementById('nav-menu');

  if (hamburger && navMenu) {
    hamburger.addEventListener('click', function () {
      navMenu.classList.toggle('active');
      hamburger.classList.toggle('active');
    });

    // Close menu when clicking on a link
    const navLinks = document.querySelectorAll('.nav-link');
    navLinks.forEach((link) => {
      link.addEventListener('click', function () {
        navMenu.classList.remove('active');
        hamburger.classList.remove('active');
      });
    });
  }
}

// Smooth Scrolling for Navigation Links
function initializeSmoothScrolling() {
  const navLinks = document.querySelectorAll('a[href^="#"]');

  navLinks.forEach((link) => {
    link.addEventListener('click', function (e) {
      e.preventDefault();

      const targetId = this.getAttribute('href');
      const targetSection = document.querySelector(targetId);

      if (targetSection) {
        const offsetTop = targetSection.offsetTop - 80; // Account for fixed navbar

        window.scrollTo({
          top: offsetTop,
          behavior: 'smooth',
        });
      }
    });
  });
}

// Theme selection functionality removed

// Image Swap Function (Chapter 15-2 requirement)
let currentImageIndex = 0;
const images = [
  'https://via.placeholder.com/400x300/4a90e2/ffffff?text=Portfolio+Image',
  'https://via.placeholder.com/400x300/ff6b6b/ffffff?text=Creative+Work',
  'https://via.placeholder.com/400x300/4ecdc4/ffffff?text=Web+Design',
  'https://via.placeholder.com/400x300/45b7d1/ffffff?text=Development',
];

function swapImage() {
  const heroImg = document.getElementById('hero-img');
  if (heroImg) {
    currentImageIndex = (currentImageIndex + 1) % images.length;
    heroImg.src = images[currentImageIndex];
  }
}

// Form Handling
function initializeFormValidation() {
  const form = document.querySelector('.contact-form');
  if (form) {
    const inputs = form.querySelectorAll('input, select, textarea');

    inputs.forEach((input) => {
      input.addEventListener('blur', validateField);
      input.addEventListener('input', clearErrors);
    });
  }
}

function validateField(e) {
  const field = e.target;
  const value = field.value.trim();

  // Simple validation
  let isValid = true;

  if (field.hasAttribute('required') && !value) {
    isValid = false;
  }

  if (field.type === 'email' && value) {
    if (!value.includes('@')) {
      isValid = false;
    }
  }

  if (!isValid) {
    field.style.borderColor = 'red';
  } else {
    field.style.borderColor = '';
  }

  return isValid;
}

function clearErrors(e) {
  e.target.style.borderColor = '';
}

function handleFormSubmit(e) {
  e.preventDefault();

  const form = e.target;
  let isFormValid = true;

  // Validate all fields
  const inputs = form.querySelectorAll('input, select, textarea');
  inputs.forEach((input) => {
    if (!validateField({ target: input })) {
      isFormValid = false;
    }
  });

  if (isFormValid) {
    alert('Message sent successfully!');
    form.reset();
  } else {
    alert('Please fill in all required fields correctly.');
  }
}

// Simple notification using alert
function showNotification(message) {
  alert(message);
}

// Removed scroll animations for simplicity

// Add simple CSS for hamburger menu
const style = document.createElement('style');
style.textContent = `
    .hamburger.active .bar:nth-child(2) {
        opacity: 0;
    }
    
    .hamburger.active .bar:nth-child(1) {
        transform: translateY(8px) rotate(45deg);
    }
    
    .hamburger.active .bar:nth-child(3) {
        transform: translateY(-8px) rotate(-45deg);
    }
`;
document.head.appendChild(style);

// Removed complex features for simplicity
