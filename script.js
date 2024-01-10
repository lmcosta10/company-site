"use strict";

// Elements
const tabs = document.querySelectorAll(".careers-tab");
const tabsContainer = document.querySelector(".careers-tab-container");
const tabsContent = document.querySelectorAll(".careers-content");
const nav = document.querySelector(".nav");
const allSections = document.querySelectorAll(".section");

// Smooth scroll behavior for nav bar
document.querySelector(".nav-links").addEventListener("click", function (e) {
  e.preventDefault();
  if (e.target.classList.contains("nav-link")) {
    const id = e.target.getAttribute("href");
    const rect = document.querySelector(id).getBoundingClientRect();
    const navRect = nav.getBoundingClientRect();
    window.scrollTo({
      top: rect["y"] - navRect["height"] + window.scrollY,
      behavior: "smooth",
    });
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

// Nav bar fade
const handleHover = function (e) {
  if (e.target.classList.contains("nav-link")) {
    const link = e.target;
    const siblings = link.closest(".nav").querySelectorAll(".nav-link");

    siblings.forEach((el) => {
      if (el !== link) el.style.opacity = this;
    });
  }
};

nav.addEventListener("mouseover", handleHover.bind(0.5));

nav.addEventListener("mouseout", handleHover.bind(1));

// Reveal sections on scroll
const revealSection = function (entries, observer) {
  const [entry] = entries;

  if (!entry.isIntersecting) return;

  entry.target.classList.remove("hidden-section");
  observer.unobserve(entry.target);
};

const sectionObserver = new IntersectionObserver(revealSection, {
  root: null,
  threshold: 0.1,
});

allSections.forEach(function (section) {
  section.classList.add("hidden-section");

  sectionObserver.observe(section);
});
