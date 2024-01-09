"use strict";

// Elements
const tabs = document.querySelectorAll(".careers-tab");
const tabsContainer = document.querySelector(".careers-tab-container");
const tabsContent = document.querySelectorAll(".careers-content");

// Smooth scroll behavior for nav bar
document.querySelector(".nav-links").addEventListener("click", function (e) {
  e.preventDefault();
  if (e.target.classList.contains("nav-link")) {
    const id = e.target.getAttribute("href");
    document.querySelector(id).scrollIntoView({ behavior: "smooth" });
  }
});

// Tabbed component
tabsContainer.addEventListener("click", function (e) {
  const clicked = e.target.closest(".careers-tab");

  if (!clicked) return;

  tabs.forEach((t) => t.classList.remove("careers-tab-active"));
  clicked.classList.add("careers-tab-active");

  tabsContent.forEach((t) => t.classList.remove("careers-content-active"));
  document
    .querySelector(`.careers-content-${clicked.dataset.tab}`)
    .classList.add("careers-content-active");
});
