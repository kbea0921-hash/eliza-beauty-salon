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

// Only the home page exists in this first visual version. Explain future links
// instead of creating empty content pages or taking the visitor to a 404.
const previewDialog = document.querySelector(".preview-dialog");
const previewTitle = document.querySelector("#preview-dialog-title");
const previewText = document.querySelector("#preview-dialog-text");

document.querySelectorAll("[data-pending]").forEach((link) => {
  link.setAttribute("aria-haspopup", "dialog");
  link.addEventListener("click", (event) => {
    event.preventDefault();
    if (!previewDialog || !previewTitle || !previewText) return;
    previewTitle.textContent = `${link.dataset.pending} – később készül el`;
    previewText.textContent = link.dataset.pending === "Adatkezelési tájékoztató"
      ? "Az adatkezelési tájékoztató szövege később, a kurzus sablonjából kerül hozzáadásra. Az űrlap ebben az előnézetben inaktív."
      : "Ebben az első vizuális változatban a Főoldal készült el. A többi tartalmi oldal a következő megvalósítási lépésekben készül el.";
    previewDialog.showModal();
  });
});

// No network request, persistence, or simulated success in the visual preview.
document.querySelector("[data-preview-form]")?.addEventListener("submit", (event) => {
  event.preventDefault();
});
