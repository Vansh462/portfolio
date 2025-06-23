import confetti from 'canvas-confetti';
import { shouldShowConfettiAdvanced } from './userPreferences';

// Brand colors for confetti
const brandColors = ['#4f46e5', '#7c3aed', '#06b6d4', '#10b981', '#f59e0b'];

// Confetti configurations
export const confettiEffects = {
  // Subtle hero welcome effect - reduced intensity
  heroWelcome: () => {
    const duration = 2000; // Reduced from 3000ms
    const animationEnd = Date.now() + duration;
    const defaults = {
      startVelocity: 20, // Reduced from 30
      spread: 60, // Reduced from 360 for more controlled spread
      ticks: 40, // Reduced from 60 for shorter particle life
      zIndex: 0,
      colors: brandColors,
      scalar: 0.7, // Smaller particles
    };

    function randomInRange(min: number, max: number) {
      return Math.random() * (max - min) + min;
    }

    const interval = setInterval(function() {
      const timeLeft = animationEnd - Date.now();

      if (timeLeft <= 0) {
        return clearInterval(interval);
      }

      const particleCount = 15 * (timeLeft / duration); // Reduced from 50

      // Left side - more subtle
      confetti({
        ...defaults,
        particleCount: Math.floor(particleCount),
        origin: { x: randomInRange(0.1, 0.25), y: randomInRange(0.1, 0.3) }
      });

      // Right side - more subtle
      confetti({
        ...defaults,
        particleCount: Math.floor(particleCount),
        origin: { x: randomInRange(0.75, 0.9), y: randomInRange(0.1, 0.3) }
      });
    }, 400); // Increased interval from 250ms for less frequent bursts
  },

  // Success burst for contact form
  contactSuccess: () => {
    confetti({
      particleCount: 100,
      spread: 70,
      origin: { y: 0.6 },
      colors: brandColors,
      ticks: 200,
      gravity: 1,
      decay: 0.94,
      startVelocity: 30,
    });
  },

  // Subtle sparkle for project interactions
  projectSparkle: (element?: HTMLElement) => {
    const rect = element?.getBoundingClientRect();
    const x = rect ? (rect.left + rect.width / 2) / window.innerWidth : 0.5;
    const y = rect ? (rect.top + rect.height / 2) / window.innerHeight : 0.5;

    confetti({
      particleCount: 30,
      spread: 60,
      origin: { x, y },
      colors: brandColors,
      ticks: 100,
      gravity: 0.8,
      decay: 0.9,
      startVelocity: 20,
      scalar: 0.8,
    });
  },

  // Gentle celebration for testimonials reveal
  testimonialsReveal: () => {
    confetti({
      particleCount: 50,
      angle: 60,
      spread: 55,
      origin: { x: 0, y: 0.8 },
      colors: brandColors,
      ticks: 150,
      gravity: 0.8,
      decay: 0.92,
      startVelocity: 25,
    });
    
    confetti({
      particleCount: 50,
      angle: 120,
      spread: 55,
      origin: { x: 1, y: 0.8 },
      colors: brandColors,
      ticks: 150,
      gravity: 0.8,
      decay: 0.92,
      startVelocity: 25,
    });
  },

  // Micro celebration for achievements/stats
  statsReveal: () => {
    confetti({
      particleCount: 25,
      spread: 40,
      origin: { y: 0.7 },
      colors: brandColors,
      ticks: 80,
      gravity: 0.6,
      decay: 0.95,
      startVelocity: 15,
      scalar: 0.6,
    });
  }
};

// Utility to trigger confetti with delay
export const triggerConfettiWithDelay = (
  effect: keyof typeof confettiEffects,
  delay: number = 0,
  element?: HTMLElement
) => {
  setTimeout(() => {
    if (effect === 'projectSparkle') {
      confettiEffects[effect](element);
    } else {
      confettiEffects[effect]();
    }
  }, delay);
};

// Industry standard: Show confetti by default, respect user preference
export const shouldShowConfetti = shouldShowConfettiAdvanced;
