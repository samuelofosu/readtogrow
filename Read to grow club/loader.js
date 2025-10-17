// loader.js

// Quotes
const quotes = [
  { text: "A reader lives a thousand lives before he dies.", author: "— George R.R. Martin" },
  { text: "The more that you read, the more things you will know.", author: "— Dr. Seuss" },
  { text: "Once you learn to read, you will be forever free.", author: "— Frederick Douglass" },
  { text: "Reading is essential for those who seek to rise above the ordinary.", author: "— Jim Rohn" },
  { text: "Books are a uniquely portable magic.", author: "— Stephen King" },
  { text: "Today a reader, tomorrow a leader.", author: "— Margaret Fuller" }
];

// Create floating books
function createParticles() {
  const loader = document.getElementById('loader');
  const particleCount = 15;
  for (let i = 0; i < particleCount; i++) {
    const particle = document.createElement('div');
    particle.classList.add('book-particle');
    particle.style.left = Math.random() * 100 + 'vw';
    particle.style.top = Math.random() * 100 + 'vh';
    particle.style.transform = `scale(${Math.random() * 0.7 + 0.3}) rotate(${Math.random() * 360}deg)`;
    particle.style.animationDelay = Math.random() * 5 + 's';
    loader.appendChild(particle);
  }
}

// Typewriter quote
function displayRandomQuote() {
  const randomQuote = quotes[Math.floor(Math.random() * quotes.length)];
  const quoteElement = document.getElementById('quote');
  const authorElement = document.getElementById('author');

  let i = 0;
  const speed = 30;

  function typeWriter() {
    if (i < randomQuote.text.length) {
      quoteElement.innerHTML += randomQuote.text.charAt(i);
      i++;
      setTimeout(typeWriter, speed);
    } else {
      authorElement.style.opacity = 1;
      authorElement.innerHTML = randomQuote.author;
    }
  }

  quoteElement.style.opacity = 1;
  typeWriter();
}

// Initialize loader
function initLoader() {
  createParticles();
  displayRandomQuote();

  window.addEventListener('load', () => {
    setTimeout(() => {
      const loader = document.getElementById('loader');
      loader.classList.add('fade-out');
      setTimeout(() => loader.remove(), 800);
    }, 3000);
  });
}

initLoader();
