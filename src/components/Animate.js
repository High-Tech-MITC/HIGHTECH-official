import { gsap, Power3 } from "gsap";

export const navigationBar = (elem) => {
  gsap.from(elem, {
    xPercent: -20,
    opacity: 0,
    stagger: 0.2,
    duration: 1,
    scale: 1.5,
    ease: "back",
  });
};

export const welcomeHero = (
  welcomeText,
  hightTech,
  description,
  ourservice,
  terminal,
  terminalCursor
) => {
  let textTl = gsap.timeline();
  let terminalTl = gsap.timeline();

  textTl
    .from(welcomeText, {
      y: -90,
      stagger: 0.2,
      opacity: 0,
      scale: 2,
      ease: "back",
    })
    .from(hightTech, {
      y: -50,
      opacity: 0,
      duration: 0.4,
    })
    .from(description, {
      y: -10,
      stagger: 0.2,
      opacity: 0,
      duration: 0.4,
    })
    .from(ourservice, {
      y: -20,
      stagger: 0.2,
      opacity: 0,
    });

  terminalTl
    .from(terminal, {
      scale: 1.5,
      ease: "back",
    })
    .to(terminalCursor, {
      opacity: 0,
      ease: Power3.inOut,
      duration: 0.6,
      repeat: -1,
    });
};
