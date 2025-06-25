// Mobile Navigation Toggle
document.addEventListener("DOMContentLoaded", function () {
  const hamburger = document.getElementById("hamburger");
  const navMenu = document.getElementById("nav-menu");

  hamburger.addEventListener("click", function () {
    hamburger.classList.toggle("active");
    navMenu.classList.toggle("active");
  });

  // Close mobile menu when clicking on a nav link
  document.querySelectorAll(".nav-link").forEach((link) => {
    link.addEventListener("click", function () {
      hamburger.classList.remove("active");
      navMenu.classList.remove("active");
    });
  });

  // Close mobile menu when clicking outside
  document.addEventListener("click", function (event) {
    const isClickInsideNav = navMenu.contains(event.target);
    const isClickOnHamburger = hamburger.contains(event.target);

    if (!isClickInsideNav && !isClickOnHamburger && navMenu.classList.contains("active")) {
      hamburger.classList.remove("active");
      navMenu.classList.remove("active");
    }
  });
});

// Contact Form Handling
const contactForm = document.getElementById("contact-form");
if (contactForm) {
  contactForm.addEventListener("submit", function (e) {
    e.preventDefault();

    // Get form data
    const formData = new FormData(contactForm);
    const name = formData.get("name");
    const email = formData.get("email");
    const phone = formData.get("phone");
    const subject = formData.get("subject");
    const message = formData.get("message");

    // Basic validation
    if (!name || !email || !subject || !message) {
      showNotification("Please fill in all required fields.", "error");
      return;
    }

    if (!isValidEmail(email)) {
      showNotification("Please enter a valid email address.", "error");
      return;
    }

    // Simulate form submission
    showNotification("Thank you for your message! We'll get back to you soon.", "success");
    contactForm.reset();
  });
}

// Email validation helper
function isValidEmail(email) {
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return emailRegex.test(email);
}

// Notification system
function showNotification(message, type) {
  // Remove existing notifications
  const existingNotifications = document.querySelectorAll(".notification");
  existingNotifications.forEach((notification) => notification.remove());

  // Create notification element
  const notification = document.createElement("div");
  notification.className = `notification notification-${type}`;
  notification.innerHTML = `
        <div class="notification-content">
            <span class="notification-message">${message}</span>
            <button class="notification-close">&times;</button>
        </div>
    `;

  // Add notification styles
  notification.style.cssText = `
        position: fixed;
        top: 100px;
        right: 20px;
        z-index: 10000;
        padding: 1rem 1.5rem;
        border-radius: 8px;
        color: white;
        font-family: 'Outfit', sans-serif;
        font-weight: 500;
        max-width: 400px;
        box-shadow: 0 4px 12px rgba(0, 0, 0, 0.15);
        transform: translateX(100%);
        transition: transform 0.3s ease;
        ${type === "success" ? "background-color: #89ba31;" : "background-color: #dc3545;"}
    `;

  const notificationContent = notification.querySelector(".notification-content");
  notificationContent.style.cssText = `
        display: flex;
        justify-content: space-between;
        align-items: center;
        gap: 1rem;
    `;

  const closeButton = notification.querySelector(".notification-close");
  closeButton.style.cssText = `
        background: none;
        border: none;
        color: white;
        font-size: 1.5rem;
        cursor: pointer;
        padding: 0;
        line-height: 1;
    `;

  // Add to page
  document.body.appendChild(notification);

  // Animate in
  setTimeout(() => {
    notification.style.transform = "translateX(0)";
  }, 100);

  // Auto remove after 5 seconds
  setTimeout(() => {
    removeNotification(notification);
  }, 5000);

  // Close button functionality
  closeButton.addEventListener("click", () => {
    removeNotification(notification);
  });
}

function removeNotification(notification) {
  notification.style.transform = "translateX(100%)";
  setTimeout(() => {
    if (notification.parentNode) {
      notification.parentNode.removeChild(notification);
    }
  }, 300);
}

// Smooth scrolling for anchor links
document.querySelectorAll('a[href^="#"]').forEach((anchor) => {
  anchor.addEventListener("click", function (e) {
    e.preventDefault();
    const target = document.querySelector(this.getAttribute("href"));
    if (target) {
      target.scrollIntoView({
        behavior: "smooth",
        block: "start",
      });
    }
  });
});

// Add loading animation for buttons (exclude links and submit buttons)
document.querySelectorAll(".btn").forEach((button) => {
  if (button.type !== "submit" && button.tagName !== "A") {
    button.addEventListener("click", function () {
      // Only add loading state for buttons that don't have specific functionality
      if (!this.classList.contains("btn-loading")) {
        this.classList.add("btn-loading");
        const originalText = this.textContent;

        // Add loading dots animation with CSS
        const style = document.createElement("style");
        style.textContent = `
                    .btn-loading::after {
                        content: '';
                        animation: loading-dots 1.5s infinite;
                    }
                    @keyframes loading-dots {
                        0%, 20% { content: '.'; }
                        40% { content: '..'; }
                        60%, 100% { content: '...'; }
                    }
                `;
        document.head.appendChild(style);

        this.textContent = "Loading";

        // Remove loading state after 2 seconds (simulate action)
        setTimeout(() => {
          this.classList.remove("btn-loading");
          this.textContent = originalText;
          document.head.removeChild(style);
        }, 2000);
      }
    });
  }
});

// Add scroll effect to navbar
window.addEventListener("scroll", function () {
  const navbar = document.querySelector(".navbar");
  if (window.scrollY > 50) {
    navbar.style.backgroundColor = "rgba(255, 255, 255, 0.95)";
    navbar.style.backdropFilter = "blur(10px)";
  } else {
    navbar.style.backgroundColor = "#ffffff";
    navbar.style.backdropFilter = "none";
  }
});

// Add intersection observer for animations
const observerOptions = {
  threshold: 0.1,
  rootMargin: "0px 0px -50px 0px",
};

const observer = new IntersectionObserver(function (entries) {
  entries.forEach((entry) => {
    if (entry.isIntersecting) {
      entry.target.style.opacity = "1";
      entry.target.style.transform = "translateY(0)";
    }
  });
}, observerOptions);

// Observe elements for animation
document.addEventListener("DOMContentLoaded", function () {
  const animatedElements = document.querySelectorAll(".feature-card, .menu-item, .contact-item");

  animatedElements.forEach((element) => {
    element.style.opacity = "0";
    element.style.transform = "translateY(20px)";
    element.style.transition = "opacity 0.6s ease, transform 0.6s ease";
    observer.observe(element);
  });
});

// Add click-to-call functionality for phone numbers
document.querySelectorAll('a[href^="tel:"]').forEach((link) => {
  link.addEventListener("click", function (e) {
    // Check if device supports tel: links
    if (!("ontouchstart" in window)) {
      e.preventDefault();
      showNotification("Phone number copied to clipboard: " + this.textContent, "success");

      // Copy to clipboard
      navigator.clipboard.writeText(this.textContent).catch(() => {
        // Fallback for older browsers
        const textArea = document.createElement("textarea");
        textArea.value = this.textContent;
        document.body.appendChild(textArea);
        textArea.select();
        document.execCommand("copy");
        document.body.removeChild(textArea);
      });
    }
  });
});

// Add mailto functionality enhancement
document.querySelectorAll('a[href^="mailto:"]').forEach((link) => {
  link.addEventListener("click", function (e) {
    // Add subject line for contact emails
    if (this.href === "mailto:info@islandvibes.com") {
      e.preventDefault();
      const subject = encodeURIComponent("Inquiry from Island Vibes Website");
      const body = encodeURIComponent("Hello Island Vibes,\n\nI am interested in...\n\nBest regards,");
      window.location.href = `mailto:info@islandvibes.com?subject=${subject}&body=${body}`;
    }
  });
});
