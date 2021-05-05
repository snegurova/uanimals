
//Shop radio buttons
const radioButtons = document.querySelectorAll('.products-filter__item');

const toggleActive = (elements) => {
  elements.forEach((el) => {
    el.classList.toggle("active");
  });
};

radioButtons.forEach((radioButton) => {
  radioButton.addEventListener('click', (e) => {
    e.preventDefault();
    toggleActive(radioButtons);
  });
});
