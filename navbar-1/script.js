// show menu
const showMenu = (toggleId, navId) => {
  const toggle = document.getElementById(toggleId);
  const nav = document.getElementById(navId);

  toggle.addEventListener("click", () => {
    // add show-menu class to nav menu
    nav.classList.toggle("show-menu");
    // add show-icon to show and hide menu
    toggle.classList.toggle("show-icon");
  });
};

showMenu("nav-toggle", "nav-menu");

const toggleDropdown = (dropdownItem) => {
  const dropdownMenu = dropdownItem.querySelector(".dropdown__menu");
  const dropdownArrow = dropdownItem.querySelector(".dropwdown__arrow");

  // Toggle only if screen size is less than 1118px
  if (window.innerWidth < 1118) {
    const isOpen =
      dropdownMenu.style.maxHeight && dropdownMenu.style.maxHeight !== "0px";

    if (isOpen) {
      dropdownMenu.style.maxHeight = "0px";
      dropdownArrow.style.transform = "rotate(0deg)";
    } else {
      dropdownMenu.style.maxHeight = "1000px"; // Adjust this value if needed
      dropdownArrow.style.transform = "rotate(180deg)";
    }
  }
};

const toggleSubDropdown = (subDropdownItem) => {
  const subDropdownMenu = subDropdownItem.querySelector(".dropdown__submenu");
  const dropdownParentMenu = subDropdownItem.closest(".dropdown__menu");
  const subDropdownArrow = subDropdownItem.querySelector(".dropdown__add");

  if (window.innerWidth < 1118) {
    const isSubOpen =
      subDropdownMenu.style.maxHeight &&
      subDropdownMenu.style.maxHeight !== "0px";

    if (isSubOpen) {
      subDropdownMenu.style.maxHeight = "0px";
      subDropdownArrow.style.transform = "rotate(0deg)";
      // Readjust the parent dropdown menu height
      dropdownParentMenu.style.maxHeight = "1000px";
    } else {
      subDropdownMenu.style.maxHeight = "1000px"; // Adjust this value if needed
      subDropdownArrow.style.transform = "rotate(180deg)";
      // Readjust the parent dropdown menu height to fit the expanded sub dropdown
      dropdownParentMenu.style.maxHeight = "2000px"; // Adjust accordingly
    }
  }
};

// event listeners to each main dropdown item
document.querySelectorAll(".dropdown__item").forEach((dropdownItem) => {
  dropdownItem.addEventListener("click", () => toggleDropdown(dropdownItem));
});

// event listeners to each sub dropdown item
document.querySelectorAll(".dropdown__subitem").forEach((subDropdownItem) => {
  subDropdownItem.addEventListener("click", (e) => {
    e.stopPropagation(); // Prevent the parent dropdown from toggling
    toggleSubDropdown(subDropdownItem);
  });
});
