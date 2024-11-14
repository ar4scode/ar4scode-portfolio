function toggleActive(button) {
  // Remove "active" class from all buttons
  const buttons = document.querySelectorAll(".nav-links");
  buttons.forEach((btn) => btn.classList.remove("active"));

  // Add "active" class to the clicked button
  button.classList.add("active");
}

// Create window when we click on hire button
const hireMePopup = document.querySelector(".pop-up");

document.querySelector(".hire-me-btn").addEventListener("click", () => {
  hireMePopup.classList.add("pop-up-active");
  hireMePopup.classList.remove("pop-up-not-active");
});

document.querySelector(".exit-btn").addEventListener("click", () => {
  hireMePopup.classList.add("pop-up-not-active");
  hireMePopup.classList.add("pop-up-active");
});
