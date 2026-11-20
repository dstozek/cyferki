const CORRECT_CODE = "2016";
const form = document.querySelector("#code-form");
const input = document.querySelector("#code");
const hint = document.querySelector("#hint");
const feedback = document.querySelector("#feedback");
const reveal = document.querySelector("#reveal");
const card = document.querySelector(".quest-card");

input.addEventListener("input", () => {
  input.value = input.value.replace(/\D/g, "").slice(0, 4);
  feedback.textContent = "";
  feedback.classList.remove("error");
});

form.addEventListener("submit", (event) => {
  event.preventDefault();
  const code = input.value.trim();

  if (code.length !== 4) {
    showError("Wpisz wszystkie cztery cyfry, poszukiwaczu!");
    input.focus();
    return;
  }

  if (code !== CORRECT_CODE) {
    showError("To nie ten trop. Spróbuj jeszcze raz!");
    input.value = "";
    input.focus();
    return;
  }

  feedback.textContent = "Udało się! Odkrywasz tajemnicę…";
  feedback.classList.remove("error");
  hint.textContent = "Znalazłeś właściwy trop!";
  reveal.classList.add("visible");
  reveal.setAttribute("aria-hidden", "false");
  card.classList.add("is-revealed");
  playDiscoveryChime();
});

function showError(message) {
  feedback.textContent = message;
  feedback.classList.remove("error");
  requestAnimationFrame(() => feedback.classList.add("error"));
}

function playDiscoveryChime() {
  const AudioContextClass = window.AudioContext || window.webkitAudioContext;
  if (!AudioContextClass) return;
  try {
    const context = new AudioContextClass();
    const now = context.currentTime;
    // A soft three-note arpeggio, synthesized locally with no downloaded audio.
    [523.25, 659.25, 783.99].forEach((frequency, index) => {
      const start = now + index * 0.13;
      const oscillator = context.createOscillator();
      const volume = context.createGain();
      oscillator.type = "sine";
      oscillator.frequency.value = frequency;
      volume.gain.setValueAtTime(0.0001, start);
      volume.gain.exponentialRampToValueAtTime(0.12, start + 0.025);
      volume.gain.exponentialRampToValueAtTime(0.0001, start + 0.48);
      oscillator.connect(volume);
      volume.connect(context.destination);
      oscillator.start(start);
      oscillator.stop(start + 0.5);
    });
    window.setTimeout(() => context.close(), 900);
  } catch {
    // The reveal works even when a device has audio disabled or unavailable.
  }
}

if ("serviceWorker" in navigator) {
  window.addEventListener("load", () => {
    navigator.serviceWorker.register("./service-worker.js").catch(() => {});
  });
}
