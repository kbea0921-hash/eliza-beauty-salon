"use strict";

// Progressive enhancement: navigation and native FAQ work without JavaScript.
const header = document.querySelector(".site-header");
const menuButton = document.querySelector(".menu-toggle");
const navigation = document.querySelector(".main-nav");
const desktop = window.matchMedia("(min-width: 1024px)");

if (header && menuButton && navigation) {
  const setMenuOpen = (open, returnFocus = false) => {
    menuButton.setAttribute("aria-expanded", String(open));
    navigation.classList.toggle("is-open", open);
    if (returnFocus) menuButton.focus();
  };

  menuButton.hidden = false;
  header.classList.add("nav-ready");
  menuButton.addEventListener("click", () => {
    setMenuOpen(menuButton.getAttribute("aria-expanded") !== "true");
  });
  header.addEventListener("keydown", (event) => {
    if (event.key === "Escape" && menuButton.getAttribute("aria-expanded") === "true") {
      setMenuOpen(false, true);
    }
  });
  navigation.addEventListener("click", (event) => {
    if (event.target.closest("a")) setMenuOpen(false);
  });
  header.addEventListener("focusout", (event) => {
    if (event.relatedTarget && !header.contains(event.relatedTarget)) setMenuOpen(false);
  });
  desktop.addEventListener("change", () => {
    const focusWasInNav = navigation.contains(document.activeElement);
    setMenuOpen(false, !desktop.matches && focusWasInNav);
  });
}
