// Mobile Menu

const menuButton = document.getElementById("menu-btn");
const navLinks = document.getElementById("nav-links");

menuButton.addEventListener("click", () => {
  navLinks.classList.toggle("active");
});


// Close menu after clicking a navigation link

document.querySelectorAll(".nav-links a").forEach((link) => {
  link.addEventListener("click", () => {
    navLinks.classList.remove("active");
  });
});


// Typing Effect

const typingText = document.getElementById("typing-text");

const words = [
  "modern websites.",
  "responsive designs.",
  "digital experiences."
];

let wordIndex = 0;
let characterIndex = 0;
let deleting = false;

function typeEffect() {
  const currentWord = words[wordIndex];

  if (!deleting) {
    typingText.textContent =
      currentWord.substring(0, characterIndex + 1);

    characterIndex++;

    if (characterIndex === currentWord.length) {
      deleting = true;
      setTimeout(typeEffect, 1800);
      return;
    }
  } else {
    typingText.textContent =
      currentWord.substring(0, characterIndex - 1);

    characterIndex--;

    if (characterIndex === 0) {
      deleting = false;
      wordIndex++;

      if (wordIndex === words.length) {
        wordIndex = 0;
      }
    }
  }

  const speed = deleting ? 45 : 90;

  setTimeout(typeEffect, speed);
}

typeEffect();


// Automatic Year

document.getElementById("year").textContent =
  new Date().getFullYear();


// Temporary Project Links

document.querySelectorAll(".project-links a").forEach((link) => {
  link.addEventListener("click", (event) => {
    if (link.getAttribute("href") === "#") {
      event.preventDefault();

      alert(
        "This project link will be added soon. Stay tuned! 🚀"
      );
    }
  });
});