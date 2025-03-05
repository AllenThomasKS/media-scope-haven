
document.addEventListener('DOMContentLoaded', function() {
  // Set current year in the footer
  document.getElementById('current-year').textContent = new Date().getFullYear();
  
  // Initialize entertainment scroll functionality
  const scrollLeftBtn = document.getElementById('scroll-left');
  const scrollRightBtn = document.getElementById('scroll-right');
  const entertainmentScroll = document.querySelector('.entertainment-scroll');
  
  if (scrollLeftBtn && scrollRightBtn && entertainmentScroll) {
    scrollLeftBtn.addEventListener('click', function() {
      entertainmentScroll.scrollBy({ left: -300, behavior: 'smooth' });
    });
    
    scrollRightBtn.addEventListener('click', function() {
      entertainmentScroll.scrollBy({ left: 300, behavior: 'smooth' });
    });
  }
  
  // Add animations to elements as they appear in viewport
  const sections = document.querySelectorAll('section');
  const observer = new IntersectionObserver((entries, observer) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('fade-in');
        observer.unobserve(entry.target);
      }
    });
  }, { threshold: 0.1 });
  
  sections.forEach(section => {
    observer.observe(section);
  });
  
  // Initialize poll bars
  const pollBars = document.querySelectorAll('.poll-bar');
  pollBars.forEach(bar => {
    const percentage = bar.getAttribute('data-percentage');
    bar.style.setProperty('width', `${percentage}%`);
  });
  
  // Reset ticker animation when button clicked
  const tickerButton = document.getElementById('ticker-button');
  const newsTicker = document.querySelector('.news-ticker');
  
  if (tickerButton && newsTicker) {
    tickerButton.addEventListener('click', function() {
      newsTicker.style.animation = 'none';
      void newsTicker.offsetWidth; // Trigger reflow
      newsTicker.style.animation = 'ticker 30s linear infinite';
    });
  }
  
  // Duplicate ticker items if too few to create continuous scroll effect
  const tickerContainer = document.querySelector('.news-ticker');
  const tickerItems = document.querySelectorAll('.ticker-item');
  
  if (tickerContainer && tickerItems.length > 0) {
    // If we have fewer than 10 items, duplicate them to ensure continuous scrolling
    if (tickerItems.length < 10) {
      tickerItems.forEach(item => {
        const clone = item.cloneNode(true);
        tickerContainer.appendChild(clone);
      });
    }
  }
  
  // Add animation to navbar on scroll
  const navbar = document.querySelector('.navbar');
  let lastScrollTop = 0;
  
  window.addEventListener('scroll', function() {
    const scrollTop = window.pageYOffset || document.documentElement.scrollTop;
    
    if (scrollTop > lastScrollTop && scrollTop > 100) {
      // Scrolling down
      navbar.style.transform = 'translateY(-100%)';
      navbar.style.transition = 'transform 0.3s ease-out';
    } else {
      // Scrolling up
      navbar.style.transform = 'translateY(0)';
      navbar.style.transition = 'transform 0.3s ease-out';
    }
    
    lastScrollTop = scrollTop;
  });
  
  // Mobile menu toggle
  const navbarToggler = document.querySelector('.navbar-toggler');
  const navbarCollapse = document.querySelector('.navbar-collapse');
  
  if (navbarToggler && navbarCollapse) {
    navbarToggler.addEventListener('click', function() {
      navbarCollapse.classList.toggle('show');
    });
  }
});
