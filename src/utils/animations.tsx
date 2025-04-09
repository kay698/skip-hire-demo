import gsap from "gsap";

export const animateHeaders = () => {
  gsap.from(
    "#skip-select-wrap .fadein-header, #skip-select-wrap .fadein-subheader",
    {
      y: 20,
      opacity: 0,
      duration: 0.8,
      ease: "power2.out",
      stagger: 0.15,
    }
  );

  gsap.to(
    "#skip-select-wrap .fadein-header, #skip-select-wrap .fadein-subheader",
    {
      y: 0,
      opacity: 1,
      duration: 0.8,
      ease: "power2.out",
      stagger: 0.15,
    }
  );
};

// 2. Body Content Animation (standalone)
export const animateBody = () => {
  gsap.from("#skip-select-wrap .fadein-body", {
    y: 15,
    opacity: 0,
    duration: 0.6,
    ease: "power2.out",
    stagger: 0.07,
  });

  gsap.to("#skip-select-wrap .fadein-body", {
    y: 0,
    opacity: 1,
    duration: 0.6,
    ease: "power2.out",
    stagger: 0.07,
  });
};
