document.addEventListener("DOMContentLoaded", () => {
  const hamburger = document.querySelector(".hamburger");
  const navContainer = document.querySelector(".navContainer");

  hamburger.addEventListener("click", () => {
    const isExpanded =
      hamburger.getAttribute("aria-expanded") === "true" || false;
    hamburger.setAttribute("aria-expanded", !isExpanded);
    navContainer.classList.toggle("active");
  });
});
