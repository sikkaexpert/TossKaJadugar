// Background image rotation
let currentImageIndex = 0;
const images = document.querySelectorAll(".bg-image");

function rotateBackground() {
  images[currentImageIndex].classList.remove("active");
  currentImageIndex = (currentImageIndex + 1) % images.length;
  images[currentImageIndex].classList.add("active");
}

setInterval(rotateBackground, 3000);

// Join Telegram function
function joinTelegram() {
  // Replace with actual Telegram channel link
  window.open("https://t.me/+jNNoMKfV-DFjNTdl", "_blank");
}

// Add some interactive effects
document.addEventListener("mousemove", function (e) {
  const cursor = document.createElement("div");
  cursor.style.position = "fixed";
  cursor.style.left = e.clientX + "px";
  cursor.style.top = e.clientY + "px";
  cursor.style.width = "10px";
  cursor.style.height = "10px";
  cursor.style.background = "rgba(0, 212, 255, 0.6)";
  cursor.style.borderRadius = "50%";
  cursor.style.pointerEvents = "none";
  cursor.style.zIndex = "9999";
  document.body.appendChild(cursor);

  setTimeout(() => {
    cursor.remove();
  }, 500);
});

// Animate elements on scroll
function animateOnScroll() {
  const elements = document.querySelectorAll(".stat-card, .feature");
  elements.forEach((element) => {
    const elementTop = element.getBoundingClientRect().top;
    const elementVisible = 150;

    if (elementTop < window.innerHeight - elementVisible) {
      element.style.opacity = "1";
      element.style.transform = "translateY(0)";
    }
  });
}

window.addEventListener("scroll", animateOnScroll);

// Add sparkle effect
function createSparkle() {
  const sparkle = document.createElement("div");
  sparkle.style.position = "fixed";
  sparkle.style.left = Math.random() * window.innerWidth + "px";
  sparkle.style.top = Math.random() * window.innerHeight + "px";
  sparkle.style.width = "4px";
  sparkle.style.height = "4px";
  sparkle.style.background = "#00d4ff";
  sparkle.style.borderRadius = "50%";
  sparkle.style.pointerEvents = "none";
  sparkle.style.zIndex = "1000";
  sparkle.style.animation = "sparkle 2s ease-out forwards";

  document.body.appendChild(sparkle);

  setTimeout(() => {
    sparkle.remove();
  }, 2000);
}

// Add sparkle animation CSS
const style = document.createElement("style");
style.textContent = `
    @keyframes sparkle {
        0% {
            opacity: 1;
            transform: scale(0) rotate(0deg);
        }
        50% {
            opacity: 1;
            transform: scale(1) rotate(180deg);
        }
        100% {
            opacity: 0;
            transform: scale(0) rotate(360deg);
        }
    }
`;
document.head.appendChild(style);

setInterval(createSparkle, 300);
