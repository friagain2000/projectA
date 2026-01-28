// Smooth scroll behavior
document.documentElement.style.scrollBehavior = "smooth";

// Header scroll behavior
const header = document.querySelector(".header");
const initialHeaderBg = "white";
const scrollHeaderBg = "rgba(255, 255, 255, 0.95)";

window.addEventListener("scroll", () => {
  if (window.scrollY > 50) {
    header.style.backgroundColor = scrollHeaderBg;
    header.style.boxShadow = "0 2px 10px rgba(0, 0, 0, 0.1)";
  } else {
    header.style.backgroundColor = initialHeaderBg;
    header.style.boxShadow = "none";
  }
});

// Menu button click handler
const menuButton = document.querySelector(".menu-button");
if (menuButton) {
  menuButton.addEventListener("click", () => {
    // 메뉴 열기 로직 추가 가능
    console.log("Menu clicked");
  });
}

// Carousel dots functionality
const dots = document.querySelectorAll(".carousel-dots .dot");
let currentDot = 0;

function updateDot(index) {
  dots.forEach((dot, i) => {
    dot.classList.toggle("active", i === index);
  });
}

dots.forEach((dot, index) => {
  dot.addEventListener("click", () => {
    currentDot = index;
    updateDot(currentDot);
  });
});

// Auto advance carousel dots
setInterval(() => {
  currentDot = (currentDot + 1) % dots.length;
  updateDot(currentDot);
}, 5000);

// Scroll indicator fade out
const scrollIndicator = document.querySelector(".scroll-indicator");
if (scrollIndicator) {
  window.addEventListener("scroll", () => {
    const opacity = Math.max(0, 1 - window.scrollY / 500);
    scrollIndicator.style.opacity = opacity;
  });
}

// Portfolio items hover effect
const portfolioItems = document.querySelectorAll(".portfolio-item");
portfolioItems.forEach((item) => {
  item.addEventListener("mouseenter", function () {
    this.style.opacity = "0.8";
  });

  item.addEventListener("mouseleave", function () {
    this.style.opacity = "1";
  });
});

// See more links click handlers
const seeMoreLinks = document.querySelectorAll(".see-more-link");
seeMoreLinks.forEach((link) => {
  link.addEventListener("click", (e) => {
    e.preventDefault();
    // 클릭 시 동작 추가 가능
    console.log("See more clicked");
  });

  link.addEventListener("mouseenter", function () {
    this.style.opacity = "0.7";
  });

  link.addEventListener("mouseleave", function () {
    this.style.opacity = "1";
  });
});

// Intersection Observer for fade-in animations
const observerOptions = {
  threshold: 0.1,
  rootMargin: "0px 0px -50px 0px",
};

const observer = new IntersectionObserver((entries) => {
  entries.forEach((entry) => {
    if (entry.isIntersecting) {
      entry.target.style.opacity = "1";
      entry.target.style.transform = "translateY(0)";
    }
  });
}, observerOptions);

// Apply observer to sections
const sections = document.querySelectorAll(
  ".content-section, .portfolio-section",
);
sections.forEach((section) => {
  section.style.opacity = "0";
  section.style.transform = "translateY(20px)";
  section.style.transition = "opacity 0.6s ease, transform 0.6s ease";
  observer.observe(section);
});

// Keyboard navigation
document.addEventListener("keydown", (e) => {
  if (e.key === "ArrowDown") {
    window.scrollBy({
      top: window.innerHeight,
      behavior: "smooth",
    });
  } else if (e.key === "ArrowUp") {
    window.scrollBy({
      top: -window.innerHeight,
      behavior: "smooth",
    });
  }
});

// Service items click handlers
const serviceItems = document.querySelectorAll(".service-item");
serviceItems.forEach((item) => {
  item.addEventListener("mouseenter", function () {
    this.style.transform = "translateY(-5px)";
    this.style.transition = "all 0.3s ease";
  });

  item.addEventListener("mouseleave", function () {
    this.style.transform = "translateY(0)";
  });
});

// Brand grid items click handlers
const brandItems = document.querySelectorAll(".brand-item");
brandItems.forEach((item) => {
  item.addEventListener("click", () => {
    console.log("Brand item clicked");
  });

  item.style.cursor = "pointer";
  item.addEventListener("mouseenter", function () {
    this.style.transform = "scale(1.05)";
    this.style.transition = "transform 0.3s ease";
  });

  item.addEventListener("mouseleave", function () {
    this.style.transform = "scale(1)";
  });
});

// Page load animation
window.addEventListener("load", () => {
  document.body.style.opacity = "1";
});

// Prevent context menu on portfolio items (optional)
portfolioItems.forEach((item) => {
  item.addEventListener("contextmenu", (e) => {
    // e.preventDefault(); // 원하면 활성화
  });
});

console.log("Script loaded successfully");
/* ===================================================================== */
/* ===========================팝          업============================ */
/* ===================================================================== */


