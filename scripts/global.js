document.addEventListener("DOMContentLoaded", () => {
  const navbarItems = document.querySelectorAll(".navbar__list-item");

  navbarItems.forEach((item) => {
    item.addEventListener("click", (event) => {
      const link = item.querySelector(".navbar__list-link");

      if (link) {
        navbarItems.forEach((item) =>
          item.classList.remove("navbar__list-item--active")
        );

        item.classList.add("navbar__list-item--active");

        window.location.href = link.href;
      }
    });
  });
});
