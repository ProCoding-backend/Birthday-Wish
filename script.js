document.body.addEventListener('click', () => {
    if (!document.fullscreenElement) {
        document.documentElement.requestFullscreen().catch((err) => {
            console.log(`Error attempting to enable fullscreen: ${err.message}`);
        });
    }
    const promptObj = document.querySelector(".fullscreen-prompt");
    if(promptObj) promptObj.style.display = "none";
}, { once: true });

var tl = gsap.timeline();
const words = document.querySelectorAll('.word');

const letters = [
  words[0].textContent.split(''),
  words[1].textContent.split(''),
  words[2].textContent.split(''),
  words[3].textContent.split('')
];

words.forEach(word => word.innerHTML = '');

letters.forEach((wordLetters, index) => {
  wordLetters.forEach(letter => {
    words[index].innerHTML += `<span class="letter${index}">${letter}</span>`;
    gsap.set(`.letter${index}`, { opacity: 0 });
  });
});

gsap.set(".birthday", { opacity: 0 });
gsap.set(".birthday.name", { opacity: 0, y: 30 });
gsap.set(".birthday.name.fa.label", { opacity: 0, y: 50 });
gsap.set(".cake", { opacity: 0 });

tl.to(".year.highlight", {
  y: -150,
  opacity: 0,
  duration: 1.5,
  ease: "power3.in"
});

tl.call(() => {
  const el = document.querySelector(".year.highlight");
  if (el) {
    el.innerHTML = "6";
    gsap.set(el, { y: 150 });
  }
});

tl.to(".year.highlight", {
  y: 0,
  opacity: 1,
  duration: 1.5,
  ease: "bounce.out",
  filter: "hue-rotate(360deg)",
  onComplete: () => {
    document.querySelectorAll(".year, .year.highlight").forEach(el => {
      el.classList.add("shadow");
    });
  }
});

tl.to(".year, .year.highlight", {
  y: 250,
  opacity: 0,
  duration: 1.2,
  delay: 1.2,
  ease: "power3.in"
});

tl.to(".birthday", {
  opacity: 1,
  duration: 2.5,
  ease: "power2.out"
});

tl.to(".birthday.name", {
  opacity: 1,
  y: 0,
  duration: 1.2,
  stagger: 0.6,
  ease: "power3.out"
}, "-=0.8");

tl.to(".birthday.name.fa.label", {
  opacity: 1,
  y: 0,
  filter: "hue-rotate(360deg)",
  duration: 1.8,
  stagger: 0.4,
  ease: "power2.out"
}, "+=0.2");

tl.to(".cake", {
  opacity: 1,
  duration: 1,
  ease: "bounce.out"
}, "-=0.2");

tl.to(".birthday, .birthday.name, .birthday.name.fa.label, .cake", {
  opacity: 0.15,
  delay: 1.5,
  duration: 1.5,
  ease: "power2.inOut"
});

tl.to(".letter0, .letter1, .letter2, .letter3", {
  opacity: 1,
  duration: 1,
  ease: "power2.out",
  stagger: 0.1
});

tl.to(".letter0, .letter1, .letter2, .letter3", {
  opacity: 0,
  delay: 1.5,
  duration: 1,
  ease: "power2.in",
  stagger: 0.1
});

tl.to(".birthday, .birthday.name, .birthday.name.fa.label, .cake", {
  opacity: 1,
  duration: 1.5,
  ease: "power2.inOut"
});

tl.to(".birthday.name.fa.label", {
  filter: "hue-rotate(360deg)",
  duration: 2,
  repeat: -1,
  yoyo: true,
  ease: "sine.inOut"
}, "+=0.2");
