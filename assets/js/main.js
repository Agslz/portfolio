/*=============== FILTERS TABS ===============*/
const tabs = document.querySelectorAll("[data-target]"),
  tabContents = document.querySelectorAll("[data-content]");

tabs.forEach((tab) =>
  tab.addEventListener("click", () => {
    const target = document.querySelector(tab.dataset.target);

    tabContents.forEach((tc) => {
      tc.classList.remove("filters__active");
    });
    target.classList.add("filters__active");

    tabs.forEach((t) => {
      t.classList.remove("filter-tab-active");
    });
    tab.classList.add("filter-tab-active");
  })
);

/*=============== DARK LIGHT THEME ===============*/
const themeButton = document.getElementById("theme-button");
const darkTheme = "dark-theme";
const iconTheme = "ri-sun-line";

// Activate dark theme by default
document.body.classList.add(darkTheme);

// Function to toggle theme
const toggleTheme = () => {
  document.body.classList.toggle(darkTheme);
  themeButton.classList.toggle(iconTheme);
  localStorage.setItem("selected-theme", getCurrentTheme());
  localStorage.setItem("selected-icon", getCurrentIcon());
};

// Activate / deactivate the theme manually with the button
themeButton.addEventListener("click", toggleTheme);

// SCROLL REVEAL ANIMATION
const sr = ScrollReveal({
  origin: "top",
  distance: "60px",
  duration: 2500,
  delay: 400,
});

sr.reveal('.profile__border')
sr.reveal('.profile__name', {delay:200})
sr.reveal('.profile__profession', {delay:300})
sr.reveal('.profile__data', {delay:400})
sr.reveal('.profile__info-group', {interval:100, delay:300})
sr.reveal('.profile__buttons', {delay:700})
sr.reveal('.profile__content', {delay:800})
sr.reveal('.filters', {delay:800})
