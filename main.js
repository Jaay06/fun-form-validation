const btn = document.querySelector(".btn");
const formEl = document.querySelector(".form");
const errEl = document.querySelector(".error__msg");

var position;

btn.addEventListener("mouseover", function () {
  if (!formEl.checkValidity()) {
    position ? (position = 0) : (position = 100);
    btn.style.transform = `translate(${position}px, 0px)`;
    btn.style.transition = "all 0.3s ease";
  } else {
    return;
  }
});

btn.addEventListener("click", function () {
  e.preventDefault();
  alert("welldone");
});
