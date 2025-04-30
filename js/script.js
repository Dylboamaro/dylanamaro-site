window.addEventListener("DOMContentLoaded", () => {
  const header = document.querySelector("header");
  const footer = document.querySelector("#page-footer");

  setTimeout(() => {
    header.classList.remove("hidden-at-start");
    header.classList.add("drop-in");
  }, 200);

  if (footer) {
    const observer = new IntersectionObserver(
      ([entry]) => {
        const footerIcon = document.querySelector(".footer-home-icon");

        if (entry.isIntersecting) {
          header.classList.add("hide-on-footer");
          if (footerIcon) {
            setTimeout(() => {
              footerIcon.classList.add("visible");
            }, 400); // Delay in milliseconds
          }
        } else {
          header.classList.remove("hide-on-footer");
          if (footerIcon) {
            footerIcon.classList.remove("visible");
          }
        }
      },
      {
        root: null,
        threshold: 0.5,
      }
    );

    observer.observe(footer);
  }
});
