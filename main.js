// select element function
const selectEl = function (element) {
  return document.querySelector(element);
};

let menuToggler = selectEl(".menu-toggle");
let body = selectEl("body");

menuToggler.addEventListener("click", () => {
  body.classList.toggle("open");
});
