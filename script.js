var tl = gsap.timeline();

gsap.set(".birthday", { opacity: 0 });
gsap.set(".birthday.name", { opacity: 0, y: 20 });
gsap.set(".birthday.name.fa.label", { opacity: 0, y: 40 });
gsap.set(".cake", { opacity: 0 });

tl.to(".year.highlight", {
  y: -140,
  opacity: 0,
  duration: 1.2,
  ease: "power2.in"
});

tl.call(() => {
  const el = document.querySelector(".year.highlight");
  if (el) {
    el.innerHTML = "6";
    gsap.set(el, { y: 140 });
  }
});

tl.to(".year.highlight", {
  y: 0,
  opacity: 1,
  duration: 1.2,
  ease: "bounce.out",
  filter: "hue-rotate(360deg)",
  onComplete: () => {
    document.querySelectorAll(".year, .year.highlight").forEach(el => {
      el.classList.add("shadow");
    });
  }
});

tl.to(".year, .year.highlight", {
  y: 200,
  opacity: 0,
  duration: 1,
  delay: 1,
  ease: "power2.in"
});

tl.to(".birthday", {
  opacity: 1,
  duration: 2,
  ease: "power2.out"
});

tl.to(".birthday.name", {
  opacity: 1,
  y: 0,
  duration: 1,
  stagger: 0.5,
  onStart: () => {
    const age = document.querySelector('.birthday.name.fa.label.age');
    let counter = 0;
    const intervalId = setInterval(() => {
      age.innerHTML = counter;
      counter += 1;
      if (counter > 14) {
        clearInterval(intervalId);
      }
    }, 100);
  },
  ease: "power2.out"
}, "-=0.6");

tl.to(".birthday.name.fa.label", {
  opacity: 1,
  filter: "hue-rotate(360deg)",
  duration: 1.5,
  repeat: -1,
  ease: "power2.out"
}, "+=0.4");

tl.to(".cake", {
  opacity: 1,
  duration: 1.5,
  ease: "bounce .out"
}, "-=1.5");
