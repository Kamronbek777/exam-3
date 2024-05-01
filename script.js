let elBtn = document.querySelector(".header__burger__btn");

elBtn.addEventListener("click", () => {
  document.body.classList.toggle("header__burger__btn--active");
});