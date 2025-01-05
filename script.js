const menuBtn = document.getElementById('menu-btn');
const closeBtn = document.getElementById('close-btn');
const dropdown = document.querySelector('.dropdown-menu');
const dropdownLinks = document.querySelectorAll('.dropdown-menu a'); // Select all anchor tags in the dropdown

// Function to open the menu
function openMenu() {
  dropdown.classList.add('active');
  dropdown.classList.remove('closing');
}

// Function to close the menu
function closeMenu() {
  dropdown.classList.add('closing');
  dropdown.classList.remove('active');

  setTimeout(() => {
    dropdown.classList.remove('closing');
  }, 1000); // Match this duration with the CSS transition time
}

// Open the menu when the menu button is clicked
menuBtn.addEventListener('click', () => {
  if (dropdown.classList.contains('active')) {
    closeMenu(); // Close if already open
  } else {
    openMenu(); // Open if closed
  }
});

// Close the menu when the close button is clicked
closeBtn.addEventListener('click', closeMenu);

// Close the menu when any anchor link is clicked
dropdownLinks.forEach(link => {
  link.addEventListener('click', closeMenu); // Close menu when any link is clicked
});
