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

// Navigation Menu Toggle
function initializeNavigation() {
  const hamburger = document.getElementById('hamburger');
  const navMenu = document.getElementById('nav-menu');

  if (hamburger && navMenu) {
    hamburger.addEventListener('click', function () {
      hamburger.classList.toggle('active');
      navMenu.classList.toggle('active');
    });

    // Close menu when clicking on a link
    const navLinks = document.querySelectorAll('.nav-link');
    navLinks.forEach((link) => {
      link.addEventListener('click', function () {
        hamburger.classList.remove('active');
        navMenu.classList.remove('active');
      });
    });
  }
}

// Smooth Scrolling
function initializeSmoothScrolling() {
  const navLinks = document.querySelectorAll('.nav-link');

  navLinks.forEach((link) => {
    link.addEventListener('click', function (e) {
      const href = this.getAttribute('href');

      if (href.startsWith('#')) {
        e.preventDefault();
        const targetId = href.substring(1);
        const targetElement = document.getElementById(targetId);

        if (targetElement) {
          const offsetTop = targetElement.offsetTop - 80;
          window.scrollTo({
            top: offsetTop,
            behavior: 'smooth',
          });
        }
      }
    });
  });
}

// Scroll to Contact Section
function scrollToContact() {
  const contactSection = document.getElementById('contact');
  if (contactSection) {
    const offsetTop = contactSection.offsetTop - 80;
    window.scrollTo({
      top: offsetTop,
      behavior: 'smooth',
    });
  }
}

// Image Swap Function
let currentImageIndex = 0;
const images = [
  'https://via.placeholder.com/500x300/2c5aa0/ffffff?text=Moving+Truck',
  'https://via.placeholder.com/500x300/1e3d72/ffffff?text=Professional+Team',
  'https://via.placeholder.com/500x300/28a745/ffffff?text=Packing+Service',
  'https://via.placeholder.com/500x300/ffd700/2c5aa0?text=Storage+Solutions',
];

function swapImage() {
  const heroImg = document.getElementById('hero-img');
  if (heroImg) {
    currentImageIndex = (currentImageIndex + 1) % images.length;
    heroImg.src = images[currentImageIndex];
  }
}

// Form Validation
function initializeFormValidation() {
  const form = document.getElementById('quote-form');

  if (form) {
    // Add event listeners for real-time validation
    const inputs = form.querySelectorAll('input, select, textarea');
    inputs.forEach((input) => {
      input.addEventListener('blur', validateField);
      input.addEventListener('input', clearErrors);
    });

    // Handle form submission
    form.addEventListener('submit', handleFormSubmit);
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

  if (field.type === 'tel' && value) {
    if (value.length < 10) {
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
    alert('Thank you for your quote request! We will contact you within 24 hours.');
    form.reset();
  } else {
    alert('Please fill in all required fields correctly.');
  }
}

// Add simple CSS for hamburger menu animation
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
